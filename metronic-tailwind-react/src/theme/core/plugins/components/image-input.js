/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents}) => {
  // Base
  addComponents({
    '.image-input': {			
      'display': 'inline-flex',
			'position': 'relative',
      'align-items': 'stretch',
			'justify-content': 'center',
      'input[type="file"]': {
				'appearance': 'none',
				'position': 'absolute',
				'width': '0 !important',
				'height': '0 !important',
				'overflow': 'hidden',
				'opacity': '0',
			},
			'.image-input-preview': {
				'cursor': 'pointer',
				'position': 'relative',
				'overflow': 'hidden',
				'width': '100%',
				'height': '100%',
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
			},
			'.image-input-placeholder': {
				'position': 'relative',
				'overflow': 'hidden',
				'width': '100%',
				'height': '100%',
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
			}
    },
  }); 
});