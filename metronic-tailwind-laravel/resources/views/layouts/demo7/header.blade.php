<!-- Header -->
<header class="flex items-center h-(--header-height) shrink-0" id="header">
    <!-- Container -->
    <div class="kt-container-fluid flex items-center justify-between flex-wrap gap-3">
        @include('partials.logo')
        <!-- Topbar -->
        <div class="flex items-center gap-2.5">
            @include('partials.topbar-search-modal')
            @include('partials.topbar-notification-dropdown')
            @include('partials.topbar-chat')
            @include('partials.topbar-apps')
            @include('partials.topbar-user-dropdown')
        </div>
        <!-- End of Topbar -->
    </div>
    <!-- End of Container -->
</header>
<!-- End of Header -->