<template>
  <header>
    <h1>Vue Store</h1>
    <button>Cart ({{ itemsQuantity }})</button>
  </header>
</template>

<script>
export default {
  props: ["itemsQuantity"]
};
</script>
<style scoped src="./style.css"></style>
