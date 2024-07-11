/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({config, addBase, addComponents, addVariant, e}) => {  
  // Menu
  addComponents({
    '.menu': {
      'display': 'flex',
    },
    '.menu-item, .menu-link': {
      'padding': '0',
      'margin': '0',
    },
    '.menu-item': {
      'display': 'flex',
      'flex-direction': 'column'
    },
    '.menu-link': {
      'cursor': 'pointer',
      'display': 'flex',
      'align-items': 'center',
      'flex-grow': '1',
    },
    '.menu-label': {
      'display': 'flex',
      'align-items': 'center',
      'flex-grow': '1',
      'line-height': '1',
    },
    '.menu-title': {
      'display': 'flex',
      'align-items': 'center',
      'line-height': '1',
      'flex-grow': '1',
    },
    '.menu-icon, .menu-toggle, .menu-bullet, .menu-badge, .menu-arrow': {
      'display': 'flex',
      'align-items': 'center',
      'flex-shrink': '0',
    },
    '.menu-dropdown, .menu-accordion': {
      'padding': '0',
      'margin': '0',
      'display': 'none',
      'align-items': 'stretch',
      'flex-direction': 'column'
    },
    '.menu-dropdown': {
      '.show.menu-item-dropdown > &, .base-Popper-root > .menu-container > &, &.menu.show, &.show[data-popper-placement]': {
        'display': 'flex',
        'will-change': 'transform'
      }
    },
    '.menu-accordion': {
      'display': 'none',
      'transition': 'height .3s ease',
      '.show:not(.menu-dropdown) > &, .transitioning:not(.menu-dropdown) > &, &.show': {
        'display': 'flex',
      }
    }
  });

  addVariant('menu-item-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.active.${e(`menu-item-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.active > .menu-link.${e(`menu-item-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.active > .menu-link .${e(`menu-item-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.active > .menu-label.${e(`menu-item-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.active > .menu-label .${e(`menu-item-active${separator}${className}`)}`;
      });
    }
  ]);

  addVariant('menu-item-here', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.here.${e(`menu-item-here${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.here > .menu-link.${e(`menu-item-here${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.here > .menu-link .${e(`menu-item-here${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.here > .menu-label.${e(`menu-item-here${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.here > .menu-label .${e(`menu-item-here${separator}${className}`)}`;
      });
    }
  ]);

  addVariant('menu-item-show', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.show.${e(`menu-item-show${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.show > .menu-link.${e(`menu-item-show${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.show > .menu-link .${e(`menu-item-show${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.show > .menu-label.${e(`menu-item-show${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-item.show > .menu-label .${e(`menu-item-show${separator}${className}`)}`;
      });
    }
  ]);

  addVariant('menu-link-hover', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-link:hover.${e(`menu-link-hover${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-link:hover .${e(`menu-link-hover${separator}${className}`)}`;
      });
    }
  ]);

  addVariant('menu-link-focus', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-link:focus.${e(`menu-link-focus${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.menu-link:focus .${e(`menu-link-focus${separator}${className}`)}`;
      });
    },
  ]);
  
  // DataTable
  addVariant('datatable-loading', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable].loading.${e(`datatable-loading${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable].loading .${e(`datatable-loading${separator}${className}`)}`;
      });
    }
  ]);

  addVariant('datatable-initialized', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable].initialized.${e(`datatable-initialized${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable].initialized .${e(`datatable-initialized${separator}${className}`)}`;
      });
    }
  ]);

  addVariant('datatable-sort', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable] .sort.asc.desc.${e(`datatable-sort${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable] .sort.asc.desc .${e(`datatable-sort${separator}${className}`)}`;
      });
    }
  ]);

  addVariant('datatable-sort-asc', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable] .sort.asc.${e(`datatable-sort-asc${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable] .sort.asc .${e(`datatable-sort-asc${separator}${className}`)}`;
      });
    }
  ]);

  addVariant('datatable-sort-desc', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable] .sort.desc.${e(`datatable-sort-desc${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-datatable] .sort.desc .${e(`datatable-sort-desc${separator}${className}`)}`;
      });
    }
  ]);

  // Accordion
  addVariant('accordion-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-accordion-item].active.${e(
            `accordion-active${separator}${className}`,
        )}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-accordion-item].active > [data-accordion-toggle] .${e(
            `accordion-active${separator}${className}`,
        )}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-accordion-item].active > [data-accordion-toggle].${e(
            `accordion-active${separator}${className}`,
        )}`;
      });
    },
  ]);

  // Modal
	addVariant('modal-open', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-modal].open.${e(`modal-open${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-modal].open .${e(`modal-open${separator}${className}`)}`;
      });
    },
  ]);

  // Drawer
  addVariant('drawer-open', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-drawer].open.${e(`drawer-open${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-drawer].open .${e(`drawer-open${separator}${className}`)}`;
      });
    }
  ]);

  // Dropdown
  addVariant('dropdown-open', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-dropdown].open .${e(`dropdown-open${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-dropdown-content].open .${e(`dropdown-open${separator}${className}`)}`;
      });
    }
  ]);

  // Toggle
  addVariant('toggle-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-toggle].active.${e(`toggle-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-toggle].active .${e(`toggle-active${separator}${className}`)}`;
      });
    }
  ]);

  // Sticky
  addVariant('sticky-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-sticky].active .${e(`sticky-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-sticky].active .${e(`sticky-active${separator}${className}`)}`;
      });
    }
  ]);
  
  // Collapse
  addVariant('collapse-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-collapse].active .${e(`collapse-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-collapse].active.${e(`collapse-active${separator}${className}`)}`;
      });
    }
  ]);

  // Dismiss
  addVariant('dismiss', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-dismiss].${e(`dismiss${separator}${className}`)}`;
      });
    }
  ]);

  // Tabs
  addVariant('tab-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-tab-toggle].active.${e(`tab-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-tab-toggle].active .${e(`tab-active${separator}${className}`)}`;
      });
    },
  ]);

  // Button
  addVariant('btn-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.btn.active.${e(`btn-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.btn.active .${e(`btn-active${separator}${className}`)}`;
      });
    },
  ]);

  // Toggle Password
  addVariant('toggle-password-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-toggle-password].active.${e(`toggle-password-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-toggle-password].active .${e(`toggle-password-active${separator}${className}`)}`;
      });
    },
  ]);

  // Scrollspy
  addVariant('scrollspy-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-scrollspy-anchor].active.${e(`scrollspy-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-scrollspy-anchor].active .${e(`scrollspy-active${separator}${className}`)}`;
      });
    },
  ]);

  // Image Input
	addVariant('image-input-empty', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-image-input].empty .${e(`image-input-empty${separator}${className}`)}`;
      });
    },
  ]);

	addVariant('image-input-changed', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-image-input].changed .${e(`image-input-changed${separator}${className}`)}`;
      });
    },
  ]);

  // Stepper
  addVariant('stepper-first', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper].first .${e(`stepper-first${separator}${className}`)}`;
      });
    },
  ]);
  
  addVariant('stepper-between', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper].between .${e(`stepper-between${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('stepper-last', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper].last .${e(`stepper-last${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('stepper-item-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper-item].active.${e(`stepper-item-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper-item].active .${e(`stepper-item-active${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('stepper-item-completed', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper-item].completed.${e(`stepper-item-completed${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper-item].completed .${e(`stepper-item-completed${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('stepper-item-pending', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper-item].pending.${e(`stepper-item-pending${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper-item].pending .${e(`stepper-item-pending${separator}${className}`)}`;
      });
    },
  ]);

  // Theme
	addVariant('light-mode', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `[data-theme-mode=light] .${e(`light-mode${separator}${className}`)}`;
		});
	});

	addVariant('dark-mode', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `[data-theme-mode=dark] .${e(`dark-mode${separator}${className}`)}`;
		});
	});

	addVariant('system-mode', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `[data-theme-mode=system] .${e(`system-mode${separator}${className}`)}`;
		});
	});

  addVariant('light', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.light .${e(`light${separator}${className}`)}`;
		});
	});

  // Breakpoints
  const breakpoints = {};
  const screens = config().theme.screens;

  for (const screen of Object.keys(screens)) {
    const pixels = screens[screen];
    breakpoints[`--tw-${screen}`] = pixels;
  }

  addBase({
    ':root': breakpoints
  });
});