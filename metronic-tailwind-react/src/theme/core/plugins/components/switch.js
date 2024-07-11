/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addVariant, addComponents, theme, e}) => {
  addComponents({
    '.switch': {
			'display': 'flex',
			'align-items': 'center',
			'gap': theme('spacing')['2.5'],
			'cursor': 'pointer',
			'input[type=checkbox]': {				
				'display': 'flex',
				'appearance': 'none',
				'background-color': 'var(--tw-gray-300)',
				'position': 'relative',
				'cursor': 'pointer',
				'flex-shrink': '0',
				'height': theme('custom.components.switch.DEFAULT.height'),
				'width': theme('custom.components.switch.DEFAULT.width'),
				'border-radius': theme('custom.components.switch.DEFAULT.height'),
				'transition': 'all .15s ease-in-out',
				'&:before': {
					'display': 'flex',
					'position': 'absolute',
					'content': '""',
					'height': '1rem',
					'width': '1rem',
					'border-radius': '100%',
					'background-color': 'var(--tw-light)',
					'left': '0.25rem',
					'top': '50%',
					'transform': 'translateY(-50%)',
					'filter': 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.03))',
					'transition': 'all .15s ease-in-out'
				},
				'&:checked, &[aria-checked="true"]': {
					'background-color': 'var(--tw-primary)',
					'transition': 'all .15s ease-in-out',
					'&:before': {
						'background-color': '#ffffff',
						'transition': 'all .15s ease-in-out',
						'left': 'calc(100% - 0.25rem)',
						'transform': 'translate(-100%, -50%)',
						'filter': 'none'
					}
				},
				'&:disabled': {	
					'background-color': 'var(--tw-gray-100)',
					'border': '1px solid var(--tw-gray-300)',
					'cursor': 'not-allowed',					
					'opacity': '0.5',
					'&:before': {
						'background-color': 'var(--tw-gray-300)'
					},
					'&:checked, &[aria-checked="true"]': {
						'background-color': 'var(--tw-primary-clarity)',
						'border': '0',
						'&:before': {
							'background-color': 'var(--tw-light)'
						}
					}
				}
			},
			'.switch-label': {
				'color': 'var(--tw-gray-700)',
				'font-size': theme('fontSize.sm'),			
				'font-weight': theme('fontWeight.medium'),
				'line-height': theme('lineHeight.4')
			},
			'input[type=checkbox] + .switch-label': {
				'color': 'var(--tw-gray-800)',
			},
			'&:has(input[type=checkbox]:disabled)': {
				'.switch-label': {
					'color': 'var(--tw-gray-500)'
				}
			}
    },
    '.switch-sm': {
			'input[type=checkbox]': {
				'height': theme('custom.components.switch.sm.height'),
				'width': theme('custom.components.switch.sm.width'),
				'border-radius': theme('custom.components.switch.sm.height'),
				'&:before': {
					'height': '0.75rem',
					'width': '0.75rem',
				}
			},
			'.switch-label': {
				'font-size': theme('fontSize.2sm'),		
			}
    },
    '.switch-lg': {
			'input[type=checkbox]': {
				'height': theme('custom.components.switch.lg.height'),
				'width': theme('custom.components.switch.lg.width'),
				'border-radius': theme('custom.components.switch.lg.height'),
				'&:before': {
					'height': '1.25rem',
					'width': '1.25rem',
				}
			},
			'.switch-label': {
				'font-size': theme('fontSize.md'),		
			}
    }
  });  

	addVariant('switch-on', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.switch:has([type="checkbox"]:checked) .${e(`switch-on${separator}${className}`)}`;
      });
    }
  ]);
});