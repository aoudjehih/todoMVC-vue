//contains the globals form rules and field form rules
export let specificRules = {}
export const extend = (form, schema, field = null) => {
	//specific form rule
	const scm = !field ? {form: schema} : (!specificRules[form]?.field ? {field: {[field]: schema}} : {[field]: schema})
	if (!field || !specificRules[form]?.field) {
		specificRules[form] = { ...specificRules[form], ...scm}
	} else {
		specificRules[form].field = { ...specificRules[form].field, ...scm}
	}
}