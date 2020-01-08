export default {
  name: 'button-form',
  components: {},
  props: {
    isDisabled: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false
    }
  },
}
