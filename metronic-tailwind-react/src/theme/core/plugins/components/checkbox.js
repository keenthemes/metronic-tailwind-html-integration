/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';
import svgToDataUri from 'mini-svg-data-uri';

export default plugin(({addComponents, theme}) => {
	// Checkbox
	addComponents({
		'.checkbox[type="checkbox"]': {
			'flex-shrink': '0',
			'appearance': 'none',
			'box-shadow': 'none',
			'background-color': 'var(--tw-light-light)',
			'border-radius': theme('custom.components.checkbox.DEFAULT.borderRadius'), 
			'height': theme('custom.components.checkbox.DEFAULT.size'),
			'width': theme('custom.components.checkbox.DEFAULT.size'),
			'border': '1px solid var(--tw-gray-300)',
			'background-repeat': 'no-repeat',
			'background-position': 'center',
			'background-size': 'auto',
			'&:checked, &[aria-checked="true"]': {
				'background-color': 'var(--tw-primary)',
				'border': '1px solid var(--tw-primary)',
				'background-image': `url("${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M10.3667 0.541643L4.80007 6.10831L1.56674 2.87498C1.41061 2.71977 1.1994 2.63265 0.979241 2.63265C0.759086 2.63265 0.547876 2.71977 0.391741 2.87498C0.236532 3.03111 0.149414 3.24232 0.149414 3.46248C0.149414 3.68263 0.236532 3.89384 0.391741 4.04998L4.21674 7.87498C4.37288 8.03019 4.58409 8.1173 4.80424 8.1173C5.0244 8.1173 5.23561 8.03019 5.39174 7.87498L11.5417 1.72498C11.6198 1.64751 11.6818 1.55534 11.7241 1.45379C11.7665 1.35224 11.7882 1.24332 11.7882 1.13331C11.7882 1.0233 11.7665 0.914379 11.7241 0.81283C11.6818 0.711281 11.6198 0.619113 11.5417 0.541643C11.3856 0.386434 11.1744 0.299316 10.9542 0.299316C10.7341 0.299316 10.5229 0.386434 10.3667 0.541643Z" fill="white"/></svg>')}")`
			},
			'&:indeterminate': {
				'background-color': 'var(--tw-primary)',
				'border': '1px solid var(--tw-primary)',
				'background-image': `url("${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 10h8"/></svg>')}")`
			},
			'&:focus': {
				'border-color': 'var(--tw-primary)',
				'box-shadow': 'var(--tw-input-focus-box-shadow)',
				'color': 'var(--tw-gray-700)',
				'&::placeholder': {
					'color': 'var(--tw-gray-600)',
				},
			},
			'&:active': {
				'color': 'var(--tw-gray-700)',
				'&::placeholder': {
					'color': 'var(--tw-gray-600)',
				},
				'box-shadow': 'none',
			},
			'&:disabled': {
				'cursor': 'not-allowed',
				'background-color': 'var(--tw-gray-200)',
				'border': '1px solid var(--tw-gray-300)',
				'&:indeterminate': {
					'background-color': 'var(--tw-primary-clarity)',
					'border': '0',
					'background-image': `url("${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 10h8"/></svg>')}")`
				},		
				'&:checked, &[aria-checked="true"]': {
					'background-color': 'var(--tw-primary-clarity)',
					'border': '0',
					'background-image': `url("${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M10.3667 0.541643L4.80007 6.10831L1.56674 2.87498C1.41061 2.71977 1.1994 2.63265 0.979241 2.63265C0.759086 2.63265 0.547876 2.71977 0.391741 2.87498C0.236532 3.03111 0.149414 3.24232 0.149414 3.46248C0.149414 3.68263 0.236532 3.89384 0.391741 4.04998L4.21674 7.87498C4.37288 8.03019 4.58409 8.1173 4.80424 8.1173C5.0244 8.1173 5.23561 8.03019 5.39174 7.87498L11.5417 1.72498C11.6198 1.64751 11.6818 1.55534 11.7241 1.45379C11.7665 1.35224 11.7882 1.24332 11.7882 1.13331C11.7882 1.0233 11.7665 0.914379 11.7241 0.81283C11.6818 0.711281 11.6198 0.619113 11.5417 0.541643C11.3856 0.386434 11.1744 0.299316 10.9542 0.299316C10.7341 0.299316 10.5229 0.386434 10.3667 0.541643Z" fill="white"/></svg>')}")`
				},	
			}
		},
		'.checkbox-sm[type="checkbox"]': {
			'border-radius': theme('custom.components.checkbox.sm.borderRadius'), 
			'height': theme('custom.components.checkbox.sm.size'),
			'width': theme('custom.components.checkbox.sm.size'),
			'&:checked, &[aria-checked="true"]': {
				'background-image': `url("${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M8.4932 0.23329L4.03986 4.68662L1.4532 2.09996C1.32829 1.97579 1.15932 1.9061 0.983198 1.9061C0.807074 1.9061 0.638106 1.97579 0.513198 2.09996C0.38903 2.22487 0.319336 2.39383 0.319336 2.56996C0.319336 2.74608 0.38903 2.91505 0.513198 3.03996L3.5732 6.09996C3.69811 6.22412 3.86707 6.29382 4.0432 6.29382C4.21932 6.29382 4.38829 6.22412 4.5132 6.09996L9.4332 1.17996C9.49568 1.11798 9.54528 1.04425 9.57912 0.963008C9.61297 0.881768 9.6304 0.794632 9.6304 0.706624C9.6304 0.618616 9.61297 0.531479 9.57912 0.45024C9.54528 0.369 9.49568 0.295266 9.4332 0.23329C9.30829 0.109123 9.13932 0.0394287 8.9632 0.0394287C8.78707 0.0394287 8.61811 0.109123 8.4932 0.23329Z" fill="white"/></svg>')}")`
			},
			'&:indeterminate': {
				'background-image': `url("${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none"><path d="M9.04638 0.293335L1.03971 0.333335C0.862903 0.333335 0.693333 0.403573 0.568309 0.528598C0.443285 0.653622 0.373047 0.823191 0.373047 1C0.373047 1.17681 0.443285 1.34638 0.568309 1.47141C0.693333 1.59643 0.862903 1.66667 1.03971 1.66667L9.03971 1.62667C9.21653 1.62667 9.3861 1.55643 9.51112 1.43141C9.63614 1.30638 9.70638 1.13681 9.70638 0.960002C9.70638 0.783191 9.63614 0.613622 9.51112 0.488597C9.3861 0.363573 9.21653 0.293335 9.03971 0.293335H9.04638Z" fill="white"/></svg>')}")`
			}
		},
		'.checkbox-lg[type="checkbox"]': {
			'border-radius': theme('custom.components.checkbox.lg.borderRadius'), 
			'height': theme('custom.components.checkbox.lg.size'),
			'width': theme('custom.components.checkbox.lg.size'),
			'&:checked, &[aria-checked="true"]': {
				'background-image': `url("${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none"><path d="M13.2403 0.849997L6.56029 7.53L2.68028 3.65C2.49292 3.46375 2.23947 3.3592 1.97528 3.3592C1.7111 3.3592 1.45765 3.46375 1.27028 3.65C1.08403 3.83736 0.979492 4.09081 0.979492 4.355C0.979492 4.61918 1.08403 4.87263 1.27028 5.06L5.86028 9.65C6.04765 9.83625 6.3011 9.94079 6.56528 9.94079C6.82947 9.94079 7.08292 9.83625 7.27029 9.65L14.6503 2.27C14.744 2.17703 14.8184 2.06643 14.8692 1.94457C14.9199 1.82271 14.9461 1.69201 14.9461 1.56C14.9461 1.42799 14.9199 1.29728 14.8692 1.17542C14.8184 1.05356 14.744 0.94296 14.6503 0.849997C14.4629 0.663746 14.2095 0.559204 13.9453 0.559204C13.6811 0.559204 13.4276 0.663746 13.2403 0.849997Z" fill="white"/></svg>')}")`
			},
			'&:indeterminate': {
				'background-image': `url("${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="3" viewBox="0 0 15 3" fill="none"><path d="M13.0696 0.939941L1.05957 0.999942C0.794354 0.999942 0.54 1.1053 0.352464 1.29284C0.164927 1.48037 0.0595703 1.73473 0.0595703 1.99994C0.0595703 2.26516 0.164927 2.51951 0.352464 2.70705C0.54 2.89458 0.794354 2.99994 1.05957 2.99994L13.0596 2.93994C13.3248 2.93994 13.5791 2.83459 13.7667 2.64705C13.9542 2.45951 14.0596 2.20516 14.0596 1.93994C14.0596 1.67472 13.9542 1.42037 13.7667 1.23283C13.5791 1.0453 13.3248 0.939941 13.0596 0.939941H13.0696Z" fill="white"/></svg>')}")`
			}
		}
	});

	// Group & labels
	addComponents({
		'.checkbox-group': {
			'display': 'flex',
			'align-items': 'center',
			'gap': '0.4rem',
		},
		'.checkbox-label': {
			'color': 'var(--tw-gray-800)',
			'font-weight': theme('fontWeight.medium'),
			'font-size': theme('fontSize.2sm'),
			'line-height': theme('fontSize.2sm.1.lineHeight')
		},
		'.checkbox-label-lg': {      
      'font-size': theme('fontSize.sm'),
			'line-height': theme('fontSize.sm.1.lineHeight')
		}
	});
});