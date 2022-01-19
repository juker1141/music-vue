import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import "./assets/tailwind.css";
import "./assets/main.css";

let app;
// 先掛載 firebase 的監聽，再去建立 vue app
auth.onAuthStateChanged(() => {
  // 如果 vue app已經初始化過了，那就不會在初始化一次
  if (!app) {
    app = createApp(App);

    app.use(store); // 匯入 Vuex
    app.use(router); // 匯入 Vue router
    app.use(VeeValidatePlugin); // 匯入表單驗證系統

    app.mount("#app");
  }
});
