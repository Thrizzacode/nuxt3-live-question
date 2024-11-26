export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("timeformat", (el, binding) => {
    // el.innerHTML = binding.value.toLocaleTimeString();
    //轉換成yyyy-mm-dd hh:mm:ss格式
    el.innerHTML = new Date(binding.value).toLocaleString();
  });
});
