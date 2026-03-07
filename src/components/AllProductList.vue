<template>
  <div class="all-product-list-container">
   <div v-for="product in allProducts" :key="product.id">
        <product-card :product="product"/>
   </div>
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";

defineProps({
  allProducts:{
    type:Array,
    default:()=>[]
  },
})

</script>

<style>
.all-product-list-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px 20px;
  max-width: 1200px;
  margin: auto;
}
.all-product-list-container > div {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  transition: 0.3s ease;
}

@media (max-width: 900px) {
  .all-product-list-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 500px) {
  .all-product-list-container {
    grid-template-columns: 1fr;
    padding: 20px 15px;
  }

  .all-product-list-container > div {
    padding: 14px;
  }
}

</style>
