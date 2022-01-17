import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidatePlugin from "./includes/validation";
import "./assets/tailwind.css";
import "./assets/main.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VeeValidatePlugin); // 匯入表單驗證系統

app.mount("#app");
