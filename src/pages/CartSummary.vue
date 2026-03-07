<template>
  <div class="page-wrapper">
    <div class="cart-summary-container">
      <div class="cart-empty" v-if="isCartEmpty">Your Cart is Empty</div>
      <div v-else>
        <div class="card-content">
          <div class="cart-content" v-for="product in productsInCart" :key="product.id">
            <summary-card :product-detail="product"/>
          </div>
        </div>

        <div class="cart-total">
          Total {{getTotal}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import {storeToRefs} from 'pinia';
import { useProductsStore } from '../store/ProductStore';
import SummaryCard from '../components/SummaryCard.vue';

const { productsInCart } = storeToRefs(useProductsStore());

const isCartEmpty = computed(() => !productsInCart.value.length); 

const getTotal = computed(()=>{
  const total = productsInCart.value.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
  return total.toFixed(2);
})
</script>

<style scoped>
.page-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;   
  align-items: center;       
  overflow: hidden;          
  background: #f5f5f5;
}
.cart-empty{
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.cart-summary-container {
  width: 60%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  overflow-y: auto;
  scrollbar-width: none;
}

.cart-summary-container::-webkit-scrollbar {
  display: none;
}

.card-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.cart-content {
  margin-bottom: 15px;
}

.cart-total {
  padding: 20px;
  border-top: 1px solid #ddd;
  font-weight: bold;
  background: white;
  position: sticky;
  bottom: 0px;
}

@media (max-width: 900px){
  .cart-summary-container{
    width: 75%;
  }
}

@media (max-width: 600px){
  .cart-summary-container{
    width: 90%;
  }
}

@media (max-width: 400px){
  .cart-summary-container{
    width: 95%;
  }
}
</style>