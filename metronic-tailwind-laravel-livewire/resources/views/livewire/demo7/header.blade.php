<!-- Header -->
<header class="flex items-center transition-[height] shrink-0 bg-background py-4 lg:py-0 lg:h-(--header-height)" data-kt-sticky="true" data-kt-sticky-class="transition-[height] fixed z-10 top-0 left-0 right-0 shadow-xs backdrop-blur-md bg-background/70" data-kt-sticky-name="header" data-kt-sticky-offset="200px" id="header">
    <!-- Container -->
    <div class="kt-container-fixed flex flex-wrap gap-2 items-center lg:gap-4" id="header_container">
        <!-- Logo -->
        <div class="flex items-stretch gap-10 grow">
            <div class="flex items-center gap-2.5">
                <a href="{{ url('demo7') }}">
                    <img class="dark:hidden min-h-[34px]" src="{{ asset('assets/media/app/mini-logo-circle-primary.svg') }}" />
                    <img class="hidden dark:inline-block min-h-[34px]" src="{{ asset('assets/media/app/mini-logo-circle-primary-dark.svg') }}" />
                </a>
                <button class="lg:hidden kt-btn kt-btn-icon kt-btn-ghost" data-kt-drawer-toggle="#mega_menu_container">
                    <i class="ki-filled ki-burger-menu-2">
                    </i>
                </button>
                <h3 class="text-mono text-lg font-medium hidden md:block">
                    Metronic
                </h3>
            </div>
            <!-- Mega Menu -->
            <div class="flex items-stretch" id="megaMenuWrapper">
                <div class="flex items-stretch [--kt-reparent-mode:prepend] lg:[--kt-reparent-mode:prepend] [--kt-reparent-target:body] lg:[--kt-reparent-target:#megaMenuWrapper]" data-kt-reparent="true">
                    <div class="hidden lg:flex lg:items-stretch [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start fixed z-10 top-0 bottom-0 w-full mr-5 max-w-[250px] p-5 lg:p-0 overflow-auto" id="mega_menu_container">
                        <livewire:demo7.mega-menu />
                    </div>
                </div>
            </div>
            <!-- End of Mega Men -->
        </div>
        <!-- End of Logo -->
        <!-- Topbar -->
        <div class="flex items-center flex-wrap gap-3">
            <div class="flex items-center gap-1.5 lg:gap-3.5">
                <div class="flex flex-col items-end pt-0.5">
                    <span class="inline-flex gap-0.5 text-foreground font-medium text-xs uppercase">
                        <i class="ki-solid ki-crown-2">
                        </i>
                        free
                    </span>
                    <span class="text-secondary-foreground text-xs">
                        182/200
                        <span class="hidden sm:inline-block">
                            Uploads
                        </span>
                    </span>
                </div>
                <a class="kt-btn kt-btn-sm kt-btn-primary" href="{{ url('demo7/account/security/privacy-settings') }}">
                    Upgrade
                    <i class="ki-filled ki-arrow-up">
                    </i>
                </a>
            </div>
            <div class="border-e border-border h-5 mx-1.5 lg:mx-3">
            </div>
            <!-- User -->
            <livewire:shared.topbar-user-dropdown />
            <!-- End of User -->
        </div>
        <!-- End of Topbar -->
    </div>
    <!-- End of Container -->
</header>
<!-- End of Header -->