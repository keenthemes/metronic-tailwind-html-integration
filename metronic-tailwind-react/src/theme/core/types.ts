export declare type KTBreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export declare type KTCallableType = (event?: Event, target?: HTMLElement) => void | boolean;

export declare type KTViewPortType = {
	width: number;
	height: number;
};

export declare type KTOffsetType = {
	top: number;
	left: number;
	right: number;
	bottom: number;
};

export declare type KTOptionType = string | number | boolean | object;
