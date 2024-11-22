export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();
  const { $swal, isHydration, payload } = useNuxtApp();

  if (import.meta.client && isHydration && payload.serverRendered) {
    return;
  }

  const token = useCookie("auth");
  if (!token.value) return navigateTo("/login");

  try {
    const authStatus = await $fetch(
      "https://nuxr3.zeabur.app/api/v1/user/check",
      {
        method: "GET",
        headers: {
          Authorization: token.value,
        },
      }
    );
    console.log(authStatus.status);
  } catch (error) {
    token.value = null;
    return navigateTo("/login");
  }
});
