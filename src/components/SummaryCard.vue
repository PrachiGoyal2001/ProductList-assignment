<template>
  <div class="summary-card-container">
    
    <div class="product-info">
      <div class="product-name">{{ productDetail.name }}</div>
      <div class="product-category">{{ productDetail.category }}</div>
      <div class="product-price">₹ {{ productDetail.price }}</div>
    </div>

    <div class="action-section">
      
      <div class="summary-quantity">
        <div 
          @click="store.updateCartQuantity(productDetail, -1)" 
          class="quantity-btn">−</div>

        <div class="quantity-value">
          {{ productDetail.quantity }}
        </div>

        <div 
          @click="store.updateCartQuantity(productDetail, 1)" 
          class="quantity-btn">+</div>
      </div>

      <button 
        @click="store.removeProductFromCart(productDetail.id)" 
        class="remove-btn"
      >
        Remove
      </button>

    </div>
  </div>
</template>


<script setup>
import { useProductsStore } from '../store/ProductStore';

const store = useProductsStore();

defineProps({
  productDetail:{
    type: Object,
    default: ()=>({})
  }
})
</script>

<style scoped>
.summary-card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background: #ffffff;
  gap: 20px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
  color: #222;
}

.product-category {
  font-size: 14px;
  color: #777;
}

.product-price {
  font-size: 16px;
  font-weight: 600;
  color: #2e7d32;
}

.action-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.summary-quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.quantity-btn {
  padding: 6px 12px;
  cursor: pointer;
  font-size: 18px;
  background: #f5f5f5;
  transition: 0.2s ease;
  user-select: none;
}

.quantity-value {
  padding: 6px 14px;
  min-width: 30px;
  text-align: center;
  font-weight: 500;
}

.remove-btn {
  padding: 6px 12px;
  background: #ff5252;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;
}

@media (max-width: 768px) {
  .summary-card-container {
    padding: 14px;
  }

  .action-section {
    gap: 14px;
  }
}

@media (max-width: 500px) {
  .summary-card-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .action-section {
    width: 100%;
    justify-content: space-between;
  }

  .summary-quantity {
    flex-grow: 1;
  }
}
</style>