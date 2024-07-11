/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import KTData from '../../helpers/data';
import KTDom from '../../helpers/dom';
import KTUtils from '../../helpers/utils';
import KTComponent from '../component';
import { KTStickyInterface, KTStickyConfigInterface } from './types';

export class KTSticky extends KTComponent implements KTStickyInterface {
  protected override _name: string = 'sticky';
  protected override _defaultConfig: KTStickyConfigInterface = {
    name: '',
    class: '',
    top: '',
    left: '',
    right: '',
    width: '',
    zindex: '',
    offset: 0,
    reverse: false,
    release: '',
    activate: ''
  };
  protected override _config: KTStickyConfigInterface = this._defaultConfig;
  protected _attributeRoot: string;
  protected _eventTriggerState: boolean;
  protected _lastScrollTop: number;
  protected _releaseElement: HTMLElement;
  protected _wrapperElement: HTMLElement;

  constructor(element: HTMLElement, config: KTStickyConfigInterface | null = null) {
    super();

    if (KTData.has(element as HTMLElement, this._name)) return;

    this._init(element);
    this._buildConfig(config);

    this._releaseElement = KTDom.getElement(this._getOption('release') as string);
    this._wrapperElement = this._element.closest('[data-sticky-wrapper]');
    this._attributeRoot = `data-sticky-${this._getOption('name')}`;
    this._eventTriggerState = true;
    this._lastScrollTop = 0;

    this._handlers();
    this._process();
    this._update();
  }

  protected _handlers(): void {
    window.addEventListener('resize', () => {
			let timer;

			KTUtils.throttle(
				timer,
				() => {
					this._update();
				},
				200
			);
		});

    window.addEventListener('scroll', () => {
      this._process();
    });
  }

  protected _process(): void {
    const reverse = this._getOption('reverse');
    const activateOffset = this._getActivateOffset();
    const releaseOffset = this._getReleaseOffset();

    if (activateOffset < 0) {
      this._disable();
      return;
    }

    const st = KTDom.getScrollTop();
    const proceed = (!this._releaseElement || releaseOffset > st);

    // Release on reverse scroll mode
    if (reverse === true) {
      // Forward scroll mode
      if (st > activateOffset && proceed) {
        if (document.body.hasAttribute(this._attributeRoot) === false) {
          if (this._enable() === false) {
            return;
          }

          document.body.setAttribute(this._attributeRoot, 'on');
        }

        if (this._eventTriggerState === true) {
          const payload = { active: true };
          this._fireEvent('change', payload);
          this._dispatchEvent('change', payload);
          this._eventTriggerState = false;
        }
        // Back scroll mode
      } else {
        if (document.body.hasAttribute(this._attributeRoot) === true) {
          this._disable();
          document.body.removeAttribute(this._attributeRoot);
        }

        if (this._eventTriggerState === false) {
          const payload = { active: false };
          this._fireEvent('change', payload);
          this._dispatchEvent('change', payload);
          this._eventTriggerState = true;
        }
      }

      this._lastScrollTop = st;
      // Classic scroll mode
    } else {
      // Forward scroll mode
      if (st > activateOffset && proceed) {
        if (document.body.hasAttribute(this._attributeRoot) === false) {
          if (this._enable() === false) {
            return;
          }

          document.body.setAttribute(this._attributeRoot, 'on');
        }

        if (this._eventTriggerState === true) {
          const payload = { active: true };
          this._fireEvent('change', payload);
          this._dispatchEvent('change', payload);
          this._eventTriggerState = false;
        }
        // Back scroll mode
      } else { // back scroll mode
        if (document.body.hasAttribute(this._attributeRoot) === true) {
          this._disable();
          document.body.removeAttribute(this._attributeRoot);
        }

        if (this._eventTriggerState === false) {
          const payload = { active: false };
          this._fireEvent('change', payload);
          this._dispatchEvent('change', payload);
          this._eventTriggerState = true;
        }
      }
    }
  }

  protected _getActivateOffset(): number {
    let offset = parseInt(this._getOption('offset') as string);
    const activateElement = KTDom.getElement(this._getOption('activate') as string);

    if (activateElement) {
      offset = Math.abs(offset - activateElement.offsetTop);
    }

    return offset;
  }

  protected _getReleaseOffset(): number {
    let offset = parseInt(this._getOption('offset') as string);

    if (this._releaseElement && this._releaseElement.offsetTop) {
      offset = Math.abs(offset - this._releaseElement.offsetTop);
    }

    return offset;
  }

  protected _enable(): boolean {
    if (!this._element) return false;

    let width = this._getOption('width') as string;
    const top = this._getOption('top') as string;
    const left = this._getOption('left') as string;
    const right = this._getOption('right') as string;
    const height = this._calculateHeight();
    const zindex = this._getOption('zindex') as string;
    const classList = this._getOption('class') as string;

    if (height + parseInt(top) > KTDom.getViewPort().height) {
      return false;
    }

    if (width) {
      const targetElement = document.querySelector(width) as HTMLElement;
      if (targetElement) {
        width = KTDom.getCssProp(targetElement, 'width');
      } else if (width == 'auto') {
        width = KTDom.getCssProp(this._element, 'width');
      }

      this._element.style.width = `${Math.round(parseFloat(width))}px`;
    }

    if (top) {
      this._element.style.top = `${top}px`;
    }

    if (left) {
      if (left === 'auto') {
        const offsetLeft = KTDom.offset(this._element).left;
        if (offsetLeft >= 0) {
          this._element.style.left = `${offsetLeft}px`;
        }
      } else {
        this._element.style.left = `${left}px`;
      }
    }

    if (right) {
      if (right === 'auto') {
        const offseRight = KTDom.offset(this._element).right;
        if (offseRight >= 0) {
          this._element.style.right = `${offseRight}px`;
        }
      } else {
        this._element.style.right = `${right}px`;
      }
    }

    if (zindex) {
      this._element.style.zIndex = zindex;
      this._element.style.position = 'fixed';
    }

    if (classList) {
      KTDom.addClass(this._element, classList);
    }

    if (this._wrapperElement) {
      this._wrapperElement.style.height = `${height}px`;
    }

    this._element.classList.add('active');

    return true;
  }

  protected _disable(): void {
    if (!this._element) return;

    this._element.style.top = '';
    this._element.style.width = '';
    this._element.style.left = '';
    this._element.style.right = '';
    this._element.style.zIndex = '';
    this._element.style.position = '';

    const classList = this._getOption('class') as string;

    if (this._wrapperElement) {
      this._wrapperElement.style.height = '';
    }

    if (classList) {
      KTDom.removeClass(this._element, classList);
    }

    this._element.classList.remove('active');
  }

  protected _update(): void {
    if (this._isActive()) {
      this._disable();
      this._enable();
    } else {
      this._disable();
    }
  }

  protected _calculateHeight(): number {
    if (!this._element) return 0;

    let height = parseFloat(KTDom.getCssProp(this._element, 'height'));
    height += parseFloat(KTDom.getCssProp(this._element, 'margin-top'));
    height += parseFloat(KTDom.getCssProp(this._element, 'margin-bottom'));

    if (KTDom.getCssProp(this._element, 'border-top')) {
      height = height + parseFloat(KTDom.getCssProp(this._element, 'border-top'));
    }

    if (KTDom.getCssProp(this._element, 'border-bottom')) {
      height = height + parseFloat(KTDom.getCssProp(this._element, 'border-bottom'));
    }

    return height;
  }

  protected _isActive(): boolean {
    return this._element.classList.contains('active');
  }

  public update(): void {
    this._update();
  }

  public isActive(): boolean {
    return this._isActive();
  }

  public static getInstance(element: HTMLElement): KTSticky {
    return KTData.get(element, 'sticky') as KTSticky;
  }

  public static getOrCreateInstance(element: HTMLElement, config?: KTStickyConfigInterface): KTSticky {
    return this.getInstance(element) || new KTSticky(element, config);
  }

  public static createInstances(): void {
    const elements = document.querySelectorAll('[data-sticky="true"]');

    elements.forEach((element) => {
      new KTSticky(element as HTMLElement);
    });
  }

  public static init(): void {
    KTSticky.createInstances();
  }
}
