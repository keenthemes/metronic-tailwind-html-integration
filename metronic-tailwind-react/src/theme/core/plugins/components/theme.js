/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

const convertToKebabCase = (str) => {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export default plugin(({addBase, theme}) => {
	const getGrayColors = (mode) => {
		const gray = theme('base.colors.gray')[mode];
		const vars = {};

		for (const variant of Object.keys(gray)) {
			vars[`--tw-gray-${variant}`] = gray[variant];
		}

		return vars;
	}

	const getCoalColors = () => {
		const coal = theme('colors.coal');
		const vars = {};

		for (const variant of Object.keys(coal)) {
			vars[`--tw-coal-${variant}`] = coal[variant];
		}

		return vars;
	}

	const getDefaultGrayColors = (mode) => {
		const gray = theme('base.colors.gray')[mode];
		const vars = {};

		for (const variant of Object.keys(gray)) {
			vars[`--tw-gray-${variant}-${mode}`] = gray[variant];
		}

		return vars;
	}

	const getContextualColors = (mode) => {
		const contextual = theme('base.colors.contextual')[mode];
		const vars = {};

		for (const variant of Object.keys(contextual)) {
			for (const state of Object.keys(contextual[variant])) {
				const color = contextual[variant][state];

				vars[`--tw-${variant}${state == 'default' ? '' : '-' + state}`] = color;
			}
		}

		return vars;
	}

	const getDefaultContextualColors = (mode) => {
		const contextual = theme('base.colors.contextual')[mode];
		const vars = {};

		for (const variant of Object.keys(contextual)) {
			for (const state of Object.keys(contextual[variant])) {
				const color = contextual[variant][state];

				vars[`--tw-${variant}${state == 'default' ? '' : '-' + state}-${mode}`] = color;
			}
		}

		return vars;
	}

	const getComponentBackgroundColors = (mode) => {
		const colors = theme('custom.components.common.backgrounds')[mode];
		const vars = {};

		for (const variant of Object.keys(colors)) {
			const prop = convertToKebabCase(variant);
			vars[`--tw-${prop}-background-color`] = colors[variant];
		}

		return vars;
	}

	const getComponentBorders = (mode) => {
		const borders = theme('custom.components.common.borders')[mode];
		const vars = {};

		for (const variant of Object.keys(borders)) {
			vars[`--tw-${variant}-border`] = borders[variant];
		}

		return vars;
	}

	const getComponentsBoxShadows = (mode) => {
		const boxShadows = theme('custom.components.common.boxShadows')[mode];
		const vars = {};

		for (const variant of Object.keys(boxShadows)) {
			vars[`--tw-${variant}-box-shadow`] = boxShadows[variant];
		}

		return vars;
	}

	const getContextualBoxShadows = (mode) => {
		const boxShadows = theme('base.boxShadows')[mode];
		const vars = {};

		for (const variant of Object.keys(boxShadows)) {
			vars[`--tw-${variant}-box-shadow`] = boxShadows[variant];
		}

		return vars;
	}

  addBase({
    ':root': {
			...getDefaultGrayColors('light'), 
			...getDefaultGrayColors('dark'), 
			...getDefaultContextualColors('light'), 
			...getDefaultContextualColors('dark'),
			...getCoalColors()
		}
  });

	addBase({
    ':root, .light': {
			...getGrayColors('light'),
			...getContextualColors('light'),
			...getContextualBoxShadows('light'),
			...getComponentBackgroundColors('light'),
			...getComponentBorders('light'),
			...getComponentsBoxShadows('light')	
		}
  });

	addBase({
    '.dark': {
			...getGrayColors('dark'),
			...getContextualColors('dark'),
			...getContextualBoxShadows('dark'),
			...getComponentBackgroundColors('dark'),
			...getComponentBorders('dark'),
			...getComponentsBoxShadows('dark')			
		}
  });
});