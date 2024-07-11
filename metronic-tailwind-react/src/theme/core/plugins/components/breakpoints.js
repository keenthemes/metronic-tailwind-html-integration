/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addVariant, config}) => {
  const screens = config().theme.screens;

  for (const screen of Object.keys(screens)) {
    addVariant(`below-${screen}`, `@media screen and (max-width: theme('screens.${screen}'))`);
  }
});