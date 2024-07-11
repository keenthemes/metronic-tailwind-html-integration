/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Base
  addComponents({
    '.apexcharts-text, .apexcharts-title-text, .apexcharts-legend-text': {
      'font-family': 'inherit !important',
    },
    '.apexcharts-title-text': {
      'font-weight': theme('fontWeight.normal'),
    },
    '.apexcharts-pie-label': {
      'font-size': theme('fontSize.xs'),
      'line-height': theme('fontSize.xs.1.lineHeight'),
    },
    '.apexcharts-toolbar': {
      'text-align': 'left !important',
    },
    '.apexcharts-menu': {
      'border': '1px solid var(--tw-gray-200) !important', 
      'box-shadow': 'var(--tw-default-box-shadow) !important', 
      'background-color': 'var(--tw-light) !important', 
      'border-radius': '0.625rem  !important', 
      'padding': '0.5rem 0 !important',
      'overflow': 'hidden',
      'min-width': '10rem !important',
      '.apexcharts-menu-item': {
        'padding': '0.5rem 0.5rem  !important',    
        '&:hover': {
          'background-color': 'var(--tw-gray-100) !important'
        }
      },
    },
    '.apexcharts-tooltip': {
      'border': '1px solid var(--tw-gray-200) !important', 
      'box-shadow': 'var(--tw-default-box-shadow) !important', 
      'background-color': 'var(--tw-light) !important', 
      'border-radius': '0.625rem !important', 
      'color': 'var(--tw-gray-700) !important',
      '.apexcharts-tooltip-title': {
        'padding': '0.25rem 0.5rem !important',
        'background-color': 'transparent !important', 
        'font-size': theme('fontSize.2sm'), 
        'line-height': theme('fontSize.2sm.1.lineHeight'),
        'font-weight': theme('fontWeight.medium'), 
        'color': 'var(--tw-gray-800)',
        'border-bottom': '1px solid var(--tw-gray-200) !important',
      },    
    },
    '.apexcharts-xaxistooltip': {
      'border': '1px solid var(--tw-gray-200) !important', 
      'box-shadow': 'var(--tw-default-box-shadow)', 
      'background-color': 'var(--tw-light) !important', 
      'border-radius': '0.625rem', 
      'color': 'var(--tw-gray-900)',
      '&:before': {
        'border-bottom': '0 !important',
      },      
    },
    '.apexcharts-legend': {
      'display': 'flex',
      'flex-direction': 'column',
      'gap': theme('spacing.2'),
      '.apexcharts-legend-series': {
        'gap': theme('spacing.1'),
        'display': 'flex',
        'align-items': 'center',
        '.apexcharts-legend-text': {
          'font-size': `${theme('fontSize.sm')}`,
          'line-height': theme('fontSize.sm.1.lineHeight'),
          'font-weight': `${theme('fontWeight.medium')}`, 
          'color': 'var(--tw-gray-500)',
        },
      },
    },
    '.apexcharts-card-rounded': {
      '.apexcharts-canvas': {
        'svg': {
          'border-bottom-left-radius': theme('custom.components.common.borderRadius.card'), 
          'border-bottom-right-radius': theme('custom.components.common.borderRadius.card')
        }
      }
    },
    '.apexcharts-rounded-sm': {
      '.apexcharts-canvas': {
        'svg': {
          'border-radius': theme('borderRadius.sm'), 
        }
      }
    },
    '.apexcharts-rounded': {
      '.apexcharts-canvas': {
        'svg': {
          'border-radius': theme('borderRadius.DEFAULT'), 
        }
      }
    },
    '.apexcharts-rounded-lg': {
      '.apexcharts-canvas': {
        'svg': {
          'border-radius': theme('borderRadius.lg'), 
        }
      }
    },
    '.apexcharts-rounded-xl': {
      '.apexcharts-canvas': {
        'svg': {
          'border-radius': theme('borderRadius.xl'), 
        }
      }
    }
  });   
});