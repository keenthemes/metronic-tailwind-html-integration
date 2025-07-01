<!-- Sidebar -->
<div class="fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 bg-muted [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start flex" id="sidebar">
    <div class="hidden lg:flex items-center justify-center shrink-0 pt-8 pb-3.5" id="sidebar_header">
        <a href="#">
            <img class="dark:hidden min-h-[42px]" src="{{ asset('assets/media/app/mini-logo-square-gray.svg') }}"/>
            <img class="hidden dark:block min-h-[42px]" src="{{ asset('assets/media/app/mini-logo-square-gray-dark.svg') }}"/>
        </a>
    </div>
    <div class="kt-scrollable-y-hover grow gap-2.5 shrink-0 flex items-center pt-5 lg:pt-0 ps-3 pe-3 lg:pe-0 flex-col" data-kt-scrollable="true" data-kt-scrollable-dependencies="#sidebar_header,#sidebar_footer" data-kt-scrollable-height="auto" data-kt-scrollable-offset="80px" data-kt-scrollable-wrappers="#sidebar_menu_wrapper" id="sidebar_menu_wrapper">
        <livewire:demo8.partials.sidebar-menu />
    </div>
	<livewire:demo8.partials.sidebar-footer />
</div>
<!-- End of Sidebar -->
