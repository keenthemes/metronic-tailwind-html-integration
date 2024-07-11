/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import KTData from '../../helpers/data';
import KTDom from '../../helpers/dom';
import KTComponent from '../component';
import { KTTogglePasswordConfigInterface, KTTogglePasswordInterface } from './types';

export class KTTogglePassword extends KTComponent implements KTTogglePasswordInterface {
  protected override _name: string = 'toggle-password';
  protected override _defaultConfig: KTTogglePasswordConfigInterface = {
    permanent: false
  };
  protected override _config: KTTogglePasswordConfigInterface = this._defaultConfig;
  protected _triggerElement: HTMLElement;
  protected _inputElement: HTMLInputElement;

  constructor(element: HTMLElement, config: KTTogglePasswordConfigInterface | null = null) {
    super();
    
    if (KTData.has(element as HTMLElement, this._name)) return;

    this._init(element);
    this._buildConfig(config);

    this._triggerElement = this._element.querySelector('[data-toggle-password-trigger]');
    this._inputElement = this._element.querySelector('input[type="password"]');
    
    if (!this._triggerElement || !this._inputElement) {
      return;
    }

    this._handlers();
  }

  protected _handlers(): void {
    if (!this._element) return;

    this._triggerElement.addEventListener('click', () => {
      this._toggle();
    });

    this._inputElement.addEventListener('input', () => {

      this._update();
    });
  }

  protected _toggle(): void {
    if (!this._element) return;
    const payload = { cancel: false };
    this._fireEvent('toggle', payload);
    this._dispatchEvent('toggle', payload);
    if (payload.cancel === true) {
      return;
    }

    if (this._isVisible()) {
      this._element.classList.remove('active')
      this._setVisible(false);
    } else {
      this._element.classList.add('active')
      this._setVisible(true);
    }

    this._fireEvent('toggled');
    this._dispatchEvent('toggled');
  }

  protected _update(): void {
    if (!this._element) return;

    if ((this._getOption('permanent') as boolean) === false) {
      if (this._isVisible()) {
        this._setVisible(false);
      }
    }
  }

  public _isVisible(): boolean {
    return this._inputElement.getAttribute('type') === 'text';
  }

  public _setVisible(flag: boolean) {
    if (flag) {
      this._inputElement.setAttribute('type', 'text');
    } else {
      this._inputElement.setAttribute('type', 'password');
    }
  }

  public toggle(): void {
    this._toggle();
  }

  public setVisible(flag: boolean): void {
    this._setVisible(flag);
  }

  public isVisible(): boolean {
    return this._isVisible();
  }

  public static getInstance(element: HTMLElement): KTTogglePassword {
    return KTData.get(element, 'toggle-password') as KTTogglePassword;
  }

  public static getOrCreateInstance(element: HTMLElement, config?: KTTogglePasswordConfigInterface): KTTogglePassword {
    return this.getInstance(element) || new KTTogglePassword(element, config);
  }

  public static createInstances(): void {
    const elements = document.querySelectorAll('[data-toggle-password="true"]');

    elements.forEach((element) => {
      new KTTogglePassword(element as HTMLElement);
    });
  }

  public static init(): void {
    KTTogglePassword.createInstances();
  }
}