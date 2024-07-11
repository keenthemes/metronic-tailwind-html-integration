export declare type KTThemeModeType = 'light' | 'dark' | 'system';

export interface KTThemeConfigInterface {
	mode: KTThemeModeType,
	class: boolean,
	attribute: string
}

export interface KTThemeInterface {
	setMode(mode: KTThemeModeType): void;
	getMode(): KTThemeModeType;
}