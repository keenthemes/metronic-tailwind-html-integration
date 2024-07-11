/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  addComponents({
    '.popover': {
			'display': 'none',
      'box-shadow': 'var(--tw-popover-box-shadow)', 
      'background-color': 'var(--tw-popover-background-color)',
			'border-radius': theme('custom.components.common.borderRadius.popover'),	
			'border': 'var(--tw-popover-border)',
			'&.show': {
				'display': 'block'
			}	
		},
		'.popover-header': {
			'padding': '0.50rem 0.75rem',
			'font-size': theme('fontSize.sm'),
			'line-height': theme('fontSize.sm.1.lineHeight'),
			'font-weight': theme('fontWeight.medium'),
			'color': 'var(--tw-gray-900)',
			'border-bottom': '1px solid var(--tw-gray-200)',
		},
		'.popover-body': {
			'padding': '0.75rem 0.75rem',
			'font-size': theme('fontSize.2sm'),
			'line-height': theme('fontSize.2sm.1.lineHeight'),
			'font-weight': theme('fontWeight.normal'),
			'color': 'var(--tw-gray-700)'
		}
  });   
});