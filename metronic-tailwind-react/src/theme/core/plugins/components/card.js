/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Base
  addComponents({
    '.card': {
      'display': 'flex',
      'flex-direction': 'column',
      'box-shadow': 'var(--tw-card-box-shadow)', 
      'background-color': 'var(--tw-card-background-color)', 
      'border-radius': theme('custom.components.common.borderRadius.card'),      
      'border': 'var(--tw-card-border)', 
    },
    '.card-title': {
      'font-size': theme('fontSize.base'),
      'line-height': theme('fontSize.base.1.lineHeight'),
      'font-weight': theme('fontWeight.semibold'),
      'color': 'var(--tw-gray-900)',
    },
    '.card-header': {
      'display': 'flex',
      'min-height': '56px',
      'align-items': 'center',
      'justify-content': 'space-between',
      'border-bottom': 'var(--tw-card-border)',
      'padding-left': theme('custom.components.card.px'),
      'padding-right': theme('custom.components.card.px'),
      'padding-top': theme('custom.components.card.py.header'),
      'padding-bottom': theme('custom.components.card.py.header'),
    },
    '.card-body': {
      'flex-grow': '1',
      'padding-left': theme('custom.components.card.px'),
      'padding-right': theme('custom.components.card.px'),
      'padding-top': theme('custom.components.card.py.body'),
      'padding-bottom': theme('custom.components.card.py.body'),
    },
    '.card-footer': {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'between',
      'border-top': 'var(--tw-card-border)',
      'padding-left': theme('custom.components.card.px'),
      'padding-right': theme('custom.components.card.px'),
      'padding-top': theme('custom.components.card.py.footer'),
      'padding-bottom': theme('custom.components.card.py.footer'),
    },
    '.card-table': {
      'table': {
        'th:first-child, td:first-child': {
          'padding-left': theme('custom.components.card.px'),
        },
        'th:last-child, td:last-child': {
          'padding-right': theme('custom.components.card.px'),
        },
        '&.table-border': {
          'border': '0'
        }
      }        
    },
    '.card-group': {
      'padding-left': theme('custom.components.card.px'),
      'padding-right': theme('custom.components.card.px'),
      'padding-top': theme('custom.components.card.py.group'),
      'padding-bottom': theme('custom.components.card.py.group'),
      'border-bottom': 'var(--tw-card-border)',
      '&:last-child': {
        'border-bottom': '0',
      }, 
      '& + .card-footer': {
        'border-top': '0',
      }
    }
  });   

  // Border radius
  addComponents({
    '.table': {
      'th:first-child': {
        'border-top-left-radius': theme('custom.components.common.borderRadius.card'),
      },
      'th:last-child': {
        'border-top-right-radius': theme('custom.components.common.borderRadius.card'),
      } 
    },
    '.card-header + .card-body, .card-header + .card-table': {
      'table': {
        'th:first-child, th:last-child': {
          'border-radius': '0'
        }        
      }
    }
  });
  
  // Grid
  addComponents({
    '.card-grid': {
      '.card-header, .card-footer': {
        'padding-left': theme('custom.components.card.grid.px'),
        'padding-right': theme('custom.components.card.grid.px')
      },
      '.card-body': {
        'padding': '0',
        'table': {
          'border': '0',
          'th:first-child, td:first-child': {
            'padding-left': theme('custom.components.card.grid.px')
          },
          'th:last-child, td:last-child': {
            'padding-right': theme('custom.components.card.grid.px')
          }         
        }
      }
    }
  });

  // Utilities
  addComponents({
    '.card-border': {
      'border': 'var(--tw-card-border)'
    },
    '.card-rounded': {
      'border-radius': theme('custom.components.common.borderRadius.card'),
      '&.table': {
        'border-collapse': 'separate',
        'border-spacing': '0'
      }
    },
    '.card-rounded-b': {
      'border-bottom-left-radius': theme('custom.components.common.borderRadius.card'),
      'border-bottom-right-radius': theme('custom.components.common.borderRadius.card'),
    },
    '.card-rounded-bl': {
      'border-bottom-left-radius': theme('custom.components.common.borderRadius.card'),
    },
    '.card-rounded-br': {
      'border-bottom-right-radius': theme('custom.components.common.borderRadius.card'),
    },
    '.card-rounded-t': {
      'border-top-left-radius': theme('custom.components.common.borderRadius.card'),
      'border-top-right-radius': theme('custom.components.common.borderRadius.card'),
    },
    '.card-rounded-tl': {
      'border-top-left-radius': theme('custom.components.common.borderRadius.card'),
    },
    '.card-rounded-tr': {
      'border-top-right-radius': theme('custom.components.common.borderRadius.card'),
    }
  });  
});