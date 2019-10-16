import Product from '../../molecules/product'
import PaginationItem from '../../organisms/pagination-item'

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
    computed: {

    },
    methods: {
        addToCart : (value) => {
            console.log(value)
        },
    }
}
