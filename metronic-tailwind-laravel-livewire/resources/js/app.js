import './bootstrap';
// Alpine.js is automatically included with Livewire, no need to import manually
// This prevents "multiple instances of Alpine running" error

// Metronic Core JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize drawer functionality
    initDrawers();

    // Initialize KTMenu (includes menu functionality)
    initKTMenu();

    // Initialize sticky headers
    initStickyHeaders();

    // Initialize modal functionality
    initModals();

    // Initialize KTUI dropdowns on initial page load
    if (typeof KTDropdown !== 'undefined' && typeof KTDropdown.init === 'function') {
        try {
            KTDropdown.init();
        } catch (error) {
            console.warn('KTDropdown initialization failed:', error);
        }
    } else if (typeof KTComponents !== 'undefined' && typeof KTComponents.init === 'function') {
        // Fallback: Use KTComponents.init() if KTDropdown.init() is not available
        try {
            KTComponents.init();
        } catch (error) {
            console.warn('KTComponents initialization failed:', error);
        }
    }
});

// Drawer functionality
function initDrawers() {
    // Use KTDrawer from KTUI if available
    if (typeof KTDrawer !== 'undefined' && typeof KTDrawer.init === 'function') {
        try {
            // Keep drawers in place when inside these (e.g. for wire:navigate / SPA persistence)
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
        // Fallback: Use custom implementation if KTDrawer is not available
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

// Menu functionality
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

// KTMenu initialization function
function initKTMenu() {
    // Initialize KTMenu if available (from Metronic core bundle)
    if (typeof KTMenu !== 'undefined' && KTMenu.init) {
        try {
            KTMenu.init();
        } catch (error) {
            console.warn('KTMenu initialization failed:', error);
        }
    }

    // Also initialize our custom menu functionality
    initMenus();
}

// Sticky header functionality
function initStickyHeaders() {
    const stickyElements = document.querySelectorAll('[data-kt-sticky="true"]');

    stickyElements.forEach(element => {
        const stickyClass = element.getAttribute('data-kt-sticky-class') || 'kt-sticky';
        const offset = parseInt(element.getAttribute('data-kt-sticky-offset')) || 0;

        window.addEventListener('scroll', function() {
            if (window.scrollY > offset) {
                element.classList.add(...stickyClass.split(' '));
            } else {
                element.classList.remove(...stickyClass.split(' '));
            }
        });
    });
}

// Modal functionality
function initModals() {
    const modalToggles = document.querySelectorAll('[data-kt-modal-toggle]');

    modalToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-kt-modal-toggle');
            const modal = document.querySelector(modalId);

            if (modal) {
                modal.classList.toggle('hidden');
                modal.classList.toggle('flex');
            }
        });
    });
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.kt-modal');

    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });
});

// Dropdown reinitialization for wire:navigate
function reinitDropdowns() {
    // Use KTDropdown.reinit() from modified KTUI to clear stale instances
    // and recreate fresh ones after wire:navigate navigation
    if (typeof KTDropdown !== 'undefined' && typeof KTDropdown.reinit === 'function') {
        try {
            KTDropdown.reinit();
        } catch (error) {
            console.error('KTDropdown reinitialization failed:', error);
        }
    } else if (typeof KTComponents !== 'undefined' && typeof KTComponents.init === 'function') {
        // Fallback: Use KTComponents.init() if reinit() is not available
        try {
            KTComponents.init();
        } catch (error) {
            console.warn('KTComponents reinitialization failed:', error);
        }
    } else {
        console.warn('[Dropdown Reinit] KTDropdown.reinit() not available');
    }
}

// Drawer reinitialization for wire:navigate
function reinitDrawers() {
    // Use KTDrawer.reinit() from modified KTUI to clear stale instances
    // and recreate fresh ones after wire:navigate navigation
    if (typeof KTDrawer !== 'undefined' && typeof KTDrawer.reinit === 'function') {
        try {
            KTDrawer.reinit();
        } catch (error) {
            console.error('KTDrawer reinitialization failed:', error);
        }
    } else if (typeof KTDrawer !== 'undefined' && typeof KTDrawer.init === 'function') {
        // Fallback: Use KTDrawer.init() if reinit() is not available
        try {
            KTDrawer.init();
        } catch (error) {
            console.warn('KTDrawer initialization failed:', error);
        }
    } else {
        console.warn('[Drawer Reinit] KTDrawer.reinit() not available');
    }
}

// Livewire hooks
document.addEventListener('livewire:init', () => {
    // Re-initialize functionality after Livewire updates
    Livewire.hook('morph.updated', () => {
        // Use a delay to ensure Livewire components have finished rendering
        // This is especially important for drawers in Livewire components
        setTimeout(() => {
            // Use reinit for drawers to handle persisted elements properly
            reinitDrawers();
            initKTMenu(); // Use KTMenu initialization instead of just initMenus
            initStickyHeaders();
            initModals();
            reinitDropdowns();

            // Retry drawer reinit after a longer delay to catch drawers that render later
            // This handles cases where Livewire components render asynchronously
            setTimeout(() => {
                reinitDrawers();
            }, 100); // Additional delay for async Livewire components
        }, 10); // Initial delay to let Livewire finish rendering
    });
});

// Handle wire:navigate navigation events
// Note: morph.updated hook also handles this, but we keep this for explicit wire:navigate handling
document.addEventListener('livewire:navigated', () => {
    // Reinitialize all components after wire:navigate navigation
    setTimeout(() => {
        reinitDrawers();
        initKTMenu();
        initStickyHeaders();
        initModals();
        reinitDropdowns();

        setTimeout(() => {
            reinitDropdowns();
            reinitDrawers();
        }, 150);

        setTimeout(() => {
            initKTMenu();
        }, 100);

        setTimeout(() => {
            reinitDrawers();

            const toggleButtons = document.querySelectorAll('[data-kt-drawer-toggle]');
            toggleButtons.forEach((btn) => {
                const selector = btn.getAttribute('data-kt-drawer-toggle');
                if (!selector || typeof window.KTDrawer === 'undefined') return;
                let drawer = document.querySelector(selector) || document.body.querySelector(selector);
                if (!drawer) {
                    const header = document.querySelector('header#header');
                    if (header) drawer = header.querySelector(selector);
                }
                const hasInstance = drawer && typeof window.KTData !== 'undefined' && window.KTData.has(drawer, 'drawer');
                if (drawer && typeof window.KTData !== 'undefined' && !window.KTData.has(drawer, 'drawer')) {
                    if (drawer.hasAttribute('data-kt-drawer-container') && drawer.getAttribute('data-kt-drawer-container') === 'body' && drawer.parentElement !== document.body) {
                        document.body.appendChild(drawer);
                    }
                    new window.KTDrawer(drawer);
                }
            });
        }, 300);
    }, 50);
});

// Export functions for use in other modules
window.MetronicCore = {
    initDrawers,
    initMenus,
    initKTMenu,
    initStickyHeaders,
    initModals
};
