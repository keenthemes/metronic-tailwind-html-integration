/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';
import svgToDataUri from 'mini-svg-data-uri';

export default plugin(({addComponents, theme}) => {
	// Base
  addComponents({
    '.table': {
			'width': '100%',
      'caption-side': 'bottom',
			'border-collapse': 'collapse',
			'vertical-align': 'middle',
			'text-align': 'left',
			'color': 'var(--tw-gray-700)',
			'font-weight': theme('fontWeight.medium'),
			'font-size': theme('fontSize.sm'),
			'line-height': theme('fontSize.sm.1.lineHeight'),
			'th, td': {
				'input[type="checkbox"]': {
					'vertical-align': 'inherit'
				}
			},
			'thead, tfoot': {
				'td, th': {
					'padding-left': theme('custom.components.table.px'),
					'padding-right': theme('custom.components.table.px'),
					'padding-top': theme('custom.components.table.py.head'),
					'padding-bottom': theme('custom.components.table.py.head'),
					'background-color': 'var(--tw-table-head-background-color)',
					'color': 'var(--tw-gray-600)',
					'font-weight': theme('fontWeight.medium'),
					'font-size': theme('fontSize.2sm'),
					'line-height': theme('fontSize.2sm.1.lineHeight'),
					'vertical-align': 'middle'
				},
			},
			'thead': {
				'td, th': {
					'border-bottom': 'var(--tw-table-border)'
				},
			},
			'tfoot': {
				'td, th': {
					'border-top': 'var(--tw-table-border)'
				},
			},
			'tbody': {
				'vertical-align': 'inherit',
				'tr': {
					'td, th': {						
						'padding-left': theme('custom.components.table.px'),
						'padding-right': theme('custom.components.table.px'),
						'padding-top': theme('custom.components.table.py.body'),
						'padding-bottom': theme('custom.components.table.py.body'),						
						'border-bottom':  'var(--tw-table-border)'
					},
					'&:last-child': {
						'td, th': {
							'border-bottom': '0',
						},
					},
				}	
			}			
    }
  });   

	// Border
	addComponents({
    '.table-border': {
			'border': 'var(--tw-table-border)',
			'td, th': {
				'border-right': 'var(--tw-table-border)',
				'&:last-child': {
					'border-right': '0'
				}
			}
    },
		'.table-border-l': {
			'border-left': 'var(--tw-table-border)'
    },
		'.table-border-r': {
			'border-right': 'var(--tw-table-border)'
    },
		'.table-border-t': {
			'border-top': 'var(--tw-table-border)'
    },
		'.table-border-b': {
			'border-bottom': 'var(--tw-table-border)'
    }
  });

	// Sort
	addComponents({
		'.sort': {			
			'display': 'inline-flex',
			'align-items': 'center',
			'gap': '0.35rem',
			'cursor': 'pointer',
			'line-height': '1'
		},
    '.sort-icon': {			
			'display': 'inline-flex',
			'flex-direction': 'column',
			'justify-content': 'center',
			'align-items': 'center',
			'height': '0.875rem',
			'width': '0.875rem',
			'gap': '0.125rem',
			'line-height': '1',
			'&:before': {
				'display': 'inline-block',
				'content': '""',				
				'height': '0.25rem',
				'width': '0.438rem',
				'background-repeat': 'no-repeat',
				'background-position': `center`,
				'background-size': 'cover',
				'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1.08333 4.83333C0.908333 4.83333 0.791667 4.775 0.675 4.65833C0.441667 4.425 0.441667 4.075 0.675 3.84167L3.59167 0.925C3.825 0.691667 4.175 0.691667 4.40833 0.925L7.325 3.84167C7.55833 4.075 7.55833 4.425 7.325 4.65833C7.09167 4.89167 6.74167 4.89167 6.50833 4.65833L4 2.15L1.49167 4.65833C1.375 4.775 1.25833 4.83333 1.08333 4.83333Z" fill="${theme('base.colors.gray.light.600')}"/></svg>`)}")`
			},
			'&:after': {
				'display': 'inline-block',
				'content': '""',
				'height': '0.25rem',
				'width': '0.438rem',
				'background-repeat': 'no-repeat',
				'background-position': `center`,
				'background-size': 'cover',
				'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4 4.24984C3.825 4.24984 3.70833 4.1915 3.59167 4.07484L0.675 1.15817C0.441667 0.924838 0.441667 0.574837 0.675 0.341504C0.908333 0.108171 1.25833 0.108171 1.49167 0.341504L4 2.84984L6.50833 0.341504C6.74167 0.108171 7.09167 0.108171 7.325 0.341504C7.55833 0.574837 7.55833 0.924838 7.325 1.15817L4.40833 4.07484C4.29167 4.1915 4.175 4.24984 4 4.24984Z" fill="${theme('base.colors.gray.light.600')}"/></svg>`)}")`
			},
			'.asc > &': {
				'&:before': {
					'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1.08333 4.83333C0.908333 4.83333 0.791667 4.775 0.675 4.65833C0.441667 4.425 0.441667 4.075 0.675 3.84167L3.59167 0.925C3.825 0.691667 4.175 0.691667 4.40833 0.925L7.325 3.84167C7.55833 4.075 7.55833 4.425 7.325 4.65833C7.09167 4.89167 6.74167 4.89167 6.50833 4.65833L4 2.15L1.49167 4.65833C1.375 4.775 1.25833 4.83333 1.08333 4.83333Z" fill="${theme('base.colors.gray.light.700')}"/></svg>`)}")`
				},
				'&:after': {
					'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4 4.24984C3.825 4.24984 3.70833 4.1915 3.59167 4.07484L0.675 1.15817C0.441667 0.924838 0.441667 0.574837 0.675 0.341504C0.908333 0.108171 1.25833 0.108171 1.49167 0.341504L4 2.84984L6.50833 0.341504C6.74167 0.108171 7.09167 0.108171 7.325 0.341504C7.55833 0.574837 7.55833 0.924838 7.325 1.15817L4.40833 4.07484C4.29167 4.1915 4.175 4.24984 4 4.24984Z" fill="${theme('base.colors.gray.light.400')}"/></svg>`)}")`
				}
			},
			'.desc > &': {
				'&:before': {
					'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1.08333 4.83333C0.908333 4.83333 0.791667 4.775 0.675 4.65833C0.441667 4.425 0.441667 4.075 0.675 3.84167L3.59167 0.925C3.825 0.691667 4.175 0.691667 4.40833 0.925L7.325 3.84167C7.55833 4.075 7.55833 4.425 7.325 4.65833C7.09167 4.89167 6.74167 4.89167 6.50833 4.65833L4 2.15L1.49167 4.65833C1.375 4.775 1.25833 4.83333 1.08333 4.83333Z" fill="${theme('base.colors.gray.light.400')}"/></svg>`)}")`
				},
				'&:after': {
					'background-image': `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4 4.24984C3.825 4.24984 3.70833 4.1915 3.59167 4.07484L0.675 1.15817C0.441667 0.924838 0.441667 0.574837 0.675 0.341504C0.908333 0.108171 1.25833 0.108171 1.49167 0.341504L4 2.84984L6.50833 0.341504C6.74167 0.108171 7.09167 0.108171 7.325 0.341504C7.55833 0.574837 7.55833 0.924838 7.325 1.15817L4.40833 4.07484C4.29167 4.1915 4.175 4.24984 4 4.24984Z" fill="${theme('base.colors.gray.light.700')}"/></svg>`)}")`
				}
			}
		},
		'.sort-label': {
			'display': 'inline-flex',
			'align-items': 'center',
			'gap': '0.35rem'
		}
  });
	
});