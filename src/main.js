import Vue, { createApp } from "@vue/compat";
import { watch } from "vue"; // Import watch from Vue 3's Composition API
import BootstrapVue from "bootstrap-vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useCartStore } from "./stores/cartStore";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);
Vue.use(BootstrapVue);
app.use(createPinia());
const cartStore = useCartStore();
cartStore.initializeCart();

// Watch for changes in cartItems using Vue 3's watch function
watch(
  () => cartStore.cartItems,
  (newCartItems, oldCartItems) => {
    // Do something when cartItems change
    cartStore.saveCart();
  }
);

app.use(router);
app.mount("#app");
