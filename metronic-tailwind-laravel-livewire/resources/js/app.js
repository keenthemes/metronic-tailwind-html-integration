import './bootstrap';
// Alpine.js is automatically included with Livewire, no need to import manually
// This prevents "multiple instances of Alpine running" error

const KT_THEME_SWITCH_DATA_KEY = 'theme-swtich'; // matches KTUI KTThemeSwitch._name (typo preserved for KTData)
const KT_SIDEBAR_COLLAPSED_KEY = 'kt-sidebar-collapsed';

function ktDisposeIfPresent(element, dataKey) {
    if (!element || typeof window.KTData === 'undefined' || !window.KTData.has(element, dataKey)) {
        return;
    }
    const inst = window.KTData.get(element, dataKey);
    if (inst && typeof inst.dispose === 'function') {
        inst.dispose();
    } else {
        window.KTData.remove(element, dataKey);
    }
}

function syncSidebarCollapsedToStorage() {
    if (!document.body) {
        return;
    }
    try {
        const collapsed = document.body.classList.contains('kt-sidebar-collapse');
        localStorage.setItem(KT_SIDEBAR_COLLAPSED_KEY, collapsed ? '1' : '0');
    } catch (e) {
        /* storage may be unavailable */
    }
}

function applySidebarCollapsedFromStorage() {
    if (!document.body) {
        return;
    }
    try {
        const v = localStorage.getItem(KT_SIDEBAR_COLLAPSED_KEY);
        if (v === '1') {
            document.body.classList.add('kt-sidebar-collapse');
        } else if (v === '0') {
            document.body.classList.remove('kt-sidebar-collapse');
        }
    } catch (e) {
        /* storage may be unavailable */
    }
}

function initSidebarCollapsePersistence() {
    document.addEventListener('click', function(ev) {
        const t = ev.target;
        if (!t || typeof t.closest !== 'function') {
            return;
        }
        if (!t.closest('#sidebar_toggle')) {
            return;
        }
        queueMicrotask(function() {
            syncSidebarCollapsedToStorage();
        });
    });
}

/** Mega menu refresh after sidebar width change (same idea as KTLayout._handleSidebar). */
function refreshMegaMenuAfterSidebarToggle() {
    const megaMenuEl = document.querySelector('#mega_menu');
    if (!megaMenuEl || typeof window.KTMenu === 'undefined') {
        return;
    }
    try {
        const menu = window.KTMenu.getInstance(megaMenuEl);
        if (menu && typeof menu.disable === 'function' && typeof menu.enable === 'function') {
            menu.disable();
            setTimeout(function() {
                menu.enable();
            }, 500);
        }
    } catch (e) {
        /* optional */
    }
}

function bindSidebarToggleLayoutHook() {
    const el = document.querySelector('#sidebar_toggle');
    const sidebarEl = document.querySelector('#sidebar');
    if (!el || !sidebarEl || typeof window.KTToggle === 'undefined') {
        return;
    }
    const inst = window.KTToggle.getInstance(el);
    if (!inst || typeof inst.on !== 'function') {
        return;
    }
    inst.on('toggle', function() {
        sidebarEl.classList.add('animating');
        refreshMegaMenuAfterSidebarToggle();
        if (typeof window.KTDom !== 'undefined' && typeof window.KTDom.transitionEnd === 'function') {
            window.KTDom.transitionEnd(sidebarEl, function() {
                sidebarEl.classList.remove('animating');
            });
        }
    });
}

/**
 * wire:navigate replaces document.body; persisted #sidebar_toggle still points at the old body.
 * Re-apply stored collapse, rebuild KTToggle against the current body, re-bind layout hook.
 */
function syncShellSidebarAfterNavigate() {
    applySidebarCollapsedFromStorage();
    const el = document.querySelector('#sidebar_toggle');
    if (!el || typeof window.KTToggle === 'undefined') {
        syncSidebarCollapsedToStorage();
        return;
    }
    try {
        ktDisposeIfPresent(el, 'toggle');
        if (el.getAttribute('data-kt-toggle')) {
            new window.KTToggle(el);
            const collapsed = document.body && document.body.classList.contains('kt-sidebar-collapse');
            el.classList.toggle('active', Boolean(collapsed));
            bindSidebarToggleLayoutHook();
        }
    } catch (e) {
        console.warn('Sidebar toggle reinit after navigate failed:', e);
    }
    syncSidebarCollapsedToStorage();
}

function reinitMetronicShell() {
    reinitDrawers();
    initKTMenu();
    reinitModals();
    reinitDropdowns();
    reinitDatatables();
    reinitScrollable();
    reinitThemeSwitch();
    applySidebarCollapsedFromStorage();
}

function ensureDrawerInstancesForToggles() {
    const toggleButtons = document.querySelectorAll('[data-kt-drawer-toggle]');
    toggleButtons.forEach((btn) => {
        const selector = btn.getAttribute('data-kt-drawer-toggle');
        if (!selector || typeof window.KTDrawer === 'undefined') {
            return;
        }
        let drawer = document.querySelector(selector) || document.body.querySelector(selector);
        if (!drawer) {
            const header = document.querySelector('header#header');
            if (header) {
                drawer = header.querySelector(selector);
            }
        }
        if (drawer && typeof window.KTData !== 'undefined' && !window.KTData.has(drawer, 'drawer')) {
            if (drawer.getAttribute('data-kt-drawer-container') === 'body' && drawer.parentElement !== document.body) {
                document.body.appendChild(drawer);
            }
            new window.KTDrawer(drawer);
        }
    });
}

// Metronic Core JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    initDrawers();
    initKTMenu();
    initStickyHeaders();

    if (typeof KTDropdown !== 'undefined' && typeof KTDropdown.init === 'function') {
        try {
            KTDropdown.init();
        } catch (error) {
            console.warn('KTDropdown initialization failed:', error);
        }
    } else if (typeof KTComponents !== 'undefined' && typeof KTComponents.init === 'function') {
        try {
            KTComponents.init();
        } catch (error) {
            console.warn('KTComponents initialization failed:', error);
        }
    }
    // KTDropdown.init() alone does not run KTModal; always wire modal instances + toggles.
    reinitModals();
    initDatatables();
    initSidebarCollapsePersistence();
    reinitThemeSwitch();
    applySidebarCollapsedFromStorage();
});

// Drawer functionality
function initDrawers() {
    if (typeof KTDrawer !== 'undefined' && typeof KTDrawer.init === 'function') {
        try {
            if (typeof window.KTGlobalComponentsConfig === 'undefined') {
                window.KTGlobalComponentsConfig = {};
            }
            window.KTGlobalComponentsConfig.drawer = window.KTGlobalComponentsConfig.drawer || {};
            window.KTGlobalComponentsConfig.drawer.keepInPlaceWithin = '[wire\\:id], header#header';

            KTDrawer.init();
        } catch (error) {
            console.warn('KTDrawer initialization failed:', error);
        }
    } else {
        const drawers = document.querySelectorAll('[data-kt-drawer]');

        drawers.forEach(drawer => {
            const toggles = document.querySelectorAll(`[data-kt-drawer-toggle="#${drawer.id}"]`);

            toggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    drawer.classList.toggle('hidden');
                    drawer.classList.toggle('block');
                });
            });
        });
    }
}

function initMenus() {
    const menus = document.querySelectorAll('[data-kt-menu="true"]');

    menus.forEach(menu => {
        const items = menu.querySelectorAll('[data-kt-menu-item-toggle="dropdown"]');

        items.forEach(item => {
            const trigger = item.querySelector('[data-kt-menu-item-trigger="click"], [data-kt-menu-item-trigger="click|lg:hover"]');
            const dropdown = item.querySelector('.kt-menu-dropdown');

            if (trigger && dropdown) {
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdown.classList.toggle('hidden');
                });
            }
        });
    });
}

function initKTMenu() {
    if (typeof KTMenu !== 'undefined' && KTMenu.init) {
        try {
            KTMenu.init();
        } catch (error) {
            console.warn('KTMenu initialization failed:', error);
        }
    }

    initMenus();
}

// One passive window listener; re-query stickies each tick (survives wire:navigate body replacement).
function initStickyHeaders() {
    if (window.__metronicStickyHeadersScrollBound) {
        return;
    }
    window.__metronicStickyHeadersScrollBound = true;
    window.addEventListener(
        'scroll',
        function() {
            document.querySelectorAll('[data-kt-sticky="true"]').forEach(function(element) {
                const stickyClass = element.getAttribute('data-kt-sticky-class') || 'kt-sticky';
                const offset = parseInt(element.getAttribute('data-kt-sticky-offset'), 10) || 0;
                if (window.scrollY > offset) {
                    element.classList.add(...stickyClass.split(' '));
                } else {
                    element.classList.remove(...stickyClass.split(' '));
                }
            });
        },
        { passive: true },
    );
}

/**
 * KTModal.init() runs createInstances() every time (new [data-kt-modal] nodes after morph).
 * Toggle/dismiss delegation is registered once on document.documentElement (see KTUI modal).
 */
function reinitModals() {
    if (typeof window.KTModal === 'undefined' || typeof window.KTModal.init !== 'function') {
        return;
    }
    try {
        window.KTModal.init();
    } catch (error) {
        console.warn('KTModal reinitialization failed:', error);
    }
}

function reinitScrollable() {
    if (typeof KTScrollable !== 'undefined' && typeof KTScrollable.init === 'function') {
        try {
            KTScrollable.init();
        } catch (error) {
            console.warn('KTScrollable reinitialization failed:', error);
        }
    }
}

function reinitDropdowns() {
    if (typeof KTDropdown !== 'undefined' && typeof KTDropdown.reinit === 'function') {
        try {
            KTDropdown.reinit();
        } catch (error) {
            console.error('KTDropdown reinitialization failed:', error);
        }
    } else if (typeof KTComponents !== 'undefined' && typeof KTComponents.init === 'function') {
        try {
            KTComponents.init();
        } catch (error) {
            console.warn('KTComponents reinitialization failed:', error);
        }
    } else {
        console.warn('[Dropdown Reinit] KTDropdown.reinit() not available');
    }
}

function initDatatables() {
    if (typeof KTDataTable !== 'undefined' && typeof KTDataTable.init === 'function') {
        try {
            KTDataTable.init();
        } catch (error) {
            console.warn('KTDataTable initialization failed:', error);
        }
    }
}

function reinitDatatables() {
    if (typeof KTDataTable !== 'undefined' && typeof KTDataTable.reinit === 'function') {
        try {
            KTDataTable.reinit();
        } catch (error) {
            console.warn('KTDataTable reinitialization failed:', error);
        }
    } else if (typeof KTDataTable !== 'undefined' && typeof KTDataTable.init === 'function') {
        try {
            KTDataTable.init();
        } catch (error) {
            console.warn('KTDataTable initialization failed:', error);
        }
    }
}

function reinitThemeSwitch() {
    if (typeof KTThemeSwitch === 'undefined' || typeof KTThemeSwitch.init !== 'function') {
        return;
    }
    try {
        const root = document.documentElement;
        ktDisposeIfPresent(root, KT_THEME_SWITCH_DATA_KEY);
        KTThemeSwitch.init();
    } catch (error) {
        console.warn('KTThemeSwitch reinitialization failed:', error);
    }
}

function reinitDrawers() {
    if (typeof KTDrawer !== 'undefined' && typeof KTDrawer.reinit === 'function') {
        try {
            KTDrawer.reinit();
        } catch (error) {
            console.error('KTDrawer reinitialization failed:', error);
        }
    } else if (typeof KTDrawer !== 'undefined' && typeof KTDrawer.init === 'function') {
        try {
            KTDrawer.init();
        } catch (error) {
            console.warn('KTDrawer initialization failed:', error);
        }
    } else {
        console.warn('[Drawer Reinit] KTDrawer.reinit() not available');
    }
}

document.addEventListener('livewire:init', () => {
    Livewire.hook('morph.updated', () => {
        applySidebarCollapsedFromStorage();
        setTimeout(function() {
            reinitMetronicShell();
            setTimeout(function() {
                reinitDrawers();
                reinitDatatables();
            }, 100);
        }, 10);
    });
});

document.addEventListener('livewire:navigated', () => {
    syncShellSidebarAfterNavigate();
    requestAnimationFrame(function() {
        applySidebarCollapsedFromStorage();
    });
    setTimeout(function() {
        reinitMetronicShell();
        setTimeout(function() {
            reinitDropdowns();
            reinitDrawers();
            reinitDatatables();
        }, 150);
        setTimeout(function() {
            initKTMenu();
        }, 100);
        setTimeout(function() {
            reinitDrawers();
            reinitDatatables();
            ensureDrawerInstancesForToggles();
        }, 300);
    }, 50);
});

window.MetronicCore = {
    initDrawers,
    initMenus,
    initKTMenu,
    initStickyHeaders,
    reinitModals,
    initModals: reinitModals,
    initDatatables,
    reinitDatatables
};
