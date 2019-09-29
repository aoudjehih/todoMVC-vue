import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import product from '../../molecules/product/index.vue'
import addToCartBtn from '../../atoms/button/add-to-cart-btn/index.vue'

export default {
  name: 'product-list',
  components: {
      VueSlider,
      product,
      addToCartBtn
  },
  props: [],
  data () {
    return {
      priceRange: [0, 100],
        products: [
            {
              "img": "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              "name":"Black Skull T-shirt",
              "price":"135.00",
              "category":[
                "Clothing",
                "Men",
                "T-shirts"
              ]
            },
            {
              "img": "http://laslapourlesnuls.com/media/2018/11/la-sla-pour-les-nuls-logo-t-shirt-1-1.jpg",
              "name":"Black Ninja T-shirt Hoodie",
              "price":"250.00",
              "category":[
                  "Clothing",
                  "Women",
                  "T-shirts"
              ]
            },
            {
              "img": "https://i2.cdscdn.com/pdt2/2/0/3/1/400x400/mp22228203/rw/call-of-duty-t-shirt-homme-de-marque-decontracte.jpg",
              "name":"Grey Ninja",
              "price":"350.00",
              "category":[
                  "Clothing",
                  "Men",
                  "Poster"
              ]
            },
            {},
            {},
            {},
            {}
        ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getMinPrice: function() {
      return this.priceRange[0]
    },
    getMaxPrice: function() {
        return this.priceRange[1]
    }
  }
}
