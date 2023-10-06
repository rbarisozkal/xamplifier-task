import Vue, { createApp } from "@vue/compat";
import { watch } from "vue"; // Import watch from Vue 3's Composition API
import BootstrapVue from "bootstrap-vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useCartStore } from "./stores/cartStore";
import { useProductStore } from "./stores/productStore";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);
Vue.use(BootstrapVue);
app.use(createPinia());
useProductStore().fetchProducts();
const cartStore = useCartStore();
cartStore.initializeCart();

app.use(router);
app.mount("#app");
