<!-- Sidebar -->
<div class="fixed top-0 bottom-0 z-20 hidden lg:flex flex-col shrink-0 w-(--sidebar-width) bg-background [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start flex top-0 bottom-0" id="sidebar">
    <!-- Sidebar Header -->
    <div class="flex items-center justify-between shrink-0 px-3.5 h-[70px]" id="sidebar_header">
        <div class="kt-menu kt-menu-default grow" data-kt-menu="true">
            <div class="kt-menu-item grow" data-kt-menu-item-offset="0px,0px" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover">
                <div class="kt-menu-label cursor-pointer text-mono font-medium grow justify-between">
                    <span class="text-base font-medium text-mono grow justify-start">
                    Metronic Team
                    </span>
                    <span class="kt-menu-arrow">
                    <i class="ki-filled ki-down">
                    </i>
                    </span>
                </div>
                <div class="kt-menu-dropdown w-48 py-2">
                    <div class="kt-menu-item">
                    <a class="kt-menu-link" href="html/demo7/public-profile/profiles/default.html" tabindex="0">
                        <span class="kt-menu-icon">
                        <i class="ki-filled ki-profile-circle">
                        </i>
                        </span>
                        <span class="kt-menu-title">
                        Public Profile
                        </span>
                    </a>
                    </div>
                    <div class="kt-menu-item">
                    <a class="kt-menu-link" href="html/demo7.html" tabindex="0">
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
                    <a class="kt-menu-link" href="html/demo7/network/get-started.html" tabindex="0">
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
                    <a class="kt-menu-link" href="html/demo7/authentication/get-started.html" tabindex="0">
                        <span class="kt-menu-icon">
                        <i class="ki-filled ki-security-user">
                        </i>
                        </span>
                        <span class="kt-menu-title">
                        Authentication
                        </span>
                    </a>
                    </div>
                </div>
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
    <div class="flex flex-col gap-2 shrink-0 px-3.5" id="sidebar_footer">
        <a class="kt-btn kt-btn-outline w-full" href="#">
            <i class="ki-filled ki-questionnaire-tablet">
            </i>
            Docs & Components
        </a>
        <a class="kt-btn kt-btn-primary w-full" href="#">
            <i class="ki-filled ki-plus-square">
            </i>
            Create Project
        </a>
    </div>
    <!-- End of Footer -->
</div>
<!-- End of Sidebar -->