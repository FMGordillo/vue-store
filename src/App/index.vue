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

<script src="./script.js">
<style src="./style.css"></style>