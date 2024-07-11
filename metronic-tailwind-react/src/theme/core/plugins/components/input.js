/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
	// Form input
	addComponents({
		'.input': {
			'display': 'block',
			'width': '100%',
			'appearance': 'none',
			'box-shadow': 'none',
			'outline': 'none',
			'font-weight': theme('custom.components.btn.DEFAULT.fontWeight'),
      'font-size': theme('custom.components.btn.DEFAULT.fontSize'),
			'line-height': '1',
			'background-color': 'var(--tw-light-active)',
			'border-radius': theme('custom.components.common.borderRadius.btn'), 
      'height': theme('custom.components.btn.DEFAULT.height'),
      'padding-left': theme('custom.components.input.DEFAULT.px'),
      'padding-right': theme('custom.components.input.DEFAULT.px'), 
			'border': '1px solid var(--tw-gray-300)',
			'color': 'var(--tw-gray-700)',
			'&::placeholder, input::placeholder': {
				'color': 'var(--tw-gray-500)',
			},
			'&:hover': {
				'border-color': 'var(--tw-gray-400)',
			},
			'&:focus, &:has(input:focus)': {
				'border-color': 'var(--tw-primary)',
				'box-shadow': 'var(--tw-input-focus-box-shadow)',
				'color': 'var(--tw-gray-700)',
				'&::placeholder, input::placeholder': {
					'color': 'var(--tw-gray-600)'
				},
			},
			'&:active, &:has(input:active)': {
				'color': 'var(--tw-gray-700)',
				'&::placeholder, input::placeholder': {
					'color': 'var(--tw-gray-600)'
				},
				'box-shadow': 'none',
			},
			'&:disabled, &:has(input:disabled)': {
				'background-color': 'var(--tw-gray-100)',
				'color': 'var(--tw-gray-400)',
				'&::placeholder, input::placeholder': {
					'color': 'var(--tw-gray-300)'
				}
			}
		},
		'.input-sm': {
			'font-weight': theme('custom.components.btn.sm.fontWeight'),
      'font-size': theme('custom.components.btn.sm.fontSize'),
			'height': theme('custom.components.btn.sm.height'),
      'padding-left': theme('custom.components.input.sm.px'),
      'padding-right': theme('custom.components.input.sm.px')
		},
		'.input-lg': {
			'font-weight': theme('custom.components.btn.lg.fontWeight'),
      'font-size': theme('custom.components.btn.lg.fontSize'),
			'height': theme('custom.components.btn.lg.height'),
      'padding-left': theme('custom.components.input.lg.px'),
      'padding-right': theme('custom.components.input.lg.px')
		}
	});

	// Form input with icons
	addComponents({
		'.input:not(input)': {
			'display': 'flex',
			'gap': '0.375rem',
			'align-items': 'center',
			'appearance': 'none',
			'box-shadow': 'none',
			'outline': 'none',
			'color': 'var(--tw-gray-600)',
			'input': {
				'flex-grow': '1',
				'background-color': 'transparent',
				'border-color': 'transparent',
				'color': 'inherit',
				'outline': 'none',
				'font-size': 'inherit',
				'font-weight': 'inherit'
			},
			'i': {
        'font-size': theme('custom.components.btn.DEFAULT.iconFontSize')
      },
			'.btn-icon': {
				'border': '0',
				'height': 'auto',
				'width': 'auto',
				'&:hover, &:focus, &:active, &.active' : {
					'i': {
						'color': 'var(--tw-gray-800)',
					}
				}
			}
		},
		'.input:not(input).input-xs': {
			'i': {
        'font-size': theme('custom.components.btn.xs.iconFontSize')
      }
		},
		'.input:not(input).input-sm': {
			'i': {
        'font-size': theme('custom.components.btn.sm.iconFontSize')
      }
		},
		'.input:not(input).input-lg': {
			'i': {
        'font-size': theme('custom.components.btn.lg.iconFontSize')
      }
		}
	});
});