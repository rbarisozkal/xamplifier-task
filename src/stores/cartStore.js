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
    initializeCart() {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        this.cartItems = JSON.parse(storedCart);
      }
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },

    addToCart(product) {
      this.cartItems.push(product);
      this.saveCart(); // Save the updated cart to local storage
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      this.saveCart(); // Save the updated cart to local storage
    },
  },
});
