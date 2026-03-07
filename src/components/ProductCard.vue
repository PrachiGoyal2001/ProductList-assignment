
<template>
  <div class="product-card-container">
    <div>{{product.name}}</div>
    <div>{{product.category}}</div>
    <div>{{product.price}}</div>
    <button @click="addProductToCart" :class="isProductInCart ? 'bg-green': 'bg-blue' ">
      {{isProductInCart ? 'Added to Cart' : 'Add to Cart'}}</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../store/ProductStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useProductsStore();
const props = defineProps({
  product:{
    type:Object,
    default: ()=>({})
  }
})

const isProductInCart = computed(() => {
  return store.productsInCart.some(
    (product) => product.id === props.product.id
  )
})

const addProductToCart = ()=>{
  if (isProductInCart.value) {
    router.push("/cart-summary");
  } else {
    store.addToCart(props.product);
  }
}
</script>

<style scoped>
.product-card-container{
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 6px;
    text-align: center;
    background-color: white;
}

.product-card-container div{
    margin-bottom: 6px;
}

.bg-green{
  background-color: green;
}
.bg-blue{
  background-color: #007bff;
}
button{
    padding: 10px 12px;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    width: 90%;
    margin: auto;
}
</style>