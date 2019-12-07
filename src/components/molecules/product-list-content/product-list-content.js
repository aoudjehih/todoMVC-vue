import Product from '../../molecules/product'
import PaginationItem from '../../organisms/pagination-item'
import { mapActions } from 'vuex'

export default {
  name: 'product-list-content',
  components: {
      Product,
      PaginationItem
  },
    props: {
        ProductCollection: Array,
        ProductCollectionPagination: Array,
        PageNumber: Number,
        PageSize: Number
    },
    methods: {
        ...mapActions({
            addToBasket: `ecommerce/addToBasketAsync`,
        }),
        addToCart : function(value){
            this.addToBasket(value)
        },
    }
}
