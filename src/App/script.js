import Product from "../components/Product";
import Header from "../components/Header";

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
          quantity: 10
        },
        {
          id: 2,
          title: "Shoes",
          description: "Nice shoes, bonitos",
          quantity: 2
        }
      ]
    },
    cart: {
      selected: {}
    }
  }),
  computed: {
    itemsQuantity() {
      return Object.values(this.cart.selected).reduce(
        (sum, quantity) => sum + quantity,
        0
      );
    }
  },
  methods: {
    addToCart(product, quantity) {
      this.cart.selected = {
        ...this.cart.selected,
        [product.id]: quantity
      };
      console.log(this.cart);
    }
  }
};
