<template>
    <div class="checkout-page">
        <h1>Checkout</h1>
        <div v-if="cartItems.length === 0">
            <p>Your shopping cart is empty.</p>
        </div>
        <div v-else>
            <div v-for="(cartItem, index) in cartItems" :key="index" class="cart-item">
                <div class="cart-item-details">
                    <h2>{{ cartItem.title }}</h2>
                    <p>Price: ${{ cartItem.price }}</p>
                    <div class="quantity-control">
                        <button @click="decrementQuantity(index)">-</button>
                        <input type="number" v-model="cartItem.quantity" min="1" />
                        <button @click="incrementQuantity(index)">+</button>
                    </div>
                    <p>Total: ${{ cartItem.price * cartItem.quantity }}</p>
                </div>
                <button @click="removeFromCart(index)" class="remove-button">Remove</button>
            </div>
            <div class="total-price">
                <p>Total Price: ${{ getTotalPrice() }}</p>
            </div>
            <button @click="checkout" class="checkout-button">Checkout</button>
        </div>
    </div>
</template>
  
<script>
import { computed } from "vue";
import { useCartStore } from "../../stores/cartStore";

export default {
    name: "CheckoutView",
    setup() {
        const cartStore = useCartStore();

        const cartItems = computed(() => cartStore.cartItems);

        const incrementQuantity = (index) => {
            cartStore.cartItems[index].quantity++;
            cartStore.saveCart();
        };

        const decrementQuantity = (index) => {
            if (cartStore.cartItems[index].quantity > 1) {
                cartStore.cartItems[index].quantity--;
                cartStore.saveCart();
            }
        };

        const removeFromCart = (index) => {
            cartStore.cartItems.splice(index, 1);
            cartStore.saveCart();
        };

        const getTotalPrice = () => {
            return cartStore.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        };

        const checkout = () => {
            // Implement your checkout logic here
        };

        return {
            cartItems,
            incrementQuantity,
            decrementQuantity,
            removeFromCart,
            getTotalPrice,
            checkout,
        };
    },
};
</script>
  
<style scoped>
/* Your styles here */
</style>
  