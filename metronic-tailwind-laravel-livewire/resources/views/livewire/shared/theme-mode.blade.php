<div class="kt-menu" data-kt-menu="true">
    <div class="kt-menu-item" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
        <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-light">
            <i class="ki-filled {{ $currentTheme === 'dark' ? 'ki-moon' : 'ki-sun-2' }} text-lg"></i>
        </button>
        <div class="kt-menu-dropdown w-screen max-w-[200px]">
            <div class="kt-menu-section">
                <h4 class="kt-menu-section-text">
                    Select Theme Mode
                </h4>
            </div>

            <div class="kt-menu-item">
                <button
                    class="kt-menu-link w-full text-left {{ $currentTheme === 'light' ? 'active' : '' }}"
                    wire:click="setTheme('light')"
                >
                    <span class="kt-menu-icon">
                        <i class="ki-filled ki-sun-2"></i>
                    </span>
                    <span class="kt-menu-title">Light</span>
                </button>
            </div>

            <div class="kt-menu-item">
                <button
                    class="kt-menu-link w-full text-left {{ $currentTheme === 'dark' ? 'active' : '' }}"
                    wire:click="setTheme('dark')"
                >
                    <span class="kt-menu-icon">
                        <i class="ki-filled ki-moon"></i>
                    </span>
                    <span class="kt-menu-title">Dark</span>
                </button>
            </div>

            <div class="kt-menu-item">
                <button
                    class="kt-menu-link w-full text-left {{ $currentTheme === 'system' ? 'active' : '' }}"
                    wire:click="setTheme('system')"
                >
                    <span class="kt-menu-icon">
                        <i class="ki-filled ki-screen"></i>
                    </span>
                    <span class="kt-menu-title">System</span>
                </button>
            </div>
        </div>
    </div>
</div>