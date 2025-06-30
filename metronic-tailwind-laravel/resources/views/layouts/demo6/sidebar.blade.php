<!-- Sidebar -->
<div class="fixed top-0 bottom-0 z-20 hidden lg:flex flex-col shrink-0 w-(--sidebar-width) bg-muted [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start flex top-0 bottom-0" id="sidebar">
    <!-- Sidebar Header -->
    <div id="sidebar_header">
        <div class="flex items-center gap-2.5 px-3.5 h-[70px]">
            <a href="html/demo6/index.html">
                <img class="dark:hidden h-[42px]" src="assets/media/app/mini-logo-circle.svg"/>
                <img class="hidden dark:inline-block h-[42px]" src="assets/media/app/mini-logo-circle-dark.svg"/>
            </a>
            @include('partials.logo')
        </div>
        <div class="pt-2.5 px-3.5 mb-1">
            <div class="kt-input">
                <i class="ki-filled ki-magnifier">
                </i>
                <input class="min-w-0" placeholder="Search" type="text" value=""/>
                <span class="text-xs text-secondary-foreground text-nowrap">
                cmd + /
                </span>
            </div>
        </div>
    </div>
    <!-- End of Sidebar Header -->
    <!-- Sidebar menu -->
    <div class="flex items-stretch grow shrink-0 justify-center my-5" id="sidebar_menu">
        <div class="kt-scrollable-y-auto grow" data-kt-scrollable="true" data-kt-scrollable-dependencies="#sidebar_header, #sidebar_footer" data-kt-scrollable-height="auto" data-kt-scrollable-offset="0px" data-kt-scrollable-wrappers="#sidebar_menu">
            @include('partials.sidebar-menu')
        </div>
    </div>
    <!-- End of Sidebar kt-menu-->
    <!-- Footer -->
    <div class="flex flex-center justify-between shrink-0 ps-4 pe-3.5 mb-3.5" id="sidebar_footer">
        @include('partials.topbar-user-dropdown')
        <div class="flex items-center gap-1.5">
            @include('partials.topbar-notification-dropdown')
        </div>
    </div>
    <!-- End of Footer -->
    </div>
<!-- End of Sidebar -->