<template>
  <main>
    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div
        class="absolute inset-0 w-full h-full introduction-bg bg-cover"
        style="background-image: url(assets/img/header.png)"
      ></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">{{ $t("home.listen") }}!</h1>
          <p class="w-full md:w-8/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et dolor mollis, congue augue non, venenatis elit. Nunc justo eros,
            suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna
            pulvinar, fringilla lorem eget, ullamcorper urna.
          </p>
        </div>
      </div>

      <img
        class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
        src="assets/img/introduction-music.png"
      />
    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div
          class="px-6 pt-6 pb-5 font-bold border-b border-gray-200"
          v-icon-secondary="{ icon: 'headphones-alt', right: true }"
        >
          <span class="card-title">Songs</span>
          <!-- Icon -->
        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <AppSongItem v-for="song in songs" :key="song.docID" :song="song" />
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </main>
</template>

<script>
import { songsCollection } from "@/includes/firebase";
import AppSongItem from "@/components/SongItem.vue";
import IconSecondary from "@/directives/icon-secondary";

export default {
  name: "Home",
  components: {
    AppSongItem,
  },
  // 在此component 上註冊 v-test 標籤
  directives: {
    "icon-secondary": IconSecondary,
  },
  data() {
    return {
      songs: [],
      maxPerPage: 25,
      peddingRequest: false,
    };
  },
  methods: {
    async getSongs() {
      // 為防止用戶不停執行該非同步行為，增加一個阻擋判斷
      if (this.peddingRequest) {
        return;
      }

      this.peddingRequest = true;

      let snapshots;

      // 判斷是不是第一次撈資料
      // 若為 true，則執行 else 不會去執行 starAfter 這個搜尋的動作
      // 若為 false，則執行只搜尋剩餘資料的動作
      if (this.songs.length) {
        // 取得第一次得到資料中的最後一筆文檔
        const lastDoc = await songsCollection
          .doc(this.songs[this.songs.length - 1].docID)
          .get();

        // orderBy 是對取得的資料進行排序
        // starAfter 可以用文檔來搜尋該文檔"以後的"資料，參數為最後一個已有的文檔
        // limit 會限制取得的資料數量，參數可以帶入要取得的資料數量
        // get 是最後取得資料時會呼叫的動作
        snapshots = await songsCollection
          .orderBy("modifiedName")
          .startAfter(lastDoc)
          .limit(this.maxPerPage)
          .get();
      } else {
        snapshots = await songsCollection
          .orderBy("modifiedName")
          .limit(this.maxPerPage)
          .get();
      }

      snapshots.forEach((document) => {
        this.songs.push({
          docID: document.id,
          ...document.data(),
        });
      });

      this.peddingRequest = false;
    },
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

      if (bottomOfWindow) this.getSongs();
    },
  },
  async created() {
    this.getSongs();

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
