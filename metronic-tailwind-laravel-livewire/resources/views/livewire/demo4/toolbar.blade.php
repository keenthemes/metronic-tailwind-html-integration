<!-- Toolbar -->
<div class="pb-5">
    <!-- Container -->
    <div class="kt-container-fluid flex items-center justify-between flex-wrap gap-3">
        <div class="flex items-center flex-wrap gap-1 lg:gap-5">
            <h1 class="font-medium text-base text-mono">
            </h1>
            <div class="flex items-center flex-wrap gap-1 text-sm">
                <a class="text-secondary-foreground hover:text-primary" href="#">
                Home
                </a>
            </div>
        </div>
        <div class="flex items-center flex-wrap gap-3">
            <livewire:shared.topbar-search-modal />
            <livewire:shared.topbar-notification-dropdown />
            <!-- End of Notifications -->
            <a class="kt-btn kt-btn-outline" href="#">
            <i class="ki-filled ki-exit-down">
            </i>
            Export
            </a>
        </div>
    </div>
    <!-- End of Container -->
</div>
<!-- End of Toolbar -->