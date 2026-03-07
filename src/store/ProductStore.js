import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    productsInCart:[],
 }),

  getters: {
    totalProductsInCart: (state) => state.productsInCart.length,
  },

  actions: {
    addToCart(product){
        this.productsInCart.push({
          ...product,
          quantity: 1
      })
    },
    updateCartQuantity(product, amount) {

      product.quantity += amount

      if (product.quantity <= 0) {
        this.productsInCart = this.productsInCart.filter((p)=>p.id !== product.id);
      }
    },
    removeProductFromCart(productId){
      this.productsInCart = this.productsInCart.filter((p)=>p.id !== productId);
    }
  },
})