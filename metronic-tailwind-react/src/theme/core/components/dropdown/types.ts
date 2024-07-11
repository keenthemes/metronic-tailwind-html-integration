export declare type KTDropdownTriggerType = 'hover' | 'click';

export interface KTDropdownConfigInterface {
	zindex: number,
	hoverTimeout: number,
	permanent: boolean,
	dismiss: boolean,
	placement: string,
	attach: string,
	offset: string,
  trigger: KTDropdownTriggerType,
	hiddenClass: string
}

export interface KTDropdownInterface {		
	disable(): void;
	enable(): void;
	show(): void;
	hide(): void;
}