// eslint-disable-next-line
import css from '@/components/organisms/subscription/first-step-form/first-step-form.scss'
import FormField from '@/components/molecules/form/form-field'
import FormButton from '@/components/atoms/form/button-form'

export default {
  name: 'fourth-step',
  components: {
		FormField,
		FormButton
	},
  props: [],
  data () {
		return {
			fourthStep: {
				totalGiving1: '',
				totalGiving2: '',
				totalGivingPercent: ''
			},
		}
  },
  methods: {
		async submit(){
			try {
				if (await this.validator.validateAll('fourthStep')) {
					this.$parent.next({forthStep: this.$data.forthStep})
				}
			} catch (e) {
				console.log(e); // 30
			}
		}
  }
}
