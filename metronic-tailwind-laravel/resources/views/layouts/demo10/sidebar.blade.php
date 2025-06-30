<!-- Sidebar -->
<div class="fixed top-0 bottom-0 z-20 hidden lg:flex flex-col shrink-0 w-(--sidebar-width) bg-background [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start flex top-0 bottom-0" id="sidebar">
    <!-- Sidebar Header -->
    <div class="flex items-center justify-between shrink-0 px-3.5 h-[70px]" id="sidebar_header">
        @include('partials.logo')
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
    <div class="flex flex-col gap-2 shrink-0 px-3.5" id="sidebar_footer">
        <a class="kt-btn kt-btn-outline w-full" href="#">
            <i class="ki-filled ki-questionnaire-tablet">
            </i>
            Docs & Components
        </a>
    </div>
    <!-- End of Footer -->
</div>
<!-- End of Sidebar -->