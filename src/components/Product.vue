<template>
  <div class="product">
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>

    <input type="button" name="decrease" value="-" @click="substractQuantity" />
    <span>{{ quantity }}</span>
    <input @click="addQuantity" type="button" name="increase" value="+" />

    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data: () => ({
    quantity: 1
  }),
  methods: {
    substractQuantity() {
      if (this.quantity === 0) return;
      this.quantity -= 1;
    },
    addQuantity() {
      this.quantity += 1;
    }
  }
};
</script>
