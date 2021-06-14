<template>
  <div class="product">
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>

    <input
      :disabled="cantRemove"
      type="button"
      name="decrease"
      value="-"
      @click="substractQuantity"
    />
    <span>{{ selected }}</span>
    <input
      :disabled="cantAdd"
      type="button"
      name="increase"
      value="+"
      @click="addQuantity"
    />

    <button @click="$emit('addToCart', product, selected)">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: ["product", "addToCart"],
  data: () => ({
    selected: 1
  }),
  computed: {
    cantRemove() {
      return this.selected === 0;
    },
    cantAdd() {
      return this.selected >= this.product.quantity;
    },
    calculateProducts() {
      return this.selected;
    }
  },
  methods: {
    substractQuantity() {
      if (this.selected === 0) return;
      this.selected -= 1;
    },
    addQuantity() {
      if (this.selected >= this.product.quantity) return;
      this.selected += 1;
    }
  }
};
</script>
