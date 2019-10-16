import Product from '../../molecules/product'

export default {
  name: 'product-list-content',
  components: {
      Product
  },
    props: {
        ProductCollection: Array
    },
    methods: {
        addToCart : (value) => {
            console.log(value)
        }
    }
}
