<!-- Header -->
<header id="header" class="flex items-center transition-[height] shrink-0 bg-background h-(--header-height)" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="100px" data-kt-sticky-class="transition-[height] fixed z-10 top-0 left-0 right-0 shadow-xs backdrop-blur-md bg-white/70 dark:bg-background/70 border-b border-border">
    <!-- Container -->
    <div class="kt-container-fluid flex flex-wrap justify-between items-center lg:gap-4" id="header_container">
        <!-- Logo -->
        <div class="flex items-center gap-2 lg:gap-5">
            <button class="kt-btn kt-btn-icon kt-btn-ghost -ms-2 lg:hidden" data-kt-drawer-toggle="#sidebar">
                <i class="ki-filled ki-menu">
                </i>
            </button>
            <a href="{{ url('demo5') }}">
                <img src="{{ asset('assets/media/app/mini-logo-circle.svg') }}" class="dark:hidden min-h-[34px]" />
                <img src="{{ asset('assets/media/app/mini-logo-circle-dark.svg') }}" class="hidden dark:inline-block min-h-[34px]" />
            </a>
            <!-- Navs -->
            <div class="hidden lg:flex items-center">
                <!-- Nav -->
                <div class="kt-menu kt-menu-default" data-kt-menu="true">
                    <div class="kt-menu-item" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-offset="0,10px">
                        <button class="kt-menu-toggle text-mono text-sm font-medium">
                            MetronicTeam
                            <span class="kt-menu-arrow">
                                <i class="ki-filled ki-down">
                                </i>
                            </span>
                        </button>
                        <div class="kt-menu-dropdown w-48 py-2">
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="{{ url('demo5/public-profile/profiles/default') }}" tabindex="0">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-profile-circle">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        MetronicTeam
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="{{ url('demo5') }}" tabindex="0">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-setting-2">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        KeenTeam
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Nav -->
                <span class="text-sm text-muted-foreground font-medium px-2.5 hidden md:inline">
                    /
                </span>
                <!-- Nav -->
                <div class="kt-menu kt-menu-default" data-kt-menu="true">
                    <div class="kt-menu-item" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-offset="0, 10px">
                        <button class="kt-menu-toggle text-secondary-foreground text-sm font-medium">
                            Fall 24 Campaign
                            <span class="kt-menu-arrow">
                                <i class="ki-filled ki-down">
                                </i>
                            </span>
                        </button>
                        <div class="kt-menu-dropdown w-48 py-2">
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="" tabindex="0">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-profile-circle">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        Fall '24 Campaign
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="" tabindex="0">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-setting-2">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        Fall Winter 2024
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="" tabindex="0">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-users">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        Barberry Autmn 24
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="" tabindex="0">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-security-user">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        PF24 Advertising
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Nav -->
                <span class="text-sm text-muted-foreground font-medium px-2.5">
                    /
                </span>
                <!-- Nav -->
                <div class="kt-menu kt-menu-default" data-kt-menu="true">
                    <div class="kt-menu-item" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-offset="0, 10px">
                        <button class="kt-menu-toggle text-secondary-foreground text-sm font-medium">
                            Staging
                            <span class="kt-menu-arrow">
                                <i class="ki-filled ki-down">
                                </i>
                            </span>
                        </button>
                        <div class="kt-menu-dropdown w-48 py-2">
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="" tabindex="0">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-profile-circle">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        Staging
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="" tabindex="0">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-setting-2">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        Account
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Nav -->
            </div>
            <!-- End of Navs -->
        </div>
        <!-- End of Logo -->
        <!-- Topbar -->
        <div class="flex items-center gap-3">
            <a class="kt-btn kt-btn-outline" href="{{ url('demo5/account/members/team-members') }}">
                <i class="ki-filled ki-users">
                </i>
                Add
                <span class="hidden md:inline">
                    Teammate
                </span>
            </a>
            <div class="flex items-center gap-1">
                <livewire:shared.topbar-notification-dropdown />
                <livewire:shared.topbar-apps />
            </div>
            <livewire:shared.topbar-user-dropdown />
        </div>
        <!-- End of Topbar -->
    </div>
    <!-- End of Container -->
</header>
<!-- End of Header -->