/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
	// Form input
	addComponents({
		'.textarea': {
			'display': 'block',
			'width': '100%',
			'appearance': 'none',
			'box-shadow': 'none',
			'outline': 'none',
			'font-weight': theme('custom.components.btn.DEFAULT.fontWeight'),
      'font-size': theme('custom.components.btn.DEFAULT.fontSize'),
			'line-height': theme('leading.5'),
			'background-color': 'var(--tw-light-active)',
			'border-radius': theme('custom.components.common.borderRadius.btn'), 
      'padding': `${theme('custom.components.btn.DEFAULT.py')} ${theme('custom.components.input.DEFAULT.px')}`,
			'border': '1px solid var(--tw-gray-300)',
			'color': 'var(--tw-gray-700)',
			'&::placeholder': {
				'color': 'var(--tw-gray-500)'
			},
			'&:hover': {
				'border-color': 'var(--tw-gray-400)'
			},
			'&:focus': {
				'border-color': 'var(--tw-primary)',
				'box-shadow': 'var(--tw-form-input-focus-box-shadow)',
				'color': 'var(--tw-gray-700)',
				'&::placeholder': {
					'color': 'var(--tw-gray-600)'
				},
			},
			'&:active': {
				'color': 'var(--tw-gray-700)',
				'&::placeholder': {
					'color': 'var(--tw-gray-600)',
				},
				'box-shadow': 'none'
			},
			'&[disabled]': {
				'background-color': 'var(--tw-gray-100)',
				'color': 'var(--tw-gray-400)',
				'&::placeholder': {
					'color': 'var(--tw-gray-300)',
				}
			},
			'&[readonly]': {
				'background-color': 'var(--tw-gray-100)',
				'color': 'var(--tw-gray-400)',
				'&::placeholder': {
					'color': 'var(--tw-gray-300)',
				}
			}
		},
		'.textarea-sm': {
			'font-weight': theme('custom.components.btn.sm.fontWeight'),
      'font-size': theme('custom.components.btn.sm.fontSize'),
			'padding': `${theme('custom.components.btn.sm.py')} ${theme('custom.components.input.sm.px')}`
		},
		'.textarea-lg': {
			'font-weight': theme('custom.components.btn.lg.fontWeight'),
      'font-size': theme('custom.components.btn.lg.fontSize'),
			'padding': `${theme('custom.components.btn.lg.py')} ${theme('custom.components.input.lg.px')}`
		}
	});
});