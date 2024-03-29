<template>
  <main>
    <!-- Music Header -->
    <section class="w-full mb-8 py-14 text-center text-white relative">
      <div
        class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
        style="background-image: url(/assets/img/song-header.png)"
      ></div>
      <div class="container mx-auto flex items-center">
        <!-- Play/Pause Button -->
        <button
          type="button"
          class="z-50 p-8 text-3xl bg-white text-black rounded-full focus:outline-none flex items-center justify-center"
          @click.prevent="newSong(song)"
        >
          <i
            class="fas"
            :class="{ 'fa-play': !playing, 'fa-pause': playing }"
          ></i>
        </button>
        <div class="z-50 text-left ml-8">
          <!-- Song Info -->
          <div class="text-3xl font-bold">{{ song.modifiedName }}</div>
          <div>{{ song.genre }}</div>
          <div class="song-price">{{ $n(1, "currency") }}</div>
        </div>
      </div>
    </section>
    <!-- Form -->
    <section class="container mx-auto mt-6" id="comments">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <!-- Comment Count -->
          <span class="card-title">
            {{
              $tc("song.commentCount", song.commentCount, {
                count: song.commentCount,
              })
            }}
          </span>
          <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
        </div>
        <div class="p-6">
          <div
            class="text-white text-center font-bold p-4 mb-4"
            v-if="commentShowAlert"
            :class="commentAlertVariant"
          >
            {{ commentAlertMessage }}
          </div>
          <VeeForm
            :validation-schema="schema"
            @submit="addComment"
            v-if="userLoggedIn"
          >
            <VeeField
              as="textarea"
              name="comment"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4"
              placeholder="Your comment here..."
            ></VeeField>
            <ErrorMessage class="text-red-600" name="comment" />
            <button
              :disabled="commentInSubmission"
              type="submit"
              class="py-1.5 px-3 rounded text-white bg-green-600 block"
            >
              Submit
            </button>
          </VeeForm>
          <!-- Sort Comments -->
          <select
            v-model="sort"
            class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          >
            <option value="1">Latest</option>
            <option value="2">Oldest</option>
          </select>
        </div>
      </div>
    </section>
    <!-- Comments -->
    <ul class="container mx-auto">
      <li
        class="p-6 bg-gray-50 border border-gray-200"
        v-for="comment in sortedComments"
        :key="comment.docID"
      >
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">{{ comment.name }}</div>
          <time>{{ comment.datePosted }}</time>
        </div>
        <p>
          {{ comment.content }}
        </p>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { songsCollection, auth, commentsCollection } from "@/includes/firebase";

export default {
  name: "Song",
  data() {
    return {
      song: {},
      schema: {
        comment: "required|min:3",
      },
      commentInSubmission: false,
      commentShowAlert: false,
      commentAlertVariant: "bg-blue-500",
      commentAlertMessage: "Please wait! Your comment is being submitted",
      comments: [],
      sort: "1",
    };
  },
  computed: {
    ...mapState({
      userLoggedIn: (state) => state.auth.userLoggedIn,
    }),
    ...mapGetters(["playing"]),
    sortedComments() {
      // 使用空的 slice 來創造一個新的陣列
      return this.comments.slice().sort((a, b) => {
        if (this.sort === "1") {
          // 如果是正的，b會排在前面
          return new Date(b.datePosted) - new Date(a.datePosted);
        }

        return new Date(a.datePosted) - new Date(b.datePosted);
      });
    },
  },
  watch: {
    sort(newVal) {
      // 如果已經在此路由參數上，就不去更新了
      if (newVal === this.$route.query.sort) return;

      this.$router.push({
        query: {
          sort: newVal,
        },
      });
    },
  },
  methods: {
    ...mapActions(["newSong"]),
    async addComment(values, { resetForm }) {
      this.commentInSubmission = true;
      this.commentShowAlert = true;
      this.commentAlertVariant = "bg-blue-500";
      this.commentAlertMessage = "Please wait! Your comment is being submitted.";

      const comment = {
        content: values.comment,
        datePosted: new Date().toString(),
        sid: this.$route.params.id, // songId
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
      };

      await commentsCollection.add(comment);

      this.song.commentCount += 1;
      await songsCollection.doc(this.$route.params.id).update({
        commentCount: this.song.commentCount,
      });

      this.getComments();

      this.commentInSubmission = false;
      this.commentAlertVariant = "bg-green-500";
      this.commentAlertMessage = "Comment added!";

      // validateForm 自己的 reset，可以清空表單
      resetForm();
    },
    async getComments() {
      const snapshots = await commentsCollection
        .where("sid", "==", this.$route.params.id)
        .get();

      this.comments = [];

      snapshots.forEach((document) => {
        this.comments.push({
          docID: document.id,
          ...document.data(),
        });
      });
    },
  },
  async beforeRouteEnter(to, from, next) {
    // 為了讓元素一起載入，使用 beforeRouteEnter 來抓資料
    // 因為是比 created 還要早的路由守衛，所以根本沒有 this
    // const docSnapshot = await songsCollection.doc(this.$route.params.id).get();
    const docSnapshot = await songsCollection.doc(to.params.id).get();

    next((vm) => {
      // 若是用戶去了已不存在資料庫的歌曲頁面
      // 將會被踢回首頁
      if (!docSnapshot.exists) {
        vm.$router.push({ name: "home" });
        return;
      }

      const { sort } = vm.$route.query;

      // eslint-disable-next-line no-param-reassign
      vm.sort = sort === "1" || sort === "2" ? sort : "1";

      // snapshot 要呼叫 data 才是我們需要的資料
      // eslint-disable-next-line no-param-reassign
      vm.song = docSnapshot.data();
      vm.getComments();
    });
  },
};
</script>
