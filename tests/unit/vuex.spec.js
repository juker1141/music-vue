import { createStore } from "vuex";
import auth from "@/store/modules/auth";

// 把會 import 到 firebase 的程式碼 mock 掉
jest.mock("@/includes/firebase", () => {});

describe("Vuex store", () => {
  test("toggleAuth mutation sets userLoggedIn to true", () => {
    const store = createStore({
      modules: { auth },
    });

    expect(store.state.auth.userLoggedIn).not.toBe(true);
    store.commit("toggleAuth");

    expect(store.state.auth.userLoggedIn).toBe(true);
  });
});
