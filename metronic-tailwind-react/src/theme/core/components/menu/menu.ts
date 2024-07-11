import { Instance as PopperInstance, createPopper, Placement, VirtualElement } from '@popperjs/core';
import KTDom from '../../helpers/dom';
import KTUtils from '../../helpers/utils';
import KTData from '../../helpers/data';
import KTEventHandler from '../../helpers/event-handler';
import KTComponent from '../component';
import { KTMenuConfigInterface, KTMenuInterface } from './types';
import { KTMenuItemToggleType, KTMenuItemTriggerType } from './types';
import { KTOptionType } from '../../types';
import { KT_ACCESSIBILITY_KEYS } from '../constants';
import { KTDropdown } from '../dropdown';
declare global {
	interface Window {
		KT_MENU_INITIALIZED: boolean;
	}
}

window.KT_MENU_INITIALIZED = false;

export class KTMenu extends KTComponent implements KTMenuInterface {
	protected override _name: string = 'menu';
	protected override _defaultConfig: KTMenuConfigInterface = {
		dropdownZindex: '105',
		dropdownHoverTimeout: 200,
		accordionExpandAll: false
	};
	protected override _config: KTMenuConfigInterface = this._defaultConfig;
	protected _disabled: boolean = false;

	constructor(element: HTMLElement, config?: KTMenuConfigInterface) {
		super();

		if (KTData.has(element as HTMLElement, this._name)) return;

		this._init(element);
		this._buildConfig(config);
		this._update();
	}

	protected _click(element: HTMLElement, event: Event): void {
		if (element.hasAttribute('href') && element.getAttribute('href') !== '#') {
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		if (this._disabled === true) {
			return;
		}

		const itemElement = this._getItemElement(element);
		if (!itemElement) return;

		if (this._getItemOption(itemElement, 'trigger') !== 'click') {
			return;
		}

		if (this._getItemOption(itemElement, 'toggle') === false) {
			this._show(itemElement);
		} else {
			this._toggle(itemElement);
		}
	}

	protected _link(element: HTMLElement, event: Event): void {
		if (this._disabled === true) {
			return;
		}

		let payload: {
			cancel?: boolean;
			element: HTMLElement;
			event: Event;
		} = {
			cancel: false,
			element,
			event
		};
		this._fireEvent('link.click', payload);
		this._dispatchEvent('link.click', payload);
		if (payload.cancel === true) {
			return;
		}

		const itemElement = this._getItemElement(element);
		if (this._isItemDropdownPermanent(itemElement) === false) {
			KTMenu.hide();
		}

		payload = {
			element,
			event
		};
		this._fireEvent('link.clicked', payload);
		this._dispatchEvent('link.clicked', payload);
	}

	protected _dismiss(element: HTMLElement): void {
		const itemElement = this._getItemElement(element);
		if (!itemElement) return;
		const itemElements = this._getItemChildElements(itemElement);

		if (
			itemElement !== null &&
			this._getItemToggleMode(itemElement) === 'dropdown'
		) {
			// hide items dropdown
			this._hide(itemElement);

			// Hide all child elements as well
			itemElements.forEach((each) => {
				if (this._getItemToggleMode(each as HTMLElement) === 'dropdown') {
					this._hide(each);
				}
			});
		}
	}

	protected _mouseover(element: HTMLElement): void {
		const itemElement = this._getItemElement(element);
		if (!itemElement) return;

		if (this._disabled === true) {
			return;
		}

		if (itemElement === null) {
			return;
		}

		if (this._getItemOption(itemElement, 'trigger') !== 'hover') {
			return;
		}

		if (KTData.get(itemElement, 'hover') === '1') {
			clearTimeout(KTData.get(itemElement, 'timeout') as number);
			KTData.remove(itemElement, 'hover');
			KTData.remove(itemElement, 'timeout');
		}

		this._show(itemElement);
	}

	protected _mouseout(element: HTMLElement): void {
		const itemElement = this._getItemElement(element);
		if (!itemElement) return;

		if (this._disabled === true) {
			return;
		}

		if (this._getItemOption(itemElement, 'trigger') !== 'hover') {
			return;
		}

		const timeout = setTimeout(() => {
			if (KTData.get(itemElement, 'hover') === '1') {
				this._hide(itemElement);
			}
		}, parseInt(this._getOption('dropdownHoverTimeout') as string));

		KTData.set(itemElement, 'hover', '1');
		KTData.set(itemElement, 'timeout', timeout);
	}

	protected _toggle(itemElement: HTMLElement): void {
		if (this._isItemSubShown(itemElement) === true) {
			this._hide(itemElement);
		} else {
			this._show(itemElement);
		}
	}

	protected _show(itemElement: HTMLElement): void {
		if (this._isItemSubShown(itemElement) === true) {
			return;
		}

		if (this._getItemToggleMode(itemElement) === 'dropdown') {
			this._showDropdown(itemElement);
		} else if (this._getItemToggleMode(itemElement) === 'accordion') {
			this._showAccordion(itemElement);
		}

		// Remember last submenu type
		KTData.set(itemElement, 'toggle', this._getItemToggleMode(itemElement));
	}

	protected _hide(itemElement: HTMLElement): void {
		if (this._isItemSubShown(itemElement) === false) {
			return;
		}

		if (this._getItemToggleMode(itemElement) === 'dropdown') {
			this._hideDropdown(itemElement);
		} else if (this._getItemToggleMode(itemElement) === 'accordion') {
			this._hideAccordion(itemElement);
		}
	}

	protected _reset(itemElement: HTMLElement): void {
		if (this._hasItemSub(itemElement) === false) {
			return;
		}

		const subElement = this._getItemSubElement(itemElement);

		// Reset sub state if sub type is changed during the window resize
		if (
			KTData.has(itemElement, 'toggle') &&
			KTData.get(itemElement, 'toggle') !== this._getItemToggleMode(itemElement)
		) {
			itemElement.classList.remove('show');
			subElement?.classList.remove('show');
		}
	}

	protected _update(): void {
		if (!this._element) return;
		const itemElements = this._element.querySelectorAll('.menu-item[data-menu-item-trigger]');

		itemElements.forEach((itemElement) => {
			this._updateItemSubType(itemElement as HTMLElement);
			this._reset(itemElement as HTMLElement);
		});
	}

	protected _updateItemSubType(itemElement: HTMLElement): void {
		const subElement = this._getItemSubElement(itemElement as HTMLElement);

		if (subElement) {
			if (this._getItemToggleMode(itemElement as HTMLElement) === 'dropdown') {
				itemElement.classList.remove('menu-item-accordion');
				itemElement.classList.add('menu-item-dropdown');

				subElement.classList.remove('menu-accordion');
				subElement.classList.add('menu-dropdown');
			} else {
				itemElement.classList.remove('menu-item-dropdown');
				itemElement.classList.add('menu-item-accordion');

				subElement.classList.remove('menu-dropdown');
				subElement.classList.add('menu-accordion');
			}
		}
	}

	protected _isItemSubShown(itemElement: HTMLElement): boolean {
		const subElement = this._getItemSubElement(itemElement);

		if (subElement !== null) {
			if (this._getItemToggleMode(itemElement) === 'dropdown') {
				if (
					subElement.classList.contains('show') === true &&
					subElement.hasAttribute('data-popper-placement') === true
				) {
					return true;
				} else {
					return false;
				}
			} else {
				return itemElement.classList.contains('show');
			}
		} else {
			return false;
		}
	}

	protected _isItemDropdownPermanent(itemElement: HTMLElement): boolean {
		return this._getItemOption(itemElement, 'permanent') as boolean;
	}

	protected _isItemParentShown(itemElement: HTMLElement): boolean {
		const parents = KTDom.parents(itemElement, '.menu-item.show');

		return parents && parents.length > 0 ? true : false;
	}

	protected _isItemSubElement(itemElement: HTMLElement): boolean {
		return itemElement.classList.contains('menu-dropdown') || itemElement.classList.contains('menu-accordion');
	}

	protected _hasItemSub(itemElement: HTMLElement): boolean {
		return (
			itemElement.classList.contains('menu-item') &&
			itemElement.hasAttribute('data-menu-item-trigger')
		);
	}

	protected _getItemLinkElement(itemElement: HTMLElement): HTMLElement {
		return KTDom.child(itemElement, '.menu-link, .menu-toggle');
	}

	protected _getItemSubElement(itemElement: HTMLElement): HTMLElement {
		if (itemElement.classList.contains('menu-dropdown') === true || itemElement.classList.contains('menu-accordion') === true) {
			return itemElement;
		} else if (KTData.has(itemElement, 'sub')) {
			return KTData.get(itemElement, 'sub') as HTMLElement;
		} else {
			return KTDom.child(itemElement, '.menu-dropdown, .menu-accordion');
		}
	}

	protected _getItemToggleMode(itemElement: HTMLElement): KTMenuItemToggleType {
		const itemEl = this._getItemElement(itemElement);

		if (this._getItemOption(itemEl, 'toggle') === 'dropdown') {
			return 'dropdown';
		} else {
			return 'accordion';
		}
	}

	protected _getItemElement(element: HTMLElement): HTMLElement {
		if (element.classList.contains('menu-item') && element.hasAttribute('data-menu-item-toggle')) {
			return element;
		}

		// Element has item DOM reference in it's data storage
		if (KTData.has(element, 'item')) {
			return KTData.get(element, 'item') as HTMLElement;
		}

		// Item is parent of element
		const itemElement = element.closest('.menu-item[data-menu-item-toggle]');
		if (itemElement) {
			return itemElement as HTMLElement;
		}

		// Element's parent has item DOM reference in it's data storage
		const subElement = element.closest('.menu-dropdown, .menu-accordion') as HTMLElement;
		if (subElement) {
			if (KTData.has(subElement, 'item') === true) {
				return KTData.get(subElement, 'item') as HTMLElement;
			}
		}

		return null;
	}

	protected _getItemParentElement(itemElement: HTMLElement): HTMLElement {
		const subElement: HTMLElement = itemElement.closest('.menu-dropdown, .menu-accordion');
		let parentItem: HTMLElement;

		if (subElement && KTData.has(subElement, 'item')) {
			return KTData.get(subElement, 'item') as HTMLElement;
		}

		if (
			subElement &&
			(parentItem = subElement.closest('.menu-item[data-menu-item-trigger]'))
		) {
			return parentItem;
		}

		return null;
	}

	protected _getItemParentElements(itemElement: HTMLElement): Array<HTMLElement> {
		const parentElements: Array<HTMLElement> = [];
		let parentElement: HTMLElement;
		let i = 0;

		do {
			parentElement = this._getItemParentElement(itemElement);

			if (parentElement) {
				parentElements.push(parentElement);
				itemElement = parentElement;
			}

			i++;
		} while (parent !== null && i < 20);

		return parentElements;
	}

	protected _getItemChildElement(itemElement: HTMLElement): HTMLElement {
		let selector: HTMLElement = itemElement;
		let element: HTMLElement;

		if (KTData.has(itemElement, 'sub')) {
			selector = KTData.get(itemElement, 'sub') as HTMLElement;
		}

		if (selector !== null) {
			//element = selector.querySelector('.show.menu-item[data-menu-trigger]');
			element = selector.querySelector('.menu-item[data-menu-item-trigger]');

			if (element) {
				return element;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

	protected _getItemChildElements(itemElement: HTMLElement): Array<HTMLElement> {
		const children: Array<HTMLElement> = [];
		let child: HTMLElement;
		let i = 0;
		let buffer = itemElement;
		do {
			child = this._getItemChildElement(buffer);

			if (child) {
				children.push(child);
				buffer = child as HTMLElement;
			}

			i++;
		} while (child !== null && i < 20);

		return children;
	}

	protected _showDropdown(itemElement: HTMLElement): void {
		const payload = { cancel: false };
		this._fireEvent('dropdown.show', payload);
		this._dispatchEvent('dropdown.show', payload);
		if (payload.cancel === true) {
			return;
		}

		// Hide all currently shown dropdowns except current one
		KTMenu.hide(itemElement);
		KTDropdown.hide(itemElement);

		const subElement: HTMLElement = this._getItemSubElement(itemElement);
		if (!subElement) return;

		const width = this._getItemOption(itemElement, 'width') as string;
		const height = this._getItemOption(itemElement, 'height') as string;

		// Set z=index
		let zindex: number = parseInt(this._getOption('dropdownZindex') as string);
		if (parseInt(KTDom.getCssProp(subElement, 'z-index')) > zindex) {
      zindex = parseInt(KTDom.getCssProp(subElement, 'z-index'));
    }
		if (KTDom.getHighestZindex(itemElement) > zindex) {
			zindex = KTDom.getHighestZindex(itemElement) + 1;
		}
		subElement.style.zIndex = String(zindex);
		// end

		if (width) {
			subElement.style.width = width;
		}

		if (height) {
			subElement.style.height = height;
		}

		subElement.style.display = '';
		subElement.style.overflow = '';

		// Init popper(new)
		this._initDropdownPopper(itemElement, subElement);

		itemElement.classList.add('show');
		itemElement.classList.add('menu-item-dropdown');
		subElement.classList.add('show');

		// Append the sub the the root of the menu
		if (this._getItemOption(itemElement, 'overflow') === true) {
			document.body.appendChild(subElement);
			subElement.setAttribute('data-menu-sub-overflow', 'true');
			KTData.set(itemElement, 'sub', subElement);
			KTData.set(subElement, 'item', itemElement);
			KTData.set(subElement, 'menu', this);
		} else {
			KTData.set(subElement, 'item', itemElement);
		}

		// Handle dropdown shown event
		this._fireEvent('dropdown.shown');
		this._dispatchEvent('dropdown.shown');
	}

	protected _hideDropdown(itemElement: HTMLElement): void {
		const payload = { cancel: false };
		this._fireEvent('dropdown.hide', payload);
		this._dispatchEvent('dropdown.hide', payload);
		if (payload.cancel === true) {
			return;
		}

		const subElement = this._getItemSubElement(itemElement);
		if (!subElement) return;

		subElement.style.zIndex = '';
		subElement.style.width = '';
		subElement.style.height = '';

		itemElement.classList.remove('show');
		itemElement.classList.remove('menu-item-dropdown');
		subElement.classList.remove('show');

		// Append the sub back to it's parent
		if (this._getItemOption(itemElement, 'overflow') === true) {
			subElement.removeAttribute('data-menu-sub-overflow');
			if (itemElement.classList.contains('menu-item')) {
				itemElement.appendChild(subElement);
			} else {
				if (!this._element) return;
				KTDom.insertAfter(this._element, itemElement);
			}

			KTData.remove(itemElement, 'sub');
			KTData.remove(subElement, 'item');
			KTData.remove(subElement, 'menu');
		}

		// Destroy popper(new)
		this._destroyDropdownPopper(itemElement);

		// Handle dropdown hidden event
		this._fireEvent('dropdown.hidden');
		this._dispatchEvent('dropdown.hidden');
	}

	protected _initDropdownPopper(itemElement: HTMLElement, subElement: HTMLElement): void {
		// Setup popper instance
		let reference: HTMLElement;
		const attach: string = this._getItemOption(itemElement, 'attach') as string;

		if (attach) {
			if (attach === 'parent') {
				reference = itemElement.parentNode as HTMLElement;
			} else {
				reference = document.querySelector(attach) as HTMLElement;
			}
		} else {
			reference = itemElement;
		}

		if (reference) {
			const popper = createPopper(reference as Element | VirtualElement, subElement, this._getDropdownPopperConfig(itemElement));
			KTData.set(itemElement, 'popper', popper);
		}
	}

	protected _destroyDropdownPopper(itemElement: HTMLElement): void {
		if (KTData.has(itemElement, 'popper')) {
			(KTData.get(itemElement, 'popper') as PopperInstance).destroy();
			KTData.remove(itemElement, 'popper');
		}
	}

	protected _getDropdownPopperConfig(itemElement: HTMLElement): object {
		// Placement
		let placement = this._getItemOption(itemElement, 'placement') as Placement;
		if (!placement) {
			placement = 'right';
		}

		// Offset
		const offsetValue = this._getItemOption(itemElement, 'offset') as string;
		const offset = offsetValue ? offsetValue.toString().split(',').map(value => parseInt(value.trim(), 10)) : [0, 0];

		// Strategy
		const strategy = this._getItemOption(itemElement, 'overflow') === true ? 'absolute' : 'fixed';
		const altAxis = this._getItemOption(itemElement, 'flip') !== false ? true : false;
		const popperConfig = {
			placement: placement,
			strategy: strategy,
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: offset
					}
				},
				{
					name: 'preventOverflow',
					options: {
						altAxis: altAxis
					}
				},
				{
					name: 'flip',
					options: {
						flipVariations: false
					}
				}
			]
		};

		return popperConfig;
	}

	protected _showAccordion(itemElement: HTMLElement): void {
		const payload = { cancel: false };
		this._fireEvent('accordion.show', payload);
		this._dispatchEvent('accordion.show', payload);
		if (payload.cancel === true) {
			return;
		}

		const subElement = this._getItemSubElement(itemElement);
		if (!subElement) return;
		let expandAll = this._getOption('accordionExpandAll') as boolean;

		if (this._getItemOption(itemElement, 'expandAll') === true) {
			expandAll = true;
		} else if (this._getItemOption(itemElement, 'expandAll') === false) {
			expandAll = false;
		} else if (this._element && this._getItemOption(this._element, 'expandAll') === true) {
			expandAll = true;
		}

		if (expandAll === false) {
			this._hideAccordions(itemElement);
		}

		if (KTData.has(itemElement, 'popper') === true) {
			this._hideDropdown(itemElement);
		}

		itemElement.classList.add('transitioning');

		subElement.style.height = '0px';
		KTDom.reflow(subElement);
		subElement.style.display = 'flex';
		subElement.style.overflow = 'hidden';
		subElement.style.height = `${subElement.scrollHeight}px`;
		itemElement.classList.add('show');

		KTDom.transitionEnd(subElement, () => {
			itemElement.classList.remove('transitioning');
			subElement.classList.add('show');
			subElement.style.height = '';
			subElement.style.display = '';
			subElement.style.overflow = '';

			// Handle accordion hidden event
			this._fireEvent('accordion.shown', payload);
			this._dispatchEvent('accordion.shown', payload);
		});
	}

	protected _hideAccordion(itemElement: HTMLElement): void {
		const payload = { cancel: false };
		this._fireEvent('accordion.hide', payload);
		this._dispatchEvent('accordion.hide', payload);
		if (payload.cancel === true) {
			return;
		}

		const subElement = this._getItemSubElement(itemElement);
		if (!subElement) return;

		itemElement.classList.add('transitioning');
		itemElement.classList.remove('show');
		subElement.style.height = `${subElement.scrollHeight}px`;
		KTDom.reflow(subElement);
		subElement.style.height = '0px';
		subElement.style.overflow = 'hidden';

		KTDom.transitionEnd(subElement, () => {
			subElement.style.overflow = '';
			itemElement.classList.remove('transitioning');
			subElement.classList.remove('show');

			// Handle accordion hidden event
			this._fireEvent('accordion.hidden');
			this._dispatchEvent('accordion.hidden');
		});
	}

	protected _setActiveLink(linkElement: HTMLElement): void {
		const itemElement = this._getItemElement(linkElement);
		if (!itemElement) return;

		if (!this._element) return;
		const parentItems = this._getItemParentElements(itemElement);
		const activeLinks = this._element.querySelectorAll('.menu-link.active');
		const activeParentItems = this._element.querySelectorAll('.menu-item.here, .menu-item.show');

		if (this._getItemToggleMode(itemElement) === 'accordion') {
			this._showAccordion(itemElement);
		} else {
			itemElement.classList.add('here');
		}

		parentItems?.forEach((parentItem) => {
			if (this._getItemToggleMode(parentItem) === 'accordion') {
				this._showAccordion(parentItem);
			} else {
				parentItem.classList.add('here');
			}
		});

		activeLinks?.forEach((activeLink) => {
			activeLink.classList.remove('active');
		});

		activeParentItems?.forEach((activeParentItem) => {
			if (activeParentItem.contains(itemElement) === false) {
				activeParentItem.classList.remove('here');
				activeParentItem.classList.remove('show');
			}
		});

		linkElement.classList.add('active');
	}

	protected _getLinkByAttribute(value: string, name: string = 'href'): HTMLElement {
		if (!this._element) return null;
		const linkElement = this._element.querySelector(`'.menu-link[${name}="${value}"]`) as HTMLElement;

		return linkElement && null;
	}

	protected _hideAccordions(itemElement: HTMLElement): void {
		if (!this._element) return;
		const itemsToHide = this._element.querySelectorAll('.show[data-menu-item-trigger]');

		itemsToHide.forEach((itemToHide) => {
			if (
				this._getItemToggleMode(itemToHide as HTMLElement) === 'accordion' &&
				itemToHide as HTMLElement !== itemElement &&
				itemElement?.contains(itemToHide as HTMLElement) === false &&
				itemToHide.contains(itemElement) === false
			) {
				this._hideAccordion(itemToHide as HTMLElement);
			}
		});
	}

	protected _getItemOption(element: HTMLElement, name: string): KTOptionType {
		let attr: string | null;
		let value = null;

		if (element && element.hasAttribute(`data-menu-item-${name}`)) {
			attr = element.getAttribute(`data-menu-item-${name}`);
			if (!attr) return null;

			value = this._getResponsiveOption(attr);
		}

		return value;
	}

	// General Methods
	public getItemTriggerMode(itemElement: HTMLElement): KTMenuItemTriggerType {
		return this._getItemOption(itemElement, 'trigger') as KTMenuItemTriggerType;
	}

	public getItemToggleMode(element: HTMLElement): KTMenuItemToggleType {
		return this._getItemToggleMode(element) as KTMenuItemToggleType;
	}

	public click(element: HTMLElement, event: Event): void {
		this._click(element, event);
	}

	public link(element: HTMLElement, event: Event): void {
		this._link(element, event);
	}

	public dismiss(element: HTMLElement): void {
		this._dismiss(element);
	}

	public mouseover(element: HTMLElement): void {
		this._mouseover(element);
	}

	public mouseout(element: HTMLElement): void {
		this._mouseout(element);
	}

	public show(itemElement: HTMLElement): void {
		return this._show(itemElement);
	}

	public hide(itemElement: HTMLElement): void {
		this._hide(itemElement);
	}

	public toggle(itemElement: HTMLElement): void {
		this._toggle(itemElement);
	}

	public reset(itemElement: HTMLElement): void {
		this._reset(itemElement);
	}

	public update(): void {
		this._update();
	}

	public setActiveLink(link: HTMLElement): void {
		this._setActiveLink(link);
	}

	public getLinkByAttribute(value: string, name: string = 'href'): HTMLElement {
		return this._getLinkByAttribute(value, name);
	}

	public getItemLinkElement(itemElement: HTMLElement): HTMLElement {
		return this._getItemLinkElement(itemElement);
	}

	public getItemElement(element: HTMLElement): HTMLElement {
		return this._getItemElement(element);
	}

	public getItemSubElement(itemElement: HTMLElement): HTMLElement {
		return this._getItemSubElement(itemElement);
	}

	public getItemParentElements(itemElement: HTMLElement): Array<HTMLElement> | null {
		return this._getItemParentElements(itemElement);
	}

	public isItemSubShown(itemElement: HTMLElement): boolean {
		return this._isItemSubShown(itemElement);
	}

	public isItemParentShown(itemElement: HTMLElement): boolean {
		return this._isItemParentShown(itemElement);
	}

	public isItemDropdownPermanent(itemElement: HTMLElement): boolean {
		return this._isItemDropdownPermanent(itemElement);
	}

	public disable(): void {
		this._disabled = true;
	}

	public enable(): void {
		this._disabled = false;
	}

	public hideAccordions(itemElement?: HTMLElement): void {
		this._hideAccordions(itemElement);
	}

	// Statics methods
	public static getInstance(element: HTMLElement): KTMenu {
		if (!element) {
			return null;
		}

		// Element has menu DOM reference in it's DATA storage
		if (KTData.has(element, 'menu')) {
			return KTData.get(element, 'menu') as KTMenu;
		}

		// Element has .menu parent
		const menuElement = element.closest('.menu') as HTMLElement;
		if (menuElement && KTData.has(menuElement, 'menu')) {
			return KTData.get(menuElement, 'menu') as KTMenu;
		}

		const subElement = element.closest('[data-menu-sub-overflow="true"]') as HTMLElement;
		if (subElement && KTData.has(subElement, 'menu')) {
			return KTData.get(subElement, 'menu') as KTMenu;
		}

		// Element has a parent with DOM reference to .menu in it's DATA storage
		if (element.classList.contains('menu-link') || element.classList.contains('menu-toggle')) {
			const subElement = (element.closest('.menu-dropdown') || element.closest('.menu-accordion')) as HTMLElement;

			if (KTData.has(subElement, 'menu')) {
				return KTData.get(subElement, 'menu') as KTMenu;
			}
		}

		return null;
	}

	public static getOrCreateInstance(element: HTMLElement, config?: KTMenuConfigInterface): KTMenu {
		return this.getInstance(element) || new KTMenu(element, config);
	}

	public static hide(skipElement?: HTMLElement): void {
		const itemElements = document.querySelectorAll(
			'.show.menu-item-dropdown[data-menu-item-trigger]'
		);

		itemElements.forEach((itemElement) => {
			const menu = KTMenu.getInstance(itemElement as HTMLElement);

			if (menu && menu.getItemToggleMode(itemElement as HTMLElement) === 'dropdown') {
				if (skipElement) {
					if (itemElement &&
						menu.getItemSubElement(itemElement as HTMLElement)?.contains(skipElement) === false &&
						itemElement.contains(skipElement) === false &&
						itemElement !== skipElement
					) {
						menu.hide(itemElement as HTMLElement);
					}
				} else {
					menu.hide(itemElement as HTMLElement);
				}
			}
		});
	}

	public static updateDropdowns(): void {
		const itemElements = document.querySelectorAll(
			'.show.menu-item-dropdown[data-menu-item-trigger]'
		);

		itemElements.forEach((itemElement) => {
			if (KTData.has(itemElement as HTMLElement, 'popper')) {
				(KTData.get(itemElement as HTMLElement, 'popper') as PopperInstance).forceUpdate();
			}
		});
	}

	public static updateByLinkAttribute(value: string, name: string = 'href'): void {
		const elements = document.querySelectorAll('[data-menu]');

		elements.forEach((element) => {
			const menu = KTMenu.getInstance(element as HTMLElement);

			if (menu) {
				const link = menu.getLinkByAttribute(value, name);
				if (link) {
					menu.setActiveLink(link);
				}
			}
		});
	}

	public static handleClickAway() {
		document.addEventListener('click', function (event: Event) {
			const itemElements = document.querySelectorAll(
				'.show.menu-item-dropdown[data-menu-item-trigger]:not([data-menu-item-static="true"])'
			);

			itemElements.forEach((itemElement) => {
				const menu = KTMenu.getInstance(itemElement as HTMLElement);

				if (
					menu &&
					menu.getItemToggleMode(itemElement as HTMLElement) === 'dropdown'
				) {
					const subElement = menu.getItemSubElement(itemElement as HTMLElement);

					if (
						itemElement === event.target ||
						itemElement.contains(event.target as HTMLElement)
					) {
						return;
					}

					if (subElement && (subElement === event.target || subElement.contains(event.target as HTMLElement))) {
						return;
					}

					menu.hide(itemElement as HTMLElement);
				}
			});
		});
	}

	public static findFocused() {
		const linkElement = document.querySelector('.menu-link:focus, .menu-toggle:focus') as HTMLElement;

		if (linkElement && KTDom.isVisible(linkElement)) {
			return linkElement;
		} else {
			return null;
		}
	}

	public static getFocusLink(linkElement: HTMLElement, direction: 'next' | 'previouse', preFocus = false): HTMLElement {
		if (!linkElement) return null;

		const itemElement = linkElement.parentElement as HTMLElement;
		if (!itemElement || !itemElement.classList.contains('menu-item')) return null;

		if (direction === 'next') {
			const nextElement = linkElement.nextElementSibling as HTMLElement;

			if (nextElement && (nextElement.matches('.menu-accordion' + (!preFocus ? '.show' : '')) || nextElement.matches('.menu-dropdown' + (!preFocus ? '.show' : '')))) {
				const itemElement2 = KTDom.child(nextElement, '.menu-item') as HTMLElement;
				return KTDom.child(itemElement2, '.menu-link') as HTMLElement;
			} else {
				const nextElement2 = itemElement.nextElementSibling as HTMLElement;

				if (nextElement2 && nextElement2.classList.contains('menu-item')) {
					const nextLink = KTDom.child(nextElement2, '.menu-link') as HTMLElement;
					if (nextLink) {
						return nextLink;
					}
				}
			}
		} else {
			const prevElement = itemElement.previousElementSibling as HTMLElement;
			if (prevElement) {
				if (prevElement && prevElement.classList.contains('menu-item')) {
					const nextLink = KTDom.child(prevElement, '.menu-link') as HTMLElement;
					if (nextLink) {
						return nextLink;
					}
				}
			} else {
				const parentElement = itemElement.parentElement as HTMLElement;
				if (parentElement && (parentElement.matches('.menu-accordion' + (!preFocus ? '.show' : '')) || parentElement.matches('.menu-dropdown' + (!preFocus ? '.show' : '')))) {
					const prevElement2 = parentElement.previousElementSibling as HTMLElement;
					if (prevElement2.classList.contains('menu-link')) {
						return prevElement2;
					}
				}
			}
		}

		return null;
	}

	public static handleKeyboard() {
		document.addEventListener('keydown', (event: KeyboardEvent) => {
			if (KT_ACCESSIBILITY_KEYS.includes(event.key)  && !(event.ctrlKey || event.altKey || event.shiftKey)) {
				const currentFocused = this.findFocused() as HTMLElement;
				if (!currentFocused) return;

				if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
					const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 'next' : 'previouse';
					const newFocusLink = this.getFocusLink(currentFocused, direction);
					event.preventDefault();

					if (newFocusLink) {
						newFocusLink.focus();
						newFocusLink.classList.add('focus');
					}
				}

				if (event.key === 'Enter') {
					const menu = this.getInstance(currentFocused);
					const itemElement = menu.getItemElement(currentFocused);
					const subShown = menu.isItemSubShown(itemElement);

					if (!menu) return;

					if (menu.getItemToggleMode(itemElement) === 'accordion') {
						currentFocused.dispatchEvent(new MouseEvent('click', {
							bubbles: true
						}));
					}

					if (menu.getItemToggleMode(itemElement) === 'dropdown') {
						if (menu.getItemTriggerMode(itemElement) === 'click') {
							currentFocused.dispatchEvent(new MouseEvent('click', {
								bubbles: true
							}));
						} else {
							if (subShown) {
								currentFocused.dispatchEvent(new MouseEvent('mouseout', {
									bubbles: true
								}));
							} else {
								currentFocused.dispatchEvent(new MouseEvent('mouseover', {
									bubbles: true
								}));
							}
						}
					}

					if (subShown) {
						const subFocus = this.getFocusLink(currentFocused, 'next', true);
						if (subFocus) {
							subFocus.focus();
						}
					} else {
						currentFocused.focus();
					}

					event.preventDefault();
				}

				if (event.key === 'Escape') {
					const items = document.querySelectorAll('.show.menu-item-dropdown[data-menu-item-trigger]:not([data-menu-item-static="true"])');
					items.forEach((item) => {
						const menu = KTMenu.getInstance(item as HTMLElement);

						if (
							menu &&
							menu.getItemToggleMode(item as HTMLElement) === 'dropdown'
						) {
							menu.hide(item as HTMLElement);
						}
					});
				}
			}
    }, false);
	}

	public static handleMouseover() {
		KTEventHandler.on(
			document.body,
			'[data-menu-item-trigger], .menu-dropdown',
			'mouseover',
			(event: Event, target: HTMLElement) => {
				const menu = KTMenu.getInstance(target);

				if (menu !== null && menu.getItemToggleMode(target) === 'dropdown') {
					return menu.mouseover(target);
				}
			}
		);
	}

	public static handleMouseout() {
		KTEventHandler.on(
			document.body,
			'[data-menu-item-trigger], .menu-dropdown',
			'mouseout',
			(event: Event, target: HTMLElement) => {
				const menu = KTMenu.getInstance(target);

				if (menu !== null && menu.getItemToggleMode(target) === 'dropdown') {
					return menu.mouseout(target);
				}
			}
		);
	}

	public static handleClick() {
		KTEventHandler.on(
			document.body,
			'.menu-item[data-menu-item-trigger] > .menu-link, .menu-item[data-menu-item-trigger] > .menu-toggle, .menu-item[data-menu-item-trigger] > .menu-label .menu-toggle, [data-menu-item-trigger]:not(.menu-item):not([data-menu-item-trigger="auto"])',
			'click',
			(event: Event, target: HTMLElement) => {
				const menu = KTMenu.getInstance(target);

				if (menu !== null) {
					return menu.click(target, event);
				}
			}
		);

		KTEventHandler.on(
			document.body,
			'.menu-item:not([data-menu-item-trigger]) > .menu-link',
			'click',
			(event: Event, target: HTMLElement) => {
				const menu = KTMenu.getInstance(target);

				if (menu !== null) {
					return menu.link(target, event);
				}
			}
		);
	}

	public static handleDismiss() {
		KTEventHandler.on(
			document.body,
			'[data-menu-dismiss="true"]',
			'click',
			(event: Event, target: HTMLElement) => {
				const menu = KTMenu.getInstance(target);

				if (menu !== null) {
					return menu.dismiss(target);
				}
			}
		);
	}

	public static handleResize() {
		window.addEventListener('resize', () => {
			let timer;

			KTUtils.throttle(
				timer,
				() => {
					// Locate and update Offcanvas instances on window resize
					const elements = document.querySelectorAll('[data-menu]');

					elements.forEach((element) => {
						KTMenu.getInstance(element as HTMLElement)?.update();
					});
				},
				200
			);
		});
	}

	public static initHandlers(): void {
		this.handleClickAway();
		this.handleKeyboard();
		this.handleMouseover();
		this.handleMouseout();
		this.handleClick();
		this.handleDismiss();
		this.handleResize();
	}

	public static createInstances(): void {
		const elements = document.querySelectorAll('[data-menu="true"]');
		elements.forEach((element) => {
			new KTMenu(element as HTMLElement);
		});
	}

	public static init(): void {
		KTMenu.createInstances();

		if (window.KT_MENU_INITIALIZED === false) {
			KTMenu.initHandlers();
			window.KT_MENU_INITIALIZED = true;
		}
	}
}