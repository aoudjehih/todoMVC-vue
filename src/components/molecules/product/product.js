import addToCartBtn from '../../atoms/button/add-to-cart-btn/index.vue';

export default {
  name: 'product',
  components: {
    addToCartBtn
  },
  props: {
      img: String,
      name: String,
      price: String,
      categories: Array,
      quantity: Number
  }
}
