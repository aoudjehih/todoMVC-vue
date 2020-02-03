export default class FormError {
	constructor() {
		this.errors 		= {}
	}

	get(form, field) {
		return !field ? this.errors?.[form] : this.errors?.[form]?.[field]
	}

	set(form, fieldErrors) {
		fieldErrors.forEach(field => {
			for (let [key, value] of Object.entries(field)) {
				 this.errors = Object.assign({[form]: {[key]: value}}, this.errors)
				 this.errors[form][key] = value
			}
		})
	}

	clear(form, field) {
		if(this.errors[form]?.[field])	delete this.errors[form][field]
		this.errors = Object.assign({}, this.errors)
	}

	merge(form, errorField) {
		this.errors[form] = { ...this.errors[form], ...errorField}
	}

	any(form) {
		if (!this.errors?.[form]) return false
		return Object.keys(this.errors?.[form]).length !== 0
	}
}
