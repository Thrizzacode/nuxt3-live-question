<script setup>
const { $useLoading } = useNuxtApp();

function openLoading() {
  const load = $useLoading().show();
  setTimeout(() => {
    load.hide();
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>
