/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
	// Base
  addComponents({
		'.modal': {				
			'width': '100%',
			'display': 'none',
			'opacity': '0',
			'position': 'fixed',
			'overflow': 'auto',
			'inset': '0',
			'padding': theme('spacing.5'),
			'transition': 'opacity 300ms ease',
			'&.open': {
				'opacity': '1',
				'transition': 'opacity 300ms ease'
			}
		},

		'.modal-content': {		
			'position': 'relative',
			'margin-left': 'auto',
			'margin-right': 'auto',
			'border-radius': theme('custom.components.common.borderRadius.modal'),
			'box-shadow': 'var(--tw-modal-box-shadow)', 
			'background-color': 'var(--tw-modal-background-color)', 
			'display': 'flex',
			'flex-direction': 'column'
		},

		'.modal-header': {
			'display': 'flex',
			'align-items': 'center',
			'justify-content': 'space-between',
			'border-bottom': '1px solid var(--tw-gray-200)',
			'padding-left': theme('spacing')['5'],
			'padding-right': theme('spacing')['5'],
			'padding-top': theme('spacing')['2.5'],
			'padding-bottom': theme('spacing')['2.5']
		},

		'.modal-title': {
			'font-size': theme('fontSize.sm'),
			'line-height': theme('fontSize.sm.1.lineHeight'),
			'font-weight': theme('fontWeight.semibold'),
			'color': 'var(--tw-gray-900)'
		},
		
		'.modal-body': {
			'padding-left': theme('spacing')['5'],
			'padding-right': theme('spacing')['5'],
			'padding-top': theme('spacing')['2.5'],
			'padding-bottom': theme('spacing')['2.5']
		},
		
		'.modal-footer': {
			'display': 'flex',
			'align-items': 'center',
			'justify-content': 'between',
			'border-top': '1px solid var(--tw-gray-200)',
			'padding-left': theme('spacing')['5'],
			'padding-right': theme('spacing')['5'],
			'padding-top': theme('spacing')['2.5'],
			'padding-bottom': theme('spacing')['2.5']
		},
		
		'.modal-table': {
			'.table': {
				'th:first-child, td:first-child': {
					'padding-left': theme('spacing')['5']
				},
				'th:last-child, td:last-child': {
					'padding-right': theme('spacing')['5']
				}
			}
		},

		'.modal-backdrop': {
			'position': 'fixed',
			'inset': 0,
			'background-color': 'var(--tw-backdrop-background-color)'
		}
	});

	// Utilities
  addComponents({
		'.modal-dialog': {
			'inset': 'auto'
		},

		'.modal-overlay': {
			'inset': '0',
			'height': '100%'
		},

		'.modal-center': {
			'left': '50%',
			'top': '50%',
			'margin-left': '0',
			'margin-right': '0',
			'transform': 'translate(-50%, -50%)'
		},

		'.modal-center-y': {
			'top': '50%',
			'transform': 'translateY(-50%)'
		},

		'.modal-center-x': {
			'left': '50%',
			'transform': 'translateX(-50%)'
		},

		'.modal-rounded-t': {
			'border-top-left-radius': theme('custom.components.common.borderRadius.modal'),
			'border-top-right-radius': theme('custom.components.common.borderRadius.modal')
		},

		'.modal-rounded-b': {
			'border-bottom-left-radius': theme('custom.components.common.borderRadius.modal'),
			'border-bottom-right-radius': theme('custom.components.common.borderRadius.modal')
		},
  });
});