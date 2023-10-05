<template>
  <div class="products-page">
    <h1>Product Listing</h1>
    <b-row v-for="product in products" :key="product.id">
        <Product :product="product"/>
    </b-row>
  </div>
</template>
<script>
import Product from "../components/products-components/Product.vue";
import { useProductStore } from "../stores/productStore";

export default {
    data() {
        return {
            products: [],
        };
    },
    components: {
      Product 
    },
    methods: {
        async fetchProducts() {
            useProductStore().fetchProducts();
            this.products = useProductStore().products;
        },
    },
    mounted() {
        this.fetchProducts();
    },
};
</script>

<style>
.products-page{
  padding: 8rem;
}</style>