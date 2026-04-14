import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetronicInitService {

  constructor() { }

  private initKtComponent(name: string): void {
    const component = (globalThis as Record<string, any>)[name];
    if (component && typeof component.init === 'function') {
      component.init();
    }
  }

  init() {
    this.initToggles();
    this.initScrollables();
    this.initDrawers();
    this.initMenus();
    this.initSticky();
    this.initReparent();
    this.initDropdowns();
    this.initModals();
    this.initCollapse();
    this.initDismiss();
    this.initTabs();
    this.initAccordions();
    this.initScrollspy();
    this.initScrollto();
    this.initTooltips();
    this.initSteppers();
    this.initThemeSwitch();
    this.initImageInput();
    this.initTogglePassword();
    this.initDatatables();
    this.initDatepicker();
    this.initSelect();
    this.initToast();
  }

  initDrawers() {
    this.initKtComponent('KTDrawer');
  }

  initMenus() {
    this.initKtComponent('KTMenu');
  }

  initDropdowns() {
    this.initKtComponent('KTDropdown');
  }

  initSticky() {
    this.initKtComponent('KTSticky');
  }

  initReparent() {
    this.initKtComponent('KTReparent');
  }

  initScrollables() {
    this.initKtComponent('KTScrollable');
  }

  initToggles() {
    this.initKtComponent('KTToggle');
  }

  initModals() {
    this.initKtComponent('KTModal');
  }

  initCollapse() {
    this.initKtComponent('KTCollapse');
  }

  initDismiss() {
    this.initKtComponent('KTDismiss');
  }

  initTabs() {
    this.initKtComponent('KTTabs');
  }

  initAccordions() {
    this.initKtComponent('KTAccordion');
  }

  initScrollspy() {
    this.initKtComponent('KTScrollspy');
  }

  initScrollto() {
    this.initKtComponent('KTScrollto');
  }

  initTooltips() {
    this.initKtComponent('KTTooltip');
  }

  initSteppers() {
    this.initKtComponent('KTStepper');
  }

  initThemeSwitch() {
    this.initKtComponent('KTThemeSwitch');
  }

  initImageInput() {
    this.initKtComponent('KTImageInput');
  }

  initTogglePassword() {
    this.initKtComponent('KTTogglePassword');
  }

  initDatatables() {
    this.initKtComponent('KTDataTable');
  }

  initDatepicker() {
    this.initKtComponent('KTDatepicker');
  }

  initSelect() {
    this.initKtComponent('KTSelect');
  }

  initToast() {
    this.initKtComponent('KTToast');
  }
}