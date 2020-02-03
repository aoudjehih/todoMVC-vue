import {defaultRules} from '../rules/rules'
import {specificRules} from "../rules/extend"
import { asyncForEach } from "../utils/functions"
import FormError from "./form-error"
import FormField from './form-field'

class FormValidator {

	constructor() {
		this.errors 		= new FormError()
		this.fields 		= new FormField()
	}

	/**
	 * @param form
	 *
	 * @returns {Promise.<*>}
	 */
	async validateSpecificRules(form) {
		if(specificRules?.[form]?.form) {
			return await asyncForEach(specificRules[form].form, async (rule) => {
				return await rule.validate()
			})
		}
	}

	/**
	 * @param form
	 * @param field
	 * @param value
	 * @param expression
	 * @param immediate
	 */
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
			if (!defaultRules.hasOwnProperty(ruleName) && !specificRules?.[form]?.field?.hasOwnProperty(ruleName)) {
				throw `--${ruleName}-- ruleName doesn't exist`
			}

			//check if ruleName has not been overwritten by extend function
			const ruleSource = specificRules?.[form]?.field?.hasOwnProperty(ruleName) ? specificRules[form].field : defaultRules
			const constraint = ruleSource[ruleName].find(rule => !rule.validate(value))

			if (constraint) {
				verifiedRule = true
				const errorField = {[field]: constraint.message}
				this.errors.merge(form, errorField)
			}
		}

		if(!verifiedRule) {
			this.errors.clear(form, field)
		}

		this.fields.set(form, field, {value: value, expression: expression, verified: true})
	}

	/**
	 * @param form
	 *
	 * @returns {boolean}
	 */
	validate(form) {
		if (this.errors.any(form)) {
			return false
		}

		Object.keys(this.fields.all(form)).forEach(e => {
			this.validateField(form, e, this.fields.get(form, e).value, this.fields.get(form, e).expression, true)
		})

		return !this.errors.any(form)
	}

	/**
	 * @param form
	 *
	 * @returns {Promise.<boolean>}
	 */
	async validateAll(form) {
		this.validate(form)
		if (!this.errors.any(form)) {
			await	this.validateSpecificRules(form)
		}

		return Promise.resolve(!this.errors.any(form))
	}

	/**
	 * @param form
	 * @param field
	 * @param value
	 * @param expression
	 * @param immediate
	 */
	bindField(form, field, value, expression, immediate) {
		const fieldObject = { value: value, expression: expression, verified: false }
		this.fields.merge(form, field, fieldObject)
		if (value && immediate) {
			this.validateField(form, field, value, expression, immediate, true)
		}
	}

	/**
	 * @param form
	 *
	 * @returns {boolean}
	 */
	isValid(form) {
		if (!this.fields.get(form)) {
			return false
		}

		let isValid = true
		for (let e of Object.keys(this.fields.get(form))) {
			if (!this.fields.get(form, e).verified) {
				isValid = false
				break
			}
		}

		return !isValid ? false : !this.errors.any(form)
	}
}

export default FormValidator











/*import {defaultRules, specificRules} from '../rules/rules'

class FormValidator {

	constructor() {
		this.errors 		= {}
		//validator.errors.any('firtstep')
		this.fields 		= {}
		Object.setPrototypeOf(this.errors, this.getHandler());
	}

	async validateSpecificRules(form) {
		if(specificRules[form].form) {
			return await this.asyncForEach(specificRules[form].form, async (rule) => {
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
      if (!defaultRules.hasOwnProperty(ruleName) && !specificRules?.[form]?.field?.hasOwnProperty(ruleName)) {
        throw `--${ruleName}-- ruleName doesn't exist`
      }

      //check if ruleName has not been overwritten by extend function
			const ruleSource = specificRules?.[form]?.field?.hasOwnProperty(ruleName) ? specificRules[form].field : defaultRules
      const constraint = ruleSource[ruleName].find(rule => !rule.validate(value))

      if (constraint) {
				verifiedRule = true
				// this.errors = Object.assign({[form]: {[field]: constraint.message}}, this.errors)
				// this.errors[form][field] = constraint.message
				const errorField = {[field]: constraint.message}
				this.errors[form] = { ...this.errors[form], ...errorField}
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

	//	this.fields[form][field] = { value: value, expression: expression, verified: false }
	//	this.fields = Object.assign({ [form]: { value: value, expression: expression, verified: false } }, this.fields)

		const fieldObject = { value: value, expression: expression, verified: false }
		this.fields[form][field] = { ...this.fields[form][field], ...fieldObject}

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
				// this.errors = Object.assign({[form]: {[key]: value}}, this.errors)
				// this.errors[form][key] = value
				const errorObject = {[key]: value}
				this.errors[form][key] = { ...this.errors[form][key], ...errorObject}
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

export default FormValidator*/