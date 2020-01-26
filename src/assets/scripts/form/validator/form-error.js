import { getHandler } from '../utils/functions'

class FormError {
	constructor() {
		this.errors 		= {}
	}

	get(form, field) {
		return this.errors?.[form]?.[field]
	}
	set(form, fieldErrors) {
		fieldErrors.forEach(field => {
			for (let [key, value] of Object.entries(field)) {
				const errorObject = {[key]: value}
				this.errors[form][key] = { ...this.errors[form][key], ...errorObject}
			}
		})
	}

	clear(form, field) {
		delete this.get(form, field)
		this.errors = Object.assign({}, this.errors)
	}

	merge(form, errorField) {
		this.errors[form] = { ...this.errors[form], ...errorField}

	}
}

export default FormError