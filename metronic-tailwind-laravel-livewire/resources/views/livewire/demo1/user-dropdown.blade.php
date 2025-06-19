<div class="kt-menu" data-kt-menu="true">
    <div class="kt-menu-item" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
        <div class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-outline kt-btn-outline-dashed kt-btn-outline-default">
            <img
                alt="{{ $user['name'] ?? 'User' }}"
                class="rounded-full size-6"
                src="{{ $user['avatar'] ?? asset('media/avatars/default.jpg') }}"
            >
            <span class="text-gray-600 font-semibold text-sm ms-2 me-1">
                {{ $user['name'] ?? 'User Name' }}
            </span>
            <i class="ki-filled ki-down text-xs text-gray-500"></i>
        </div>
        <div class="kt-menu-dropdown w-screen max-w-[250px]">
            <div class="kt-menu-section flex items-center justify-between px-5 py-1.5 border-b border-border">
                <div class="flex items-center gap-1.5">
                    <span class="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        Account
                    </span>
                </div>
            </div>

            <div class="flex items-center gap-2.5 px-5 py-1.5">
                <img
                    alt="{{ $user['name'] ?? 'User' }}"
                    class="rounded-full size-9"
                    src="{{ $user['avatar'] ?? asset('media/avatars/default.jpg') }}"
                >
                <div class="flex flex-col gap-1.5">
                    <div class="text-sm text-gray-800 font-semibold leading-none">
                        {{ $user['name'] ?? 'User Name' }}
                    </div>
                    <div class="text-xs text-gray-600 font-medium leading-none">
                        {{ $user['email'] ?? 'user@example.com' }}
                    </div>
                </div>
            </div>

            <div class="kt-menu-separator"></div>

            <div class="kt-menu-item">
                <a class="kt-menu-link" href="#" wire:navigate>
                    <span class="kt-menu-icon">
                        <i class="ki-filled ki-badge"></i>
                    </span>
                    <span class="kt-menu-title">Public Profile</span>
                </a>
            </div>

            <div class="kt-menu-item">
                <a class="kt-menu-link" href="#" wire:navigate>
                    <span class="kt-menu-icon">
                        <i class="ki-filled ki-profile-circle"></i>
                    </span>
                    <span class="kt-menu-title">My Profile</span>
                </a>
            </div>

            <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
                <div class="kt-menu-link">
                    <span class="kt-menu-icon">
                        <i class="ki-filled ki-setting-2"></i>
                    </span>
                    <span class="kt-menu-title">My Account</span>
                    <span class="kt-menu-arrow">
                        <i class="ki-filled ki-right text-xs"></i>
                    </span>
                </div>
                <div class="kt-menu-dropdown">
                    <div class="kt-menu-item">
                        <a class="kt-menu-link" href="#" wire:navigate>
                            <span class="kt-menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="kt-menu-title">Overview</span>
                        </a>
                    </div>
                    <div class="kt-menu-item">
                        <a class="kt-menu-link" href="#" wire:navigate>
                            <span class="kt-menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="kt-menu-title">Settings</span>
                        </a>
                    </div>
                    <div class="kt-menu-item">
                        <a class="kt-menu-link" href="#" wire:navigate>
                            <span class="kt-menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="kt-menu-title">Security</span>
                        </a>
                    </div>
                    <div class="kt-menu-item">
                        <a class="kt-menu-link" href="#" wire:navigate>
                            <span class="kt-menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="kt-menu-title">Billing</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="kt-menu-separator"></div>

            <div class="kt-menu-item">
                <a class="kt-menu-link" href="#" wire:navigate>
                    <span class="kt-menu-icon">
                        <i class="ki-filled ki-moon"></i>
                    </span>
                    <span class="kt-menu-title">Dark Mode</span>
                    <label class="switch switch-sm">
                        <input
                            checked="{{ $isDarkMode ? 'checked' : '' }}"
                            type="checkbox"
                            wire:change="toggleDarkMode"
                        >
                    </label>
                </a>
            </div>

            <div class="kt-menu-separator"></div>

            <div class="kt-menu-item">
                <button
                    class="kt-menu-link w-full text-left"
                    wire:click="logout"
                >
                    <span class="kt-menu-icon">
                        <i class="ki-filled ki-entrance-left"></i>
                    </span>
                    <span class="kt-menu-title">Sign out</span>
                </button>
            </div>
        </div>
    </div>
</div>