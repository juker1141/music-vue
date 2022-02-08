export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-green-400 text-xl`;

    if (binding.arg === "full") {
      iconClass = binding.value;
    }

    if (binding.value.right) {
      iconClass += " float-right";
    }

    // if (binding.modifiers.yellow) {
    //   iconClass += " text-yellow-400";
    // } else {
    //   iconClass += " text-green-400";
    // }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
