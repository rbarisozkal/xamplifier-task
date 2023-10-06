

<script>
import { RouterLink, RouterView } from 'vue-router';
import Nav from './components/home-components/nav.vue';
export default {
  components: { Nav, RouterLink, RouterView },
}
</script>
<template>
  <Nav />
  <RouterView />
</template>

<style scoped></style>
