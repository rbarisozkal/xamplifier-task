<!-- NavigationMenu.vue -->
<template>
    <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/checkout" class="nav-link">Checkout</router-link>
    </nav>
</template>
  
<script>
export default {
    name: "NavigationMenu",
};
</script>
  
<style scoped>
.nav {
    padding: 4rem 0 0 4rem;
}

.nav-link {
    text-decoration: none;
    color: #333;
}
</style>
  