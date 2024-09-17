export default class FormField {
	constructor() {
		this.fields = {}
	}

	get(form, field) {
		return !field ? this.fields?.[form] : this.fields?.[form]?.[field]
	}

	set(form, field, obj) {
		this.fields[form][field] = obj
	}

	merge(form, field, fieldObject) {
		if(!this.fields[form]) {
			this.fields[form] = []
		}
		this.fields[form][field] = { ...this.fields[form][field], ...fieldObject}
	}

	all(form) {
		return this.fields?.[form]
	}
}