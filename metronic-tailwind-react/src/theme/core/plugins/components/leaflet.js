/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Base
  addComponents({
    '.leaflet-container': {
      '.leaflet-pane, .leaflet-top, .leaflet-bottom, .leaflet-control': {
        'z-index': '1 !important'
      },
      '.leaflet-popup-content-wrapper': {
        'border-radius': theme('custom.components.common.borderRadius.dropdown'), 
        'text-align': 'center',
        'background-color': 'var(--tw-dropdown-background-color)', 
        '.leaflet-popup-content': {
          'font-family': 'inherit',
          'font-size': theme('fontSize.2sm')
        }
      }
    }
  });   
});