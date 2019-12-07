import { mapGetters } from 'vuex'
import ShoppingCart from '../shopping-cart'

export default {
  name: 'navbar',
  components: {
      ShoppingCart
  },
  props: [],
  data () {
    return {

    }
  },
  computed: {
      ...mapGetters('ecommerce', [
          'getBasketItemsNumber',
          'getBasket'
      ]),
  }
}
