import _ from 'lodash'

export default {
  name: 'form-input',
  components: {},
  props: {
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    maxlength: {
      type: Number,
    },
    autocomplete: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
    },
  },
  computed: {
    updateValue() {
      return _.debounce(({ target: { value } }) => {
        this.$emit('input', value)
      }, 400)
    },
  }
}
