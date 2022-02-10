import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";
import "./assets/tailwind.css";
import "./assets/main.css";
import i18n from "./includes/i18n";
import "./registerServiceWorker";
import GlobalComponents from "./includes/_globals";
import ProgressBar from "./includes/progress-bar";
import "nprogress/nprogress.css";

ProgressBar(router);

let app;
// 先掛載 firebase 的監聽，再去建立 vue app
auth.onAuthStateChanged(() => {
  // 如果 vue app已經初始化過了，那就不會在初始化一次
  if (!app) {
    app = createApp(App);

    app.use(i18n); // 匯入 i18n 套件

    app.use(store); // 匯入 Vuex
    app.use(router); // 匯入 Vue router
    app.use(VeeValidatePlugin); // 匯入表單驗證系統
    app.use(GlobalComponents);
    app.directive("icon", Icon);

    app.mount("#app");
  }
});
