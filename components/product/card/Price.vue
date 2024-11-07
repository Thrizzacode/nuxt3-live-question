<template>
  <p class="product-price">{{ price }}</p>
</template>

<script lang="ts" setup>
defineProps({
  price: String,
});
</script>

<style>
.product-price {
  font-size: 16px;
  color: #007bff;
  text-align: center;
  margin-bottom: 16px;
}
</style>
