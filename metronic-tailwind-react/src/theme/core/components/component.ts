/* eslint-disable guard-for-in */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

declare global {
  interface Window {
    KTGlobalComponentsConfig: object;
  }
}

import KTData from '../helpers/data';
import KTDom from '../helpers/dom';
import KTUtils from '../helpers/utils';
import KTGlobalComponentsConfig from './config';
import {KTBreakpointType, KTOptionType} from '../types';

export default class KTComponent {
  protected _name: string;
  protected _defaultConfig: object;
  protected _config: object;
  protected _events: Map<string, Map<string, CallableFunction>>;
  protected _uid: string | null = null;
  protected _element: HTMLElement | null = null;

  protected _init(element: HTMLElement | null) {
    element = KTDom.getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    this._events = new Map();
    this._uid = KTUtils.geUID(this._name);

    KTData.set(this._element, this._name, this);
  }

  protected _fireEvent(eventType: string, payload: object = null): void {
    this._events.get(eventType)?.forEach((callable) => {
      callable(payload);
    });
  }

  protected _dispatchEvent(eventType: string, payload: object = null): void {
    const event = new CustomEvent(eventType, {
      detail: { payload },
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    if (!this._element) return;
    this._element.dispatchEvent(event);
  }

  protected _getOption(name: string): KTOptionType {
    const value = this._config[name as keyof object];

    if (value && (typeof value) === 'string') {
      return this._getResponsiveOption(value);
    } else {
      return value;
    }
  }

  protected _getResponsiveOption(value: string): KTOptionType {
    let result = null;
    const width = KTDom.getViewPort().width;
    const parts = String(value).split('|');

    if (parts.length > 1) {
      parts.every((part) => {
        if (part.includes(':')) {
          const [breakpointKey, breakpointValue] = part.split(':');
          const breakpoint = KTUtils.getBreakpoint(breakpointKey as KTBreakpointType);

          if (breakpoint <= width) {
            result = breakpointValue;
            return false;
          }
        } else {
          result = part;
        }

        return true;
      });
    } else {
      result = value;
    }

    result = KTUtils.parseDataAttribute(result);

    return result;
  }

  protected _getGlobalConfig(): object {
    if (window.KTGlobalComponentsConfig && (window.KTGlobalComponentsConfig as object)[this._name as keyof object]) {
      return (window.KTGlobalComponentsConfig as object)[this._name as keyof object] as object;
    } else if (KTGlobalComponentsConfig && (KTGlobalComponentsConfig as object)[this._name as keyof object]) {
      return (KTGlobalComponentsConfig as object)[this._name as keyof object] as object;
    } else {
      return {};
    }
  }

  protected _buildConfig(config: object = {}): void {
    if (!this._element) return;

    this._config = {
      ...this._defaultConfig,
      ...this._getGlobalConfig(),
      ...KTDom.getDataAttributes(this._element, this._name),
      ...config,
    };
  }

  public dispose(): void {
    if (!this._element) return;
    KTData.remove(this._element, this._name);
  }

  public on(eventType: string, callback: CallableFunction): string {
    const eventId = KTUtils.geUID();

    if (!this._events.get(eventType)) {
      this._events.set(eventType, new Map());
    }

    this._events.get(eventType).set(eventId, callback);

    return eventId;
  }

  public off(eventType: string, eventId: string): void {
    this._events.get(eventType)?.delete(eventId);
  }

  public getOption(name: string): KTOptionType {
    return this._getOption(name as keyof object);
  }

  public getElement(): HTMLElement {
    if (!this._element) return null;
    return this._element;
  }
}
