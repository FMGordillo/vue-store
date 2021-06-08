<template>
  <div id="app">
    <Header :itemsQuantity="cart.selected.length" />
    <Product
      v-for="product in store.products"
      :key="product.id"
      :product="product"
      :addToCart="addToCart"
    />
  </div>
</template>

<script>
import Product from "./components/Product.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Product
  },
  data: () => ({
    store: {
      products: [
        {
          id: 1,
          title: "Socks",
          description: "Nice socks, to be defined here",
          quantity: 14
        },
        {
          id: 2,
          title: "Shoes",
          description: "Nice shoes, bonitos",
          quantity: 69
        }
      ]
    },
    cart: {
      selected: []
    }
  }),
  methods: {
    addToCart(product) {
      this.cart.selected = [...this.cart.selected, product];
    }
  }
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}
</style>
