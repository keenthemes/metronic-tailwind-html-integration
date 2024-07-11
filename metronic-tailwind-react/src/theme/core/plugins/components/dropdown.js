/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Base
  addComponents({
    '.dropdown': {
      'display': 'flex',
    },
    '.dropdown-toggle': {      
    },
    '.dropdown-content': {
      'display': 'none',
      'align-items': 'stretch',
      'flex-direction': 'column',
      'border': 'var(--tw-dropdown-border)', 
      'box-shadow': 'var(--tw-dropdown-box-shadow)', 
      'background-color': 'var(--tw-dropdown-background-color)', 
      'border-radius': theme('custom.components.common.borderRadius.dropdown'), 
      '.open.dropdown > &, &.open[data-popper-placement]': {
        'will-change': 'transform'
      }
    }
  });

  // Utilities
  addComponents({
		'.modal-rounded-t': {
			'border-top-left-radius': theme('custom.components.common.borderRadius.dropdown'),
			'border-top-right-radius': theme('custom.components.common.borderRadius.dropdown')
		},
		'.modal-rounded-b': {
			'border-bottom-left-radius': theme('custom.components.common.borderRadius.dropdown'),
			'border-bottom-right-radius': theme('custom.components.common.borderRadius.dropdown')
		},
  });
});