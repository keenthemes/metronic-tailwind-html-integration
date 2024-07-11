/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import KTData from '../../helpers/data';
import KTDom from '../../helpers/dom';
import KTComponent from '../component';
import { KTScrolltoInterface, KTScrolltoConfigInterface } from './types';

export class KTScrollto extends KTComponent implements KTScrolltoInterface {
  protected override _name: string = 'scrollto';
  protected override _defaultConfig: KTScrolltoConfigInterface = {
    smooth: true,
    parent: 'body',
    target: '',
    offset: 0,
  };
  protected override _config: KTScrolltoConfigInterface = this._defaultConfig;
  protected _targetElement: HTMLElement;

  constructor(element: HTMLElement, config?: KTScrolltoConfigInterface) {
    super();

    if (KTData.has(element as HTMLElement, this._name)) return;

    this._init(element);
    this._buildConfig(config);

    if (!this._element) return;

    this._targetElement = this._getTargetElement();

    if (!this._targetElement) {
      return;
    }

    this._handlers();
  }

  private _getTargetElement(): HTMLElement | null {
    return (      
      KTDom.getElement(this._element.getAttribute('data-scrollto') as string) ||
      KTDom.getElement(this._getOption('target') as string)
    );
  }

  protected _handlers(): void {
    if (!this._element) return;

    this._element.addEventListener('click', (event: Event) => {
      event.preventDefault();
      this._scroll();
    });
  }

  protected _scroll(): void {
    const pos = this._targetElement.offsetTop + parseInt(this._getOption('offset') as string);

    let parent: HTMLElement | Window = KTDom.getElement(this._getOption('parent') as string);
    
    if (!parent || parent === document.body) {
      parent = window;
    }

    parent.scrollTo({
      top: pos,
      behavior: (this._getOption('smooth') as boolean) ? 'smooth' : 'instant',
    });
  }

  public scroll(): void {
    this._scroll();
  }

  public static getInstance(element: HTMLElement): KTScrollto {
    return KTData.get(element, 'scrollto') as KTScrollto;
  }

  public static getOrCreateInstance(element: HTMLElement, config?: KTScrolltoConfigInterface): KTScrollto {
    return this.getInstance(element) || new KTScrollto(element, config);
  }

  public static createInstances(): void {
    const elements = document.querySelectorAll('[data-scrollto]:not([data-scrollto="false"]');
    
    elements.forEach((element) => {
      new KTScrollto(element as HTMLElement);
    });
  }

  public static init(): void {
    KTScrollto.createInstances();
  }
};
