export default {
  name: 'form-field',
  components: {},
  props: {
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Boolean,
      required: true
    },
    errorMessage: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
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
      type: Boolean,
    },
    readonly: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    updateValue(){

    }
  }
}
