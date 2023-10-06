<template>
    <b-card class="card">
      <div class="card-content">
        <div class="image-container">
          <div class="image-box">
            <img :src="product.image" :alt="product.title" class="card-img-top" />
          </div>
        </div>
        <div class="descriptions">
            <div class="details-container">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">Price: ${{ product.price }}</p>
                <p class="card-text">Category: {{ product.category }}</p>
            </div>
            <b-card-footer class="footer-card">
                <b-button @click="addToCart(product)" variant="success" class="w-100">Show</b-button>
                <Drawer/>
            </b-card-footer>
        </div>
      </div>
    </b-card>
  </template>
  
  <script>
  import Drawer from './Drawer.vue';
  export default {
    name: "Product",
    data(){
        return {
            showSidebar: false,
        }
    },
    components:{Drawer},
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      async addToCart(product) {
      },
      showProductDetails() {
        this.$refs.productDetails.showDetails = true;
    },
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
  }
  
  .card-content {
    display: flex;
    flex-direction: row; /* Display content in a row */
  }
  .descriptions{
    display: flex;
    flex-direction: row;
    min-width: 70%;
    align-items: center;
  }
  .image-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    width: 40%; 
  }
  
  .image-box {
    width: 25%; 
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  
  .card-img-top {
    max-width: 100%;
    max-height: 100%; 
    object-fit: contain;
  }
  
  .details-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .footer-card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 10rem;
  }
  </style>
  