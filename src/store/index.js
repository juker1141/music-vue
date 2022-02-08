import { createStore } from "vuex";
import { auth, userCollection } from "@/includes/firebase";
import { Howl } from "howler";

import helper from "@/includes/helper";

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
    currentSong: {},
    sound: {},
    seek: "00:00",
    duration: "00:00",
    playerProgress: "0%",
  },
  mutations: {
    toggleAuthModal: (state) => {
      // 更改登入註冊的視窗是否開啟
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      // 更改登入狀態
      state.userLoggedIn = !state.userLoggedIn;
    },
    newSong(state, payload) {
      state.currentSong = payload;
      state.sound = new Howl({
        src: [payload.url],
        html5: true,
      });
    },
    updatePosition(state) {
      state.seek = helper.formatTime(state.sound.seek());
      state.duration = helper.formatTime(state.sound.duration());
      state.playerProgress = `${
        (state.sound.seek() / state.sound.duration()) * 100
      }%`;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing();
      }

      return false;
    },
  },
  actions: {
    // context 參數代表整個 store
    // commit 是第一個參數 context 解構來的
    // 第二個參數 payload 為傳入的參數
    async register({ commit }, payload) {
      // 1.使用用戶的信箱及密碼去註冊 firebase 用戶系統
      const uesrCred = await auth.createUserWithEmailAndPassword(
        payload.email,
        // firebase 自動會把, 移除導致eslint報錯，所以註解此行
        // eslint-disable-next-line comma-dangle
        payload.password
      );

      // 2.使用.doc生成一個文件檔並且給予檔名為註冊用戶的uid
      // 3.把用戶的基本資料寫入到資料庫的文件內
      await userCollection.doc(uesrCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      // 4.在 firebase 用戶系統中，將用戶個人資料的姓名欄更新
      await uesrCred.user.updateProfile({
        displayName: payload.name,
      });

      // 5.更新登入狀態
      commit("toggleAuth");
    },
    async login({ commit }, payload) {
      // 1.登入 firebase 用戶系統
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      // 2.更新登入狀態
      commit("toggleAuth");
    },
    initLogin({ commit }) {
      // 1.看資料庫有沒有已有使用者
      const user = auth.currentUser;

      // 2.若有使用者，更新登入狀態
      if (user) {
        commit("toggleAuth");
      }
    },
    async signOut({ commit }) {
      // 1.登出 firebase 用戶系統
      await auth.signOut();

      // 2.更新登入狀態
      commit("toggleAuth");
    },
    // dispatch 可以呼叫其他的 actions
    async newSong({ commit, state, dispatch }, payload) {
      if (state.sound instanceof Howl) {
        // 如果已經存在播放的音樂，把它移除
        state.sound.unload();
      }

      commit("newSong", payload);

      state.sound.play();

      state.sound.on("play", () => {
        requestAnimationFrame(() => {
          dispatch("progress");
        });
      });
    },
    async toggleAudio({ state }) {
      if (!state.sound.playing) return;

      if (state.sound.playing()) {
        state.sound.pause();
      } else {
        state.sound.play();
      }
    },
    progress({ commit, state, dispatch }) {
      commit("updatePosition");

      if (state.sound.playing()) {
        requestAnimationFrame(() => {
          dispatch("progress");
        });
      }
    },
    updateSeek({ state, dispatch }, payload) {
      if (!state.sound.playing) return;

      const { x, width } = payload.currentTarget.getBoundingClientRect();

      // Document = 2000, Timeline = 1000, Click = 500, Distance = 500
      const clickX = payload.clientX - x;
      const percentage = clickX / width;
      const seconds = state.sound.duration() * percentage;

      console.log(state.sound);
      state.sound.seek(seconds);

      state.sound.once("seek", () => {
        dispatch("progress");
      });
    },
  },
});
