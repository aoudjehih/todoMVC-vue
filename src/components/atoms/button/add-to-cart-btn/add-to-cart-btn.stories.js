import addToCartBtn from '../add-to-cart-btn';
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

const stories = storiesOf(`toto|AccountDetailsPage`, module)

stories.addDecorator(withKnobs)
stories.add('totos', () => ({
	components: { addToCartBtn },
	data() {
		return {
			totocscsdcsdcsdc: "update",
		}
	},
	template: '<add-to-cart-btn :label="totocscsdcsdcsdc"></add-to-cart-btn>'
}), { options: { wrappersStyles: 'rr' } })

stories.add('totoss', () => ({
	components: { addToCartBtn },
	props: {
		label: {
			default: text('label', 'click here')
		},
		text: {
			default: text('Text', 'Hello Storybook')
		}
	},
	data() {
		return {
			totocscsdcsdcsdc: "updates",
		}
	},
	template: '<add-to-cart-btn :label="label">{{text}}</add-to-cart-btn>'
}))