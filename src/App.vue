<template>
  <div id="app">
    <Header />
    <Product
      v-for="product in store.products"
      :key="product.id"
      :product="product"
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
  })
};
</script>
