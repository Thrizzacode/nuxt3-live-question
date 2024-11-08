export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  onMounted(async () => {
    isLoading.value = true;
    try {
      const response = await fetch(
        "https://nuxr3.zeabur.app/api/v1/home/news/"
      );
      const data = await response.json();
      newsList.value = data.result;
      console.log(newsList.value);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  });

  return { isLoading, newsList };
};
