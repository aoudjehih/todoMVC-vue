// eslint-disable-next-line
import css from '@/components/organisms/subscription/first-step-form/first-step-form.scss'
import FormField from '@/components/molecules/form/form-field'
import FormButton from '@/components/atoms/form/button-form'

export default {
  name: 'third-step',
  components: {
		FormField,
		FormButton
	},
  props: [],
  data () {
    return {
			thirdStep: {
				sizeYear1: '',
				sizeYear2: '',
				sizePercent: ''
			}
    }
  },
  methods: {
		async submit(){
			try {
				if (await this.validator.validateAll('thirdStep')) {
					this.$parent.increment();
				}
			} catch (e) {
				console.log(e); // 30
			}
		}
  }
}
