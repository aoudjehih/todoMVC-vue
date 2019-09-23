import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'product-list',
  components: {
      VueSlider
  },
  props: [],
  data () {
    return {
      priceRange: [0, 100]
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
