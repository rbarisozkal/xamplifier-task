<template>
  <div class="products-page">
    <h1>Product Listing</h1>
    <div id="my-table">
      <b-row v-for="product in paginatedProducts" :key="product.id">
        <Product :product="product" />
      </b-row>
    </div>
    <b-pagination align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage"
      aria-controls="my-table"></b-pagination>
  </div>
</template>

<script>
import Product from "../components/products-components/Product.vue";
import { useProductStore } from "../stores/productStore";

export default {
  data() {
    return {
      products: [],
      perPage: 3,
      currentPage: 1,
    };
  },
  components: {
    Product,
  },
  computed: {
    rows() {
      return this.products.length;
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.products.slice(startIndex, endIndex);
    },
  },
  methods: {
    async fetchProducts() {
      useProductStore().fetchProducts();
      this.products = useProductStore().products;
    },
  },
  async mounted() {
    await this.fetchProducts();
  },
};
</script>

<style>
.products-page {
  padding: 4rem;
}
</style>
