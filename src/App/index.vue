<template>
  <div id="app">
    <Header :itemsQuantity="itemsQuantity" />
    <Product
      v-for="product in store.products"
      :key="product.id"
      :product="product"
      :addToCart="addToCart"
    />
  </div>
</template>

<style scope src="./style.css"></style>
<script src="./script.js">