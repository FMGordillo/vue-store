<template>
  <div class="product">
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>
