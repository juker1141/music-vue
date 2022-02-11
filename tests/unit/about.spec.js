import About from "@/views/About.vue";
// 由 vuecli 提供 可以將 component 在web以外實體化
import { shallowMount } from "@vue/test-utils";
// mount 跟 shallowMount 差異在於 shallowMount 只會讀component本身
// 不會載入裡面其他載入的

describe("About.vue", () => {
  test("renders inner text", () => {
    // 兩種寫法是一樣的
    // const wrapper = mount(About, {
    //   shallow: true,
    // });

    const wrapper = shallowMount(About);

    expect(wrapper.text()).toContain("about");
  });
});
