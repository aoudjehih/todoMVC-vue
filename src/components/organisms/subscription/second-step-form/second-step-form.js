// eslint-disable-next-line
import css from '@/components/organisms/subscription/first-step-form/first-step-form.scss'
import FormField from '@/components/molecules/form/form-field'
import FormButton from '@/components/atoms/form/button-form'

export default {
  name: 'second-step',
	components: {
		FormField,
		FormButton
	},
  data () {
		return {
			secondStep: {
				totalDonors1: '',
				totalDonors2: '',
				totalDonorsPercent: ''
			}
		}
  },
  methods: {
		async submit(){
			try {
				if (await this.validator.validateAll('secondStep')) {
					this.$parent.next({secondStep: this.$data.secondStep})
				}
			} catch (e) {
				console.log(e); // 30
			}
		}
  }
}
