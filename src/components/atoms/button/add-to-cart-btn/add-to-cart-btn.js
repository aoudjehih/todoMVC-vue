import iconLabelBtn from '../icon-label-btn'

export default {
  name: 'add-to-cart-btn',
	components: {iconLabelBtn},
    props: {
      label: {
        type: String,
        required: true
      }
    }
}
