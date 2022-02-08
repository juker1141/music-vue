import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";
import Song from "@/views/Song.vue";

import store from "@/store";

const routes = [
  {
    name: "home",
    path: "/", // example.com/
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    // alias: "/manage", // 路由的別名，能解決使用者用到舊的路由紀錄時，仍可以導向新的路由
    path: "/manage-music",
    meta: {
      // 自定義路由參數
      requiresAuth: true,
    },
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log("manage guard");
      next();
    },
  },
  {
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    name: "song",
    path: "/song/:id",
    component: Song,
  },
  {
    path: "/:catchAll(.*)*", // 可以抓到任何不存在的路由
    redirect: { name: "home" }, // 若抓到不存在的路由，將他們導向首頁
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 如果路由完全匹配，要加入的 class
  linkExactActiveClass: "text-yellow-500",
});

// 全域路由守衛
router.beforeEach((to, from, next) => {
  // 檢查是否有 requiresAuth 屬性，如果"沒有該屬性"就會去該去的頁面
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  // 剩下"有該屬性"後，檢查是否登入，如果沒有登入就導回去首頁
  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
