import FormInput from '@/components/atoms/form/form-input'

export default {
  name: 'form-field',
  components: {
    FormInput
  },
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    maxlength: {
      type: Number,
    },
    autocomplete: {
      type: String,
      default: "random-string"
    },
    label: {
      type: String,
      required: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
		fieldError: {
      type: String,
    },
    value: {
      type: String,
      default: null,
    },
  },
}
