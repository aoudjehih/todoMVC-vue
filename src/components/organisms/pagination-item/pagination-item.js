export default {
  name: 'pagination-item',
  components: {},
  props: {
      ProductCollection: Array,
      PageNumber: Number,
      PageSize: Number
  },
  data () {
    return {

    }
  },
  methods: {
      getPaginationPageNumbers () {
          if (this.ProductCollection === 0) {
              return 0
          }

          return Math.ceil(this.ProductCollection.length/this.PageSize)
      }
  }
}
