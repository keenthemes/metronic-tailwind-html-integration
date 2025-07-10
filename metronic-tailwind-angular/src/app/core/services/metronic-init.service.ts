import { Injectable } from '@angular/core';

// Declare all Metronic and KTUI components
declare var KTToggle: any;
declare var KTDrawer: any;
declare var KTMenu: any;
declare var KTScrollable: any;
declare var KTSticky: any;
declare var KTReparent: any;
declare var KTRotate: any;
declare var KTDropdown: any;
declare var KTModal: any;
declare var KTCollapse: any;
declare var KTDismiss: any;
declare var KTTabs: any;
declare var KTAccordion: any;
declare var KTScrollspy: any;
declare var KTScrollto: any;
declare var KTTooltip: any;
declare var KTStepper: any;
declare var KTThemeSwitch: any;
declare var KTImageInput: any;
declare var KTTogglePassword: any;
declare var KTDataTable: any;
declare var KTDatepicker: any;
declare var KTSelect: any;
declare var KTToast: any;

@Injectable({
  providedIn: 'root'
})
export class MetronicInitService {

  constructor() { }

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
    KTDrawer.init();
  }

  initMenus() {
    KTMenu.init();
  }

  initDropdowns() {
    KTDropdown.init();
  }

  initSticky() {
    KTSticky.init();
  }

  initReparent() {
    KTReparent.init();
  }

  initScrollables() {
    KTScrollable.init();
  }

  initToggles() {
    KTToggle.init();
  }

  initModals() {
    KTModal.init();
  }

  initCollapse() {
    KTCollapse.init();
  }

  initDismiss() {
    KTDismiss.init();
  }

  initTabs() {
    KTTabs.init();
  }

  initAccordions() {
    KTAccordion.init();
  }

  initScrollspy() {
    KTScrollspy.init();
  }

  initScrollto() {
    KTScrollto.init();
  }

  initTooltips() {
    KTTooltip.init();
  }

  initSteppers() {
    KTStepper.init();
  }

  initThemeSwitch() {
    KTThemeSwitch.init();
  }

  initImageInput() {
    KTImageInput.init();
  }

  initTogglePassword() {
    KTTogglePassword.init();
  }

  initDatatables() {
    KTDataTable.init();
  }

  initDatepicker() {
    KTDatepicker.init();
  }

  initSelect() {
    KTSelect.init();
  }

  initToast() {
    KTToast.init();
  }
}