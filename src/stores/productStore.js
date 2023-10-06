import { defineStore } from "pinia";
import axios from "axios";
export const useProductStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data;
        this.products = this.products.map((product) => {
          return { ...product, quantity: 1 };
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
