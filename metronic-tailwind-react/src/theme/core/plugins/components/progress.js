/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Base
  addComponents({
    '.progress': {
      'width': '100%',
      'display': 'flex',
			'min-height': '4px',
			'overflow': 'hidden',
			'background-color': 'var(--tw-gray-100)',
			'border-radius': theme('custom.components.common.borderRadius.progress'),      
    },
		'.progress-bar': {
			'display': 'flex',
			'flex-direction': 'column',
			'justify-content': 'center',
			'overflow': 'hidden',
			'text-align': 'center',
			'white-space': 'nowrap',
			'background-color': 'var(--tw-gray-300)',
      'border-radius': theme('custom.components.common.borderRadius.progress'),  
    }
  });

  // Color options
  const colors = ['primary', 'success', 'danger', 'warning', 'info', 'dark'];

  colors.forEach((color) => {
    addComponents({
      [`.progress-${color}`]: {
        'background-color': `var(--tw-${color}-light)`,
				'.progress-bar': {
					'background-color': `var(--tw-${color})`
				}
      }			
    });
  });   
});