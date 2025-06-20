<div>
    <!-- Header -->
    <header class="h-(--header-height) flex shrink-0 items-center bg-background transition-[height]" data-kt-sticky="true"
        data-kt-sticky-class="transition-[height] fixed z-10 top-0 left-0 right-0 backdrop-blur-md bg-background/70 border-b border-border"
        data-kt-sticky-name="header" data-kt-sticky-offset="200px" id="header">
        <!-- Container -->
        <div class="kt-container-fixed flex items-center justify-between lg:gap-4" id="headerContainer">
            <livewire:shared.logo />
            <!-- Topbar -->
            <div class="flex items-center gap-2.5">
                <livewire:shared.topbar-notification-dropdown />
                <livewire:shared.topbar-chat />
                <livewire:shared.topbar-user-dropdown />
            </div>
            <!-- End of Topbar -->
        </div>
        <!-- End of Container -->
    </header>
    <!-- End of Header -->
</div>
