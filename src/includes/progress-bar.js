import NProgress from "nprogress";

export default (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  // 因為路由會自動呼叫此 function 所以我們不用另外呼叫
  router.afterEach(NProgress.done);
};
