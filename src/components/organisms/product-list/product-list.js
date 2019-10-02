import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import AddToCartBtn from '../../atoms/button/add-to-cart-btn'
import FilterTop from '../../molecules/filter-top'
import ProductListContent from '../../molecules/product-list-content'
import CheckboxFilter from '../../molecules/checkbox-filter'
import SelectFilter from '../../atoms/select/select-filter'

export default {
  name: 'Product-list',
  components: {
      VueSlider,
      AddToCartBtn,
      FilterTop,
      ProductListContent,
      CheckboxFilter,
      SelectFilter
  },
  props: [],
  data () {
    return {
      priceRange: [0, 100],
        productCollection: [
            {
              "img": "https://www.mhsc-store.com/4268-large_default/t-shirt-mhsc-logo-junior.jpg",
              "name":"Black Skull T-shirt",
              "price":"135.00",
              "categories":[
                "Clothing",
                "Men",
                "T-shirts"
              ],
                'quantity': 1
            },
            {
              "img": "http://laslapourlesnuls.com/media/2018/11/la-sla-pour-les-nuls-logo-t-shirt-1-1.jpg",
              "name":"Black Ninja T-shirt Hoodie",
              "price":"250.00",
              "categories":[
                  "Clothing",
                  "Women",
                  "T-shirts"
              ],
                'quantity': 1
            },
            {
              "img": "https://i2.cdscdn.com/pdt2/2/0/3/1/400x400/mp22228203/rw/call-of-duty-t-shirt-homme-de-marque-decontracte.jpg",
              "name":"Grey Ninja",
              "price":"350.00",
              "categories":[
                  "Clothing",
                  "Men",
                  "Poster"
              ],
                'quantity': 1
            }
        ]
    }
  },
  computed: {
    optionss: function () {
        return [
            {"id":"1", "value": "toto"},
            {"id":"2", "value": "toto2"},
            {"id":"4", "value": "toto4"}
        ]
    }
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
