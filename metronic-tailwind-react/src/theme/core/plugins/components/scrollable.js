/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  addComponents({
    '.scrollable, .scrollable-y, .scrollable-x, .scrollable-hover, .scrollable-y-hover, .scrollable-x-hover, .scrollable-auto, .scrollable-y-auto, .scrollable-x-auto': {
      'scrollbar-width': 'thin',
      'scrollbar-color': 'transparent transparent',
      'position': 'relative',
      '&::-webkit-scrollbar': {
        'width': '0.35rem',
        'height': '0.35rem',
      },
      '&::-webkit-scrollbar-track': {
        'background-color': 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        'border-radius': '1.25rem',        
      },
      '&::-webkit-scrollbar-corner': {
        'background-color': 'transparent'
      }
    },
    '.scrollable, .scrollable-hover': {
      'overflow': 'scroll',
    },
    '.scrollable-y, .scrollable-y-hover': {
      'overflow-y': 'scroll',
    },
    '.scrollable-x, .scrollable-x-hover': {
      'overflow-x': 'scroll',
    },
    '.scrollable-auto': {
      'overflow': 'auto',
    },
    '.scrollable-y-auto': {
      'overflow-y': 'auto',
    },
    '.scrollable-x-auto': {
      'overflow-x': 'auto',
    },
    '.scrollable, .scrollable-y, .scrollable-x, .scrollable-auto, .scrollable-y-auto, .scrollable-x-auto, .scrollable-hover:hover, .scrollable-y-hover:hover, .scrollable-x-hover:hover': {
      'scrollbar-color': 'var(--tw-scrollbar-thumb-color, var(--tw-gray-200)) transparent',      
      '&::-webkit-scrollbar-thumb': {
        'background-color': 'var(--tw-scrollbar-thumb-color, var(--tw-gray-200))', 
      },
      '&::-webkit-scrollbar-corner': {
        'background-color': 'transparent'
      }
    },
    [`@media (max-width: ${theme('screens.lg')})`]: {
      '.scrollable, .scrollable-hover': {
        'overflow': 'auto',
      },
      '.scrollable-y, .scrollable-y-hover': {
        'overflow-y': 'auto',
      },
      '.scrollable-x, .scrollable-x-hover': {
        'overflow-x': 'auto',
      },
    },
  });
});