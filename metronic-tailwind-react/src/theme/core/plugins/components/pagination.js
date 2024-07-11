/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  addComponents({
    '.pagination': {
      'display': 'inline-flex',
      'align-items': 'center',
			'gap': '0.25rem',
			'.btn': {
				'display': 'inline-flex',
				'flex-shrink': '0',
				'justify-content': 'center',
				'height': '1.875rem',
				'width': '1.875rem',
				'font-size': theme('fontSize.2sm'),
				'padding': '0',
				'line-height': '0',
				'color': 'var(--tw-gray-600)',
				'i': {
					'font-size': theme('fontSize.base'),
					'color': 'var(--tw-gray-700)'
				},
				'&:hover, &:focus, &:active, &.active' : {
					'background-color': 'var(--tw-gray-200)',
					'color': 'var(--tw-gray-800)',
					'i': {
						'color': 'var(--tw-gray-900)',
					}
				},
				'&[disabled], &.disabled': {
					'opacity': '1',
					'pointer-events': 'none',
					'color': 'var(--tw-gray-500)',
					'i': {
						'color': 'var(--tw-gray-400)'
					}
				}
			},
			'&.pagination-sm': {
				'gap': '0.175rem',
				'.btn': {
					'height': '1.575rem',
					'width': '1.575rem',
					'font-size': theme('fontSize.xs'),
					'i': {
						'font-size': theme('fontSize.sm')
					},
				}
			},
			'&.pagination-lg': {
				'gap': '0.35rem',
				'.btn': {
					'height': '2.275rem',
					'width': '2.275rem',
					'font-size': theme('fontSize.sm'),
					'i': {
						'font-size': theme('fontSize.xl')
					}
				}
			}
    }
  }); 
});