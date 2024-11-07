<template>
  <div class="product-image">
    <img :src="imageSrc" :alt="altText" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: String,
  altText: String,
});
</script>

<style>
.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}
</style>
