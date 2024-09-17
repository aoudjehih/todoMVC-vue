// eslint-disable-next-line
import css from '@/components/organisms/subscription/first-step-form/first-step-form.scss'
import FormField from '@/components/molecules/form/form-field'
import FormButton from '@/components/atoms/form/button-form'
import { extend } from '@/assets/scripts/form/rules/extend'
//todo add pending
//todo replace object assign by spread operator
//todo garder le mixin?
// TODO:make clean objects
// todo documentation
// todo unit test
export default {
  name: 'first-step',
  components: {
    FormField,
    FormButton
  },
  data() {
    return {
      firstStep: {
        firstname: '1',
        email: '1',
        totalNumberDataBase: '1'
      }
    }
  },
	beforeMount() {
		extend('firstStep', [
			{
				validate: value => !!value,
				message: 'email field is required',
			},
			{
				validate: value => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value),
				message: 'Your email is not valid',
			},
			{
				validate: value => value.length <= 15,
				message: 'Your email is to long',
			},
		], "requireds")

		extend('firstStep', [
			{
				validate: value => !!value,
				message: 'email field is required',
			},
			{
				validate: value => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value),
				message: 'Your email is not valid',
			},
			{
				validate: value => value.length <= 15,
				message: 'Your email is to long',
			},
		], "requiredbhs")
	},
	mounted() {
		extend('firstSteps', [{
			validate: async () => {
				console.log('first')
				let resp = await new Promise(function(resolve) {
					setTimeout(() => {
						console.log('first done')
						resolve(false);
					}, 3000)
				})

				if(!resp) {
				//	this.validator.errors.set('firstStep', [{firstname: "toto"}, {email: "totz"}])
				}

				return Promise.resolve(false)
			}
		},{
			validate: async () => {
				console.log('Second')
				return  new Promise(function(resolve) {
					setTimeout(function() {
						console.log('sec done')
						resolve(true);
					}, 3000);
				});
			}
		}])
	},
  methods:{
		async submit() {
		const isValid =	await this.validator.validateAll('firstStep')
		if (isValid) {
			this.$parent.next({firstStep: this.$data.firstStep})
		}
		},
  }
}
