/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents}) => {
	addComponents({
		'.btn-group': {
			'display': 'flex',
			'align-items': 'stretch',
			'.btn + .btn': {
				'border-top-left-radius': '0',
				'border-bottom-left-radius': '0',
				'border-left': '0'
			},
			'.btn:has(+ .btn)': {
				'border-top-right-radius': '0',
				'border-bottom-right-radius': '0'
			}
		}
	});
});