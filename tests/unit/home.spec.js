import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import SongItem from "@/components/SongItem.vue";

// 把會 import 到 firebase 的程式碼 mock 掉
jest.mock("@/includes/firebase", () => {});

describe("Home.vue", () => {
  test("render list of songs", () => {
    const songs = [{}, {}, {}];

    const component = shallowMount(Home, {
      data() {
        return { songs };
      },
      // 把 i18n 的 $t function mock 掉
      global: {
        mocks: {
          $t: (message) => message,
        },
      },
    });

    // 把會呼叫到 firebase 的 function mock 掉
    Home.methods.getSongs = () => false;

    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);
  });
});
