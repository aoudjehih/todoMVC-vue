const firstnameMaxLength = 10

export let defaultRules = {
  firstname: [
    {
      validate: value => value.length <= firstnameMaxLength,
      message: `First name should not have more than ${firstnameMaxLength} characters`,
    },
  ],
  email: [
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
  ],
  totalNumberDataBase: [
    {
      validate: value => !!value,
      message: 'This field is required',
    },
    {
      validate: value => /^\d+$/.test(value),
      message: 'You should enter a valid number',
    },
    {
      validate: value => /^[1-9][0-9]*$/.test(value),
      message: 'You should enter a positif number',
    },
  ],
	required: [
		{
			validate: value => !!value,
			message: 'This field is required',
		},
	]
}
