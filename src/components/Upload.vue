<template>
  <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
    </div>
    <div class="p-6">
      <!-- Upload Dropbox -->
      <div
        class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
        :class="{ 'bg-green-400 border-green-400 border-solid': isDragover }"
        @drag.prevent.stop=""
        @dragstart.prevent.stop=""
        @dragend.prevent.stop="isDragover = false"
        @dragover.prevent.stop="isDragover = true"
        @dragenter.prevent.stop="isDragover = true"
        @dragleave.prevent.stop="isDragover = false"
        @drop.prevent.stop="upload($event)"
      >
        <h5>Drop your files here</h5>
      </div>
      <hr class="my-6" />
      <!-- Progess Bars -->
      <div class="mb-4" v-for="upload in uploads" :key="upload.name">
        <!-- File Name -->
        <div class="font-bold text-sm">{{ upload.name }}</div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress Bar -->
          <div
            class="transition-all progress-bar bg-blue-400"
            :class="'bg-blue-400'"
            :style="{ width: `${upload.currentProgress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from "@/includes/firebase";

export default {
  name: "Upload",
  data() {
    return {
      isDragover: false,
      uploads: [],
    };
  },
  methods: {
    upload($event) {
      this.isDragover = false;

      // 因為目標檔案其實不是一個陣列
      // 透過這個方式讓他轉為一個陣列
      const files = [...$event.dataTransfer.files];

      files.forEach((file) => {
        if (file.type !== "audio/mpeg") return;

        // 等同於我們的 firebase 儲存桶 - music-aeb3c.appspot.com
        const storageRef = storage.ref();
        // child 會創建父 Ref 下的路由 - music-aeb3c.appspot.com/songs/example.mp3
        const songsRef = storageRef.child(`songs/${file.name}`);
        const task = songsRef.put(file);

        const uploadIndex = this.uploads.push({
          task,
          currentProgress: 0,
          name: file.name,
          variant: "bg-blue-400",
          icon: "fas fa-spinner fa-spin",
          textClass: "",
        }) - 1;

        task.on("state_changed", (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploads[uploadIndex].currentProgress = progress;
        });
      });

      console.log(files);
    },
  },
};
</script>
