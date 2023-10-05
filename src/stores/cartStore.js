import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cartItems: [],
  }),
  getters: {
    cartItemCount() {
      return this.cartItems.length;
    },
  },
  actions: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
  },
});
