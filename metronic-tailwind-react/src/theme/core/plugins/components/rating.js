/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents}) => {
  addComponents({
    '.rating': {
      'display': 'inline-flex',
      'align-items': 'stretch', 
      'input': {
        'appearance': 'none',
        'position': 'absolute',
        'left': '9999px',
        '&[disabled]': {
          'display': 'none',
        }
      }
    },
    '.rating-on': {
      'color': 'var(--tw-warning)',
    },
    '.rating-off': {
      'color': 'var(--tw-gray-400)',
    },
    '.rating-label': {
      'display': 'inline-flex',
      'align-items': 'center',
      '.rating-on': {
        'display': 'none',
      },
      '.rating-off': {
        'display': 'inline-flex',
      },
    },      
    '.rating:hover label.rating-label, label.rating-label, label.rating-label.checked, div.rating-label.checked': {
      '.rating-on': {
        'display': 'inline-flex',
      },
      '.rating-off': {
        'display': 'none',
      },
    },
    'label.rating-label:hover ~ label.rating-label, .rating-input:checked ~ .rating-label': {
      '.rating-on': {
        'display': 'none',
      },
      '.rating-off': {
        'display': 'inline-flex',
      },
    },  
    '.rating-label.indeterminate': {
      'position': 'relative',
      '.rating-on': {
        'display': 'inline-flex',
        'position': 'absolute',
        'z-index': '1',
        'overflow': 'hidden',
      },
      '.rating-off': {
        'display': 'inline-flex',
      }
    },
    'label.rating-label': {
      'cursor': 'pointer'
    }
  });    
});