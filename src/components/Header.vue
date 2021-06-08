<template>
  <header>
    <button>Cart ({{ itemsQuantity }})</button>
  </header>
</template>

<script>
export default {
  props: ["itemsQuantity"]
};
</script>

<style scoped></style>
