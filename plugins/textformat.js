export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("textformat", (el, binding) => {
    const bindingArg = {
      uppercase: binding.value.toUpperCase(),
      lowercase: binding.value.toLowerCase(),
    };
    el.innerHTML = bindingArg[binding.arg];
  });
});
