/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
	// Base	
  addComponents({
    '.tooltip': {
			'display': 'none',
			'color': 'white', 
			'z-index': theme('custom.components.common.zIndex.tooltip'),
      'box-shadow': 'var(--tw-tooltip-box-shadow)', 
      'background-color': 'var(--tw-tooltip-background-color)',
			'border': 'var(--tw-tooltip-border)',
			'border-radius': theme('custom.components.common.borderRadius.tooltip'),
			'padding': '0.375rem 0.6rem',
			'font-size': theme('fontSize.xs'),
			'font-weight': theme('fontWeight.normal'),
			'line-height': theme('fontSize.xs.1.lineHeight'),
			'&.show': {
				'display': 'block'
			}
    }
  });   
});