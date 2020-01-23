// eslint-disable-next-line
import css from '@/components/organisms/subscription/first-step-form/first-step-form.scss'
import FormField from '@/components/molecules/form/form-field'
import FormButton from '@/components/atoms/form/button-form'

export default {
  name: 'fifth-step',
  components: {
		FormField,
		FormButton
	},
  props: [],
  data () {
    return {
			fifthStep: {
				retentionDonors1: '',
				retentionDonors2: '',
				retentionRate: '',
				fundraisingIndex: '',
			}
		}
  },
  methods: {
		async submit(){
			try {
				if (await this.validator.validateAll('fifthStep')) {
					this.$parent.congradulation();
				}
			} catch (e) {
				console.log(e); // 30
			}
		}
  }
}
