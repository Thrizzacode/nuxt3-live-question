// export const useBookingStore =
export const useBookingStore = defineStore("booking", () => {
  const bookingInfo = ref({});

  const setBookingInfo = (info) => {
    bookingInfo.value = info;
  };

  return {
    setBookingInfo,
    bookingInfo,
  };
});
