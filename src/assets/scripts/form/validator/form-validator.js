import {defaultRules, specificRules} from '../rules/rules'

class FormValidator {

	constructor() {
		this.errors 		= {}
		//validator.errors.any('firtstep')
		this.fields 		= {}
		Object.setPrototypeOf(this.errors, this.getHandler());
	}

	async validateSpecificRules(form) {
		if(specificRules.global[form]) {
			return await this.asyncForEach(specificRules.global[form], async (rule) => {
					return await rule.execute();
				})
		}
	}

  validateField(form, field, value, expression, immediate) {
    //is immediate validation
    if (!immediate) return

    //get rules
    let rules = expression.replace(/`/g,'')
    if (!rules) {
      throw "rule is required for field validation"
    }

    let rulesNames = rules.split('|')

    let verifiedRule = false
    for (let ruleName of rulesNames) {
      if (!defaultRules.hasOwnProperty(ruleName)) {
        throw `--${ruleName}-- ruleName doesn't exist`
      }

      const constraint = defaultRules[ruleName].find(rule => !rule.validate(value))

      if (constraint) {
				verifiedRule = true
				this.errors = Object.assign({[form]: {[field]: constraint.message}}, this.errors)
				this.errors[form][field] = constraint.message
      }
    }

    if(!verifiedRule) {
			delete this.errors[form][field]
			this.errors = Object.assign({}, this.errors)
		}

		this.fields[form][field] = {value: value, expression: expression, verified: true}
		Object.setPrototypeOf(this.errors, this.getHandler())
  }

  validate(form) {
		if (Object.keys(this.errors[form]).length !== 0) {
			resolve(false)
		}

		Object.keys(this.fields[form]).forEach(e => {
			this.validateField(form, e, this.fields[form][e].value, this.fields[form][e].expression, true)
		});

		return Object.keys(this.errors[form]).length === 0
	}

  async validateAll(form) {
		this.validate(form)
		if (Object.keys(this.errors[form]).length === 0) {
			await	this.validateSpecificRules(form)
		}

		return Promise.resolve(Object.keys(this.errors[form]).length === 0)
  }

	bindField(form, field, value, expression, immediate) {
		if(!this.fields[form]) {
			this.fields[form] = []
		}

		this.fields[form][field] = { value: value, expression: expression, verified: false }
		this.fields = Object.assign({ [form]: { value: value, expression: expression, verified: false } }, this.fields)

		if (value && immediate) {
			this.validateField(form, field, value, expression, immediate, true)
		}
  }

  isValid(form) {
		if (!this.fields[form]) {
			return false
		}

		let isValid
		for (let e of Object.keys(this.fields[form])) {
			if (!this.fields[form][e].verified) {
				isValid = false
				break
			}
		}

		if(isValid === false) {
			return false
		}

		return Object.keys(this.errors[form]).length === 0
	}

	setErrors(form, fieldErrors) {

		fieldErrors.forEach(field => {
			for (let [key, value] of Object.entries(field)) {
				this.errors = Object.assign({[form]: {[key]: value}}, this.errors)
				this.errors[form][key] = value
			}
		})
	}

  getHandler() {
		return new Proxy( {}, {
      get() {
			  return {}
		  }
	  });
	}

	async asyncForEach(array, callback) {
		for (let index = 0; index < array.length; index++) {
			if (!await callback(array[index], index, array)) {
				break
			}
		}
	}
}

export default FormValidator