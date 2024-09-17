import addToCartBtn from '../../atoms/button/add-to-cart-btn/index.vue';

export default {
  name: 'product',
  components: {
    addToCartBtn
  },
  props: {
      product: Object,
    },
    data (){
      return {
          selected: false
      }
    },
  filters: {
    toCurrency : (value) => {
        if (typeof value !== "number") {
            return value;
        }

        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
        }).format(value);
    }
  }
}
