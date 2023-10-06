<template>
  <div>
    <b-button class="w-100" variant="primary" @click="showSidebar = !showSidebar">Details</b-button>
    <b-sidebar id="sidebar-1" :title="product.title" shadow v-model="showSidebar">
      <div class="px-3 py-2">
        <b-img :src="product.image" fluid thumbnail class="mb-3"></b-img>
        <p>
          {{ product.description }}
        </p>
        <div class="mt-4">
          <p class="mb-1"><strong>Price:</strong> ${{ product.price }}</p>
          <p class="mb-1"><strong>Category:</strong> {{ product.category }}</p>
          <div class="mb-3">
            <strong>Rating:</strong>
            <b-form-rating :disabled="true" v-model="product.rating.rate" :max="5" show-captions></b-form-rating>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
#sidebar-1 {
  background-color: #f8f9fa;
  color: #343a40;
}

#sidebar-1 .b-sidebar-header {
  background-color: #343a40;
  color: white;
}

#sidebar-1 .b-sidebar-body {
  padding: 0;
}

#sidebar-1 .b-sidebar-title {
  font-size: 1.5rem;
}

#sidebar-1 p {
  margin-bottom: 1rem;
}
</style> 
