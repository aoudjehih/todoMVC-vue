// eslint-disable-next-line
import css from '@/components/organisms/subscription/first-step-form/first-step-form.scss'
import FormField from '@/components/molecules/form/form-field'
import FormButton from '@/components/atoms/form/button-form'
import {extend} from '@/assets/scripts/form/rules/rules'
/*
créer une nouvelle rule à la volée
* Validator.extend('unique_email', form, {
				validate: isCodiceVasoUnico,
				message: (field, params, data) => data.message
			}
	)

override une rule (validate + message, validate, message)
	Validator.extend('required', form, {
				validate: isCodiceVasoUnico,
				message: (field, params, data) => data.message
			}
	)

créer une rule de form
	Validator.extend(form, {
				validate: setErrors,
			}
	)
*
*
* */

export default {
  name: 'first-step',
  components: {
    FormField,
    FormButton
  },
  data() {
    return {
      firstStep: {
        firstname: '',
        email: '',
        totalNumberDataBase: ''
      }
    }
  },
  methods:{
		async submit(){
			this.addRemoteRule()
			await this.validator.validateAll('firstStep')
			console.log('finish')
		},
		addRemoteRule() {
			extend('firstStep', [{
				execute: async () => {
					console.log('first')
					let resp = await new Promise(function(resolve) {
						setTimeout(() => {
							console.log('first done')
							resolve(false);
						}, 3000)
					})

					if(!resp) {
						this.validator.setErrors('firstStep', [{firstname: "toto"}, {email: "totz"}])
					}

					return Promise.resolve(false)
				}
			},{
				execute: async () => {
					console.log('Second')
					return  new Promise(function(resolve) {
						setTimeout(function() {
							console.log('sec done')
							resolve(true);
						}, 3000);
					});
				}
			}])
		}
  }
}
