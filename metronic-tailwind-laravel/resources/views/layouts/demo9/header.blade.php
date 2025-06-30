<!-- Header -->
<header class="flex items-center h-(--header-height) shrink-0" id="header">
    <!-- Container -->
    <div class="kt-container-fluid flex items-center justify-between flex-wrap gap-3">
        <!--- Logo -->
        <div class="flex items-center gap-2.5">
            <a class="flex lg:hidden" href="html/demo9.html">
                <img class="min-h-[30px] dark:hidden" src="assets/media/app/mini-logo-dark.svg"/>
                <img class="hidden min-h-[30px] dark:inline-block" src="assets/media/app/mini-logo-dark.svg"/>
            </a>
        </div>
        <!--- End of Logo -->
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
