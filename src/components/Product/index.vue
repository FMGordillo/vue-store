<template>
  <div class="product">
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>

    <input
      :disabled="selected === 0"
      type="button"
      name="decrease"
      value="-"
      @click="substractQuantity"
    />
    <span>{{ selected }}</span>
    <input
      :disabled="selected >= this.product.quantity"
      type="button"
      name="increase"
      value="+"
      @click="addQuantity"
    />

    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data: () => ({
    selected: 1
  }),
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
