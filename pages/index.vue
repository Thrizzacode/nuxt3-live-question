<script setup>
import { useScreens } from "vue-screen-utils";
/*
起始日期 => 當前日期
結束日期 => 下一天
日期格式需要是  YYYY-MM-DD

*/
const today = new Date();
const tommorow = new Date(today);
const nextyear = new Date(today);
tommorow.setDate(tommorow.getDate() + 1);
nextyear.setDate(nextyear.getDate() + 365);

const date = ref({
  start: today,
  end: tommorow,
});

const minDate = ref(today);
const maxDate = ref(nextyear);

/*
調整日期的格式
*/
const masks = {
  title: "西元YYYY 年 MM 月",
  modelValue: "YYYY-MM-DD",
};

/*
  使用  vue-screen-utils 套件調整響應式設定
*/

const { mapCurrent } = useScreens({
  md: "768px",
});
const columns = mapCurrent({ md: 2 }, 1);
const position = mapCurrent({ md: "left" }, "center");
const expanded = mapCurrent({ md: false }, true);
</script>

<template>
  <div class="container mt-5 date-picker">
    <ClientOnly>
      <!-- 加入 DatePicker 實作日期選取的功能  -->
      <DatePicker
        v-model.range.string="date"
        color="primary"
        :min-date="minDate"
        :max-date="maxDate"
        :masks="masks"
        :rows="1"
        :columns="columns"
        :title-position="position"
        :expanded="expanded"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.date-picker {
  // 使用 CSS 變數覆蓋 VCalendar 套件的預設樣式
  :deep(.vc-primary) {
    --vc-accent-200: #f9f9f9;
    --vc-accent-600: #000000;
    --vc-accent-700: #000000;
  }

  :deep(.vc-title) {
    background: none;
  }
  :deep(.vc-arrow) {
    background: none;
  }
  :deep(.vc-pane-layout) {
    gap: 60px;
  }
}
</style>
