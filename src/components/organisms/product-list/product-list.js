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
        pageSize: 5,
        pageNumber: 1
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
        return this.paginate(this.getFilteredProducts)
      }
  },
  methods: {
    getMinPrice: function() {
      return this.priceRange[0]
    },
    getMaxPrice: function() {
        return this.priceRange[1]
    },
    paginate: function(array) {
        let number = this.pageNumber;
        number --
        return array.slice(number * this.pageSize, (number + 1) * this.pageSize);
    },
    setPageNumber(val) {
        this.pageNumber = val
    }
  }
}
