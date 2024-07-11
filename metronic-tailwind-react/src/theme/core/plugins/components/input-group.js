/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents}) => {
	// Form input
	addComponents({
		'.input-group': {
			'display': 'flex',
			'align-items': 'stretch',
			'.btn': {
				'flex-shrink': '0'
			},
			'.input': {
				'flex-grow': '1', 
			},
			'.input ~ .btn, .input ~ .dropdown > .btn': {
				'border-top-left-radius': '0',
				'border-bottom-left-radius': '0'
			},
			'.input + .btn, .input + .dropdown > .btn': {
				'border-left': '0'
			},
			'.btn ~ .input, .btn ~ .btn, .input ~ .input': {
				'border-top-left-radius': '0',
				'border-bottom-left-radius': '0'
			},
			'.input:has(~ .btn), .input:has(~ .input), .input:has(~ .dropdown > .btn)': {
				'border-top-right-radius': '0',
				'border-bottom-right-radius': '0'
			},
			'.btn:has(~ .input, ~ .btn), .input:has(~ .input)': {
				'border-top-right-radius': '0',
				'border-bottom-right-radius': '0',
				'border-right': '0'
			}
		}
	});
});