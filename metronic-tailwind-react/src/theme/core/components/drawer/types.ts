export interface KTDrawerConfigInterface {
	enable?: boolean,
	class: string,
	zindex?: string,
	hiddenClass: string
	backdrop: boolean,
  backdropClass: string,
	backdropStatic: boolean,
  keyboard: boolean,
	disableScroll: boolean,
	persistent: boolean;
	focus: boolean;
}
export interface KTDrawerInterface {	
	show(): void;	
	hide(): void;
	toggle(): void;
}