/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import KTData from '../../helpers/data';
import KTEventHandler from '../../helpers/event-handler';
import KTComponent from '../component';
import { KTThemeInterface, KTThemeConfigInterface } from './types';
import { KTThemeModeType } from './types';

export class KTTheme extends KTComponent implements KTThemeInterface {
  protected override _name: string = 'theme';
  protected override _defaultConfig: KTThemeConfigInterface = {
    mode: 'light',
    class: true,
    attribute: 'data-theme-mode',
  };
  protected _mode: KTThemeModeType | null = null;
  protected _currentMode: KTThemeModeType | null = null;

  constructor(element: HTMLElement, config: KTThemeConfigInterface | null = null) {
    super();

    if (KTData.has(element as HTMLElement, this._name)) return;

    this._init(element);
    this._buildConfig(config);
    this._setMode((localStorage.getItem('theme') || this._getOption('mode')) as KTThemeModeType);
    this._handlers();
  }

  protected _handlers(): void {
    if (!this._element) return;

    KTEventHandler.on(this._element, '[data-theme-toggle="true"]', 'click', () => {
      this._toggle();
    });

    KTEventHandler.on(this._element, '[data-theme-switch]', 'click', (event: Event, target: HTMLElement) => {
      event.preventDefault();

      const mode = target.getAttribute('data-theme-switch') as KTThemeModeType;
      this._setMode(mode);
    });
  }

  protected _toggle() {
    const mode = this._currentMode === 'light' ? 'dark' : 'light';

    this._setMode(mode);
  }

  protected _setMode(mode: KTThemeModeType): void {
    if (!this._element) return;
    const payload = { cancel: false };
    this._fireEvent('change', payload);
    this._dispatchEvent('change', payload);
    if (payload.cancel === true) {
      return;
    }

    let currentMode: KTThemeModeType = mode;
    if (mode === 'system') {
      currentMode = this._getSystemMode();
    }

    this._mode = mode;
    this._currentMode = currentMode;
    this._bindMode();
    this._updateState();
    localStorage.setItem('theme', this._mode);
    this._element.setAttribute('data-theme-mode', mode);

    this._fireEvent('changed', {});
    this._dispatchEvent('changed', {});
  }

  protected _getMode(): KTThemeModeType {
    return localStorage.getItem('theme') as KTThemeModeType || this._mode;
  }

  protected _getSystemMode(): KTThemeModeType {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  protected _bindMode(): void {
    if (!this._currentMode || !this._element) {
      return;
    }

    if (this._getOption('class')) {
      this._element.classList.remove('dark');
      this._element.classList.remove('light');
      this._element.removeAttribute(this._getOption('attribute') as string);
      this._element.classList.add(this._currentMode);
    } else {
      this._element.classList.remove(this._currentMode);
      this._element.setAttribute(this._getOption('attribute') as string, this._currentMode);
    }
  }

  protected _updateState() {
    const elements = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"][data-theme-state]');
    elements.forEach((element) => {
      if (element.getAttribute('data-theme-state') === this._mode) {
        element.checked = true;
      }
    });
  }

  public getMode(): KTThemeModeType {
    return this._getMode();
  }

  public setMode(mode: KTThemeModeType) {
    this.setMode(mode);
  }

  public static getInstance(element: HTMLElement = document.body): KTTheme {
    return KTData.get(element, 'theme') as KTTheme;
  }

  public static getOrCreateInstance(element: HTMLElement = document.body, config?: KTThemeConfigInterface): KTTheme | null {
    return this.getInstance(element) || new KTTheme(element, config);
  }

  public static createInstances(): void {
    const elements = document.querySelectorAll('[data-theme]:not([data-theme="false"]');

    elements.forEach((element) => {
      new KTTheme(element as HTMLElement);
    });
  }

  public static init(): void {
    KTTheme.createInstances();
  }
}