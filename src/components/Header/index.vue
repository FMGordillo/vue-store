<template>
  <header class="header">
    <h1>Vue Store</h1>
    <Button handleClick="() => console.log('haber')"
      >Cart ({{ itemsQuantity }})</Button
    >
  </header>
</template>

<script>
import Button from "../Button";
export default {
  components: {
    Button
  },
  props: ["itemsQuantity"]
};
</script>
<style scoped src="./style.css"></style>
