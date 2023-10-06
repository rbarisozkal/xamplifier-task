<template>
    <div class="checkout-page">
        <h1>Checkout</h1>
        <div v-if="cartItems.length === 0">
            <p>Your shopping cart is empty.</p>
        </div>
        <div v-else>
            <div v-for="(cartItem, index) in cartItems" :key="index" class="cart-item">
                <div class="cart-item-details">
                    <img class="product-image" :src="cartItem.image" :alt="cartItem.title" />
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
            console.log("Checkout $", getTotalPrice());
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
.checkout-page {
    padding: 4rem;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
}

.cart-item-details {
    flex-grow: 1;
}

.quantity-control {
    display: flex;
    align-items: center;
}

.quantity-control button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 1rem;
    margin: 0 5px;
}

.quantity-control input {
    width: 40px;
    text-align: center;
}

.remove-button {
    background-color: #ff5722;
    max-height: 3rem;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.remove-button:hover {
    background-color: #e64a19;
}

.total-price {
    margin-top: 2rem;
    text-align: right;
    font-size: 1.25rem;
    font-weight: bold;
}

.checkout-button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 1.25rem;
    transition: background-color 0.3s;
}

.checkout-button:hover {
    background-color: #388e3c;
}

.product-image {
    max-width: 7rem;
}
</style>
  