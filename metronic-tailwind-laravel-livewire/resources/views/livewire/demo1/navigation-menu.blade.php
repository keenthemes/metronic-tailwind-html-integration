<div class="kt-menu kt-menu-default kt-menu-fit flex-col" data-kt-menu="true">
    {{-- Dashboard --}}
    <div class="kt-menu-item">
        <a class="kt-menu-link {{ $activeMenu === 'demo1.index' ? 'active' : '' }}"
           href="{{ route('demo1.index') }}"
           wire:navigate>
            <span class="kt-menu-icon">
                <i class="ki-filled ki-element-11"></i>
            </span>
            <span class="kt-menu-title">Dashboard</span>
        </a>
    </div>

    {{-- Profiles Section --}}
    <div class="kt-menu-item pt-2.5">
        <div class="kt-menu-content">
            <span class="kt-menu-heading uppercase font-medium text-muted-foreground text-xs tracking-wide">
                Profiles
            </span>
        </div>
    </div>

    {{-- Public Profiles --}}
    <div class="kt-menu-item"
         data-kt-menu-item-toggle="accordion"
         data-kt-menu-item-trigger="click">
        <div class="kt-menu-link">
            <span class="kt-menu-icon">
                <i class="ki-filled ki-profile-circle"></i>
            </span>
            <span class="kt-menu-title">Public Profiles</span>
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
                    <span class="kt-menu-title">Default</span>
                </a>
            </div>
            <div class="kt-menu-item">
                <a class="kt-menu-link" href="#" wire:navigate>
                    <span class="kt-menu-bullet">
                        <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="kt-menu-title">Creator</span>
                </a>
            </div>
            <div class="kt-menu-item">
                <a class="kt-menu-link" href="#" wire:navigate>
                    <span class="kt-menu-bullet">
                        <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="kt-menu-title">Company</span>
                </a>
            </div>
        </div>
    </div>

    {{-- Account Section --}}
    <div class="kt-menu-item pt-2.5">
        <div class="kt-menu-content">
            <span class="kt-menu-heading uppercase font-medium text-muted-foreground text-xs tracking-wide">
                Account
            </span>
        </div>
    </div>

    {{-- Settings --}}
    <div class="kt-menu-item"
         data-kt-menu-item-toggle="accordion"
         data-kt-menu-item-trigger="click">
        <div class="kt-menu-link">
            <span class="kt-menu-icon">
                <i class="ki-filled ki-setting-2"></i>
            </span>
            <span class="kt-menu-title">Settings</span>
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
                    <span class="kt-menu-title">Profile Settings</span>
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

    {{-- Network Section --}}
    <div class="kt-menu-item pt-2.5">
        <div class="kt-menu-content">
            <span class="kt-menu-heading uppercase font-medium text-muted-foreground text-xs tracking-wide">
                Network
            </span>
        </div>
    </div>

    <div class="kt-menu-item">
        <a class="kt-menu-link" href="#" wire:navigate>
            <span class="kt-menu-icon">
                <i class="ki-filled ki-users"></i>
            </span>
            <span class="kt-menu-title">User Cards</span>
        </a>
    </div>

    <div class="kt-menu-item">
        <a class="kt-menu-link" href="#" wire:navigate>
            <span class="kt-menu-icon">
                <i class="ki-filled ki-profile-user"></i>
            </span>
            <span class="kt-menu-title">User Table</span>
        </a>
    </div>

    {{-- Other Section --}}
    <div class="kt-menu-item pt-2.5">
        <div class="kt-menu-content">
            <span class="kt-menu-heading uppercase font-medium text-muted-foreground text-xs tracking-wide">
                Other
            </span>
        </div>
    </div>

    <div class="kt-menu-item">
        <a class="kt-menu-link" href="#" wire:navigate>
            <span class="kt-menu-icon">
                <i class="ki-filled ki-shop"></i>
            </span>
            <span class="kt-menu-title">Store</span>
        </a>
    </div>

    <div class="kt-menu-item">
        <a class="kt-menu-link" href="#" wire:navigate>
            <span class="kt-menu-icon">
                <i class="ki-filled ki-security-user"></i>
            </span>
            <span class="kt-menu-title">Authentication</span>
        </a>
    </div>

    <div class="kt-menu-item">
        <a class="kt-menu-link" href="#" wire:navigate>
            <span class="kt-menu-icon">
                <i class="ki-filled ki-questionnaire-tablet"></i>
            </span>
            <span class="kt-menu-title">Help</span>
        </a>
    </div>
</div>