export default {
  name: 'search-input',
  components: {},
  props: [],
  data () {
    return {
      searchText: null
    }
  },
  watch: {
      searchText: function () {
          if (this.searchText.trim().length > 2) {
            this.$emit('onSearchInput', this.searchText)
          }
          if (this.searchText.trim().length <= 2) {
              this.$emit('onSearchInput', null)
          }
      },
  },
}
