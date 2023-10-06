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
      const existingProduct = this.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        product.quantity = 1;
        this.cartItems.push(product);
      }

      this.saveCart();
    },

    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      this.saveCart();
    },
  },
});
