import { createStore } from "vuex";

import modules from "./modules";

export default createStore({
  modules,
  // state: {},
  // // mutations 會拿來改變 state 狀態
  // mutations: {},
  // // getters 算是 vuex 的 computed
  // getters: {
  //   // authModalShow: (state) => state.authModalShow,
  // },
  // actions: {
  //   // context 參數代表整個 store
  //   // commit 是第一個參數 context 解構來的
  //   // const { commit, state, dispatch } = context;
  //   // 第二個參數 payload 為傳入的參數
  //   // dispatch 可以呼叫其他的 actions
  // },
});
