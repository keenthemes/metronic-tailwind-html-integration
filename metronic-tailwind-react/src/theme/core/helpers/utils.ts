import { KTBreakpointType, KTOptionType } from '../types';

const KTUtils = {
	geUID(prefix: string = ''): string {
		return prefix + Math.floor(Math.random() * (new Date()).getTime());
	},

	getBreakpoint(breakpoint: KTBreakpointType): number {
		const value: string = KTUtils.getCssVar(`--tw-${breakpoint}`);

		if (value) {
			return parseInt(value.trim());
		} else {
			return -1;
		}
	},

	getCssVar(variable: string): string {
		let hex = getComputedStyle(document.documentElement).getPropertyValue(variable);

		if (hex && hex.length > 0) {
			hex = hex.trim();
		}

		return hex;
	},

	parseDataAttribute(value: string): KTOptionType {
		if (value === 'true') {
			return true;
		}

		if (value === 'false') {
			return false;
		}

		if (value === Number(value).toString()) {
			return Number(value);
		}

		if (value === '' || value === 'null') {
			return null;
		}

		if (typeof value !== 'string') {
			return value;
		}

		try {
			return KTUtils.parseJson(value) as object;
		} catch {
			return value;
		}
	},

	parseJson(value: string): JSON {
		return value && value.length > 0 ? JSON.parse(decodeURIComponent(value)) : null;
	},

	parseSelector(selector: string): string {
		if (selector && window.CSS && window.CSS.escape) {
			// Escape any IDs in the selector using CSS.escape
			selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${window.CSS.escape(id)}`);
		}

		return selector;
	},

	capitalize(value: string): string {
		return value.charAt(0).toUpperCase() + value.slice(1);
	},

	uncapitalize(value: string): string {
		return value.charAt(0).toLowerCase() + value.slice(1);
	},

	camelCase(value: string): string {
		return value.replace(/-([a-z])/g, (match, letter) => {
			return letter.toUpperCase();
		});
	},

	isRTL(): boolean {
		const htmlElement = document.querySelector('html');
		return Boolean(htmlElement && htmlElement.getAttribute('direction') === 'rtl');
	},

	throttle(timer: undefined | ReturnType<typeof setTimeout>, func: CallableFunction, delay: number): void {
		// If setTimeout is already scheduled, no need to do anything
		if (timer) {
			return;
		}

		// Schedule a setTimeout after delay seconds
		timer = setTimeout(() => {
			func();

			// Once setTimeout function execution is finished, timerId = undefined so that in <br>
			// the next scroll event function execution can be scheduled by the setTimeout
			clearTimeout(timer);
		}, delay);
	},

	checksum(value: string): string {
		let hash = 0;

		for (let i = 0; i < value.length; i++) {
			hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
		}

		return ('0000000' + (hash >>> 0).toString(16)).slice(-8);
	},
};

export default KTUtils;
