<!-- Header -->
<header class="flex items-center fixed z-10 top-0 left-0 right-0 shrink-0 h-(--header-height) bg-muted" id="header">
    <!-- Container -->
    <div class="kt-container-fluid flex justify-between items-stretch px-5 lg:ps-0 lg:gap-4" id="header_container">
        <div class="flex items-center me-1">
            <div class="flex items-center justify-center lg:w-(--sidebar-width) gap-1 shrink-0">
                <button class="kt-btn kt-btn-icon kt-btn-ghost -ms-2 lg:hidden" data-kt-drawer-toggle="#sidebar">
                <i class="ki-filled ki-menu">
                </i>
                </button>
                <a class="mx-1" href="#">
                <img class="dark:hidden min-h-[24px]" src="assets/media/app/mini-logo-primary.svg"/>
                <img class="hidden dark:block min-h-[24px]" src="assets/media/app/mini-logo-primary-dark.svg"/>
                </a>
            </div>
            <div class="flex items-center">
                <h3 class="text-secondary-foreground text-base hidden md:block">
                MetronicTeam
                </h3>
                <span class="text-sm text-muted-foreground font-medium px-2.5 hidden md:inline">
                /
                </span>
                <div class="kt-menu kt-menu-default" data-kt-menu="true">
                <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover">
                    <button class="kt-menu-toggle text-mono font-medium">
                    Account
                    <span class="kt-menu-arrow">
                    <i class="ki-filled ki-down">
                    </i>
                    </span>
                    </button>
                    <div class="kt-menu-dropdown w-48 py-2">
                    <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#" tabindex="0">
                        <span class="kt-menu-icon">
                        <i class="ki-filled ki-profile-circle">
                        </i>
                        </span>
                        <span class="kt-menu-title">
                        Public Profile
                        </span>
                    </a>
                    </div>
                    <div class="kt-menu-item active">
                    <a class="kt-menu-link" href="#" tabindex="0">
                        <span class="kt-menu-icon">
                        <i class="ki-filled ki-setting-2">
                        </i>
                        </span>
                        <span class="kt-menu-title">
                        Account
                        </span>
                    </a>
                    </div>
                    <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#" tabindex="0">
                        <span class="kt-menu-icon">
                        <i class="ki-filled ki-users">
                        </i>
                        </span>
                        <span class="kt-menu-title">
                        Network
                        </span>
                    </a>
                    </div>
                    <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#" tabindex="0">
                        <span class="kt-menu-icon">
                        <i class="ki-filled ki-security-user">
                        </i>
                        </span>
                        <span class="kt-menu-title">
                        Authentication
                        </span>
                    </a>
                    </div>
                    <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#" tabindex="0">
                        <span class="kt-menu-icon">
                        <i class="ki-filled ki-handcart">
                        </i>
                        </span>
                        <span class="kt-menu-title">
                        Store - Client
                        </span>
                    </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- End of Logo -->
        <!-- Topbar -->
        <div class="flex items-center lg:gap-3.5">
            <!-- Action -->
            <a class="kt-btn kt-btn-primary mr-1 sm:me-0" href="#">
                Get Started
            </a>
            <!-- End of Action -->
            <livewire:shared.topbar-search-modal />
            <livewire:shared.topbar-chat />
            <livewire:shared.topbar-apps />
            <livewire:shared.topbar-notification-dropdown />
            <livewire:shared.topbar-user-dropdown />
        </div>
        <!-- End of Topbar -->
    </div>
    <!-- End of Container -->
</header>
<!-- End of Header -->