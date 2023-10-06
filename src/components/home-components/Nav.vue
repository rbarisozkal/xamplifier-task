<!-- NavigationMenu.vue -->
<template>
    <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/checkout" class="nav-link">Checkout</router-link>
    </nav>
</template>
  
<script>
export default {
    name: "Nav",
};
</script>
  
<style scoped>
.nav {
    padding: 0 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: #333;
}
</style>
  