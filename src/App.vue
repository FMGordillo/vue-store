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
import Product from "./components/Product";
import Header from "./components/Header";

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
          quantity: 10
        },
        {
          id: 2,
          title: "Shoes",
          description: "Nice shoes, bonitos",
          quantity: 2
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
#app {
  margin: 0 128px;
}

@media screen and (max-width: 960px) {
  #app {
    margin: 0 64px;
  }
}
@media screen and (max-width: 640px) {
  #app {
    margin: 0 32px;
  }
}
@media (max-width: 320px) {
  #app {
    margin: 0 16px;
  }
}
</style>
