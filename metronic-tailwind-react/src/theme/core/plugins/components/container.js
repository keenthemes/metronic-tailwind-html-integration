/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Fixed
  addComponents({
    '.container-fixed': {
			'flex-grow': '1',
			'padding-left': theme('custom.components.container.fixed.px.DEFAULT'),
      'padding-right': theme('custom.components.container.fixed.px.DEFAULT')
    },
		[`@media (min-width: ${theme('screens.xl')})`]: {
			'.container-fixed': {
				'margin-left': 'auto',
				'margin-right': 'auto',
				'padding-left': theme('custom.components.container.fixed.px.xl'),
				'padding-right': theme('custom.components.container.fixed.px.xl'),
				'max-width': theme('custom.components.container.fixed')['max-width']
			}
		}
  });
	
	// Fluid
  addComponents({
    '.container-fluid': {
			'flex-grow': '1',
			'padding-left': theme('custom.components.container.fluid.px.DEFAULT'),
      'padding-right': theme('custom.components.container.fluid.px.DEFAULT')
    },
		[`@media (min-width: ${theme('screens.xl')})`]: {
			'.container-fluid': {
				'padding-left': theme('custom.components.container.fluid.px.xl'),
				'padding-right': theme('custom.components.container.fluid.px.xl')
			}
		}
  });
});