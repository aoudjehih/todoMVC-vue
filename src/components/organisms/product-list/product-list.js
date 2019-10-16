import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import AddToCartBtn from '../../atoms/button/add-to-cart-btn'
import FilterTop from '../../molecules/filter-top'
import ProductListContent from '../../molecules/product-list-content'
import CheckboxFilter from '../../molecules/checkbox-filter'
import SelectFilter from '../../atoms/select/select-filter'
import { mapGetters } from 'vuex'

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
    }
  },
  computed: {
      ...mapGetters('ecommerce', [
          'getFilteredProducts',
          'getSizes',
          'getColors',
          'getSearchFilter'
      ]),
      getPaginatedProducts() {
          function paginate (array, page_size, page_number) {
              --page_number; // because pages logically start with 1, but technically with 0
              return array.slice(page_number * page_size, (page_number + 1) * page_size);
          }

          console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2));
          console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 2));
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
