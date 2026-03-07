
<template>
  <div>
    <div class="search-container">
      <div class="search-criteria">
          <div class="search-input">
              <input type="text" placeholder="Search Product here..." v-model="searchQuery"/>
          </div>
          <div class="search-dropdown">
              <select v-model="selectedCategory">
                  <option v-for="category in productCategories" :key="category" :value="category">{{category}}</option>
              </select>
          </div>
      </div>
      <RouterLink class="cart-section" to="cart-summary">
          🛒 Cart <span>{{totalProductsInCart}}</span>
      </RouterLink>
    </div>
    <all-product-list :all-products="getFilteredProducts"/>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import AllProducts from "../products.json";
import { useProductsStore } from '../store/ProductStore';
import AllProductList from "../components/AllProductList.vue";

const productCategories = ['All', 'Electronics','Clothing','Kitchen','Books'];
const allProducts = AllProducts;

const searchQuery = ref('');
const selectedCategory= ref('All');
const { totalProductsInCart } = storeToRefs(useProductsStore());


const getFilteredProducts= computed(()=>
    allProducts.filter(
        (product)=> product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
                    && (selectedCategory.value === 'All' || product.category === selectedCategory.value) 
))

</script>

<style>
.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #ffffff;
  flex-wrap: wrap;
  gap: 12px;
}

.search-criteria {
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 250px;
}

.search-input input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
}

.search-dropdown select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
}

.cart-section {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  position: relative;
}

.cart-section span {
  background: #ff5252;
  color: white;
  font-size: 13px;
  padding: 3px 8px;
  border-radius: 20px;
  font-weight: 600;
  min-width: 22px;
  text-align: center;
}

@media (max-width: 768px) {
  .search-container {
    padding: 12px 16px;
  }

  .search-criteria {
    gap: 8px;
  }

  .cart-section {
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .search-container {
    flex-direction: column;
    align-items: stretch;
  }

  .search-criteria {
    flex-direction: column;
    width: 100%;
  }

  .search-input input{
    width: 100%;
  }

  .search-dropdown select {
    width: 100%;
  }

  .cart-section {
    justify-content: center;
    width: 100%;
    padding-top: 6px;
  }
}

</style>
