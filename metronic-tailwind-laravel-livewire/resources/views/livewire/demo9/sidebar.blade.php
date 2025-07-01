<!--begin::Sidebar-->
<div class="hidden lg:flex flex-col flex-shrink-0 w-[--sidebar-width] transition-all duration-300" id="sidebar">
    <div class="h-full bg-light flex flex-col rounded-e-xl" data-kt-sticky="true" data-kt-sticky-name="sidebar" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-z-index="1" data-kt-sticky-enabled-breakpoint="{default: 'lg'}">
        <div class="p-5">
            <!--begin::Daterange-->
            <div class="relative" data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left">
                <button class="kt-btn kt-btn-outline w-full justify-between">
                    <span>
                        <i class="ki-filled ki-calendar-8">
                        </i>
                        <span>
                            January 22, 2024 - January 28, 2024
                        </span>
                    </span>
                    <i class="ki-filled ki-down">
                    </i>
                </button>
            </div>
            <!--end::Daterange-->
        </div>
        <div class="flex-grow">
            <!--begin::Menu-->
            <div class="kt-menu-primary" data-kt-menu="true">
                <div class="kt-menu-item">
                    <a class="kt-menu-link {{ request()->routeIs('demo9.index') ? 'active' : '' }}" href="{{ route('demo9.index') }}">
                        <span class="kt-menu-icon">
                            <i class="ki-filled ki-home-2">
                            </i>
                        </span>
                        <span class="kt-menu-title">
                            Home
                        </span>
                    </a>
                </div>
                <div class="kt-menu-item">
                    <a class="kt-menu-link {{ request()->routeIs('demo9.profile') ? 'active' : '' }}" href="{{ route('demo9.profile') }}">
                        <span class="kt-menu-icon">
                            <i class="ki-filled ki-profile-circle">
                            </i>
                        </span>
                        <span class="kt-menu-title">
                            My Profile
                        </span>
                    </a>
                </div>
                <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                        <span class="kt-menu-icon">
                            <i class="ki-filled ki-notification-on">
                            </i>
                        </span>
                        <span class="kt-menu-title">
                            Notifications
                        </span>
                        <span class="kt-menu-badge">
                            <span class="kt-badge kt-badge-sm kt-badge-primary">
                                3
                            </span>
                        </span>
                    </a>
                </div>
                <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                        <span class="kt-menu-icon">
                            <i class="ki-filled ki-calendar">
                            </i>
                        </span>
                        <span class="kt-menu-title">
                            Calendar
                        </span>
                    </a>
                </div>
                <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                        <span class="kt-menu-icon">
                            <i class="ki-filled ki-message-text-2">
                            </i>
                        </span>
                        <span class="kt-menu-title">
                            Messages
                        </span>
                    </a>
                </div>
                <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                        <span class="kt-menu-icon">
                            <i class="ki-filled ki-setting-2">
                            </i>
                        </span>
                        <span class="kt-menu-title">
                            Settings
                        </span>
                    </a>
                </div>
            </div>
            <!--end::Menu-->
        </div>
        <div class="p-5">
            <div class="flex flex-col gap-2">
                <a class="kt-btn kt-btn-outline flex-shrink-0" href="#">
                    <span>
                        View Statement
                    </span>
                    <i class="ki-filled ki-arrow-up">
                    </i>
                </a>
                <a class="kt-btn kt-btn-primary flex-shrink-0" href="#">
                    <span>
                        Make a payment
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>
<!--end::Sidebar-->