<div class="kt-modal" data-kt-modal="true" id="search_modal">
    <div class="kt-modal-content max-w-[600px] top-[15%]">
        <div class="kt-modal-header py-4 px-5">
            <i class="ki-filled ki-magnifier text-muted-foreground text-xl">
            </i>
            <input class="kt-input kt-input-ghost" name="query" placeholder="Tap to start search" type="text" value="" />
            <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-dim shrink-0" data-kt-modal-dismiss="true">
                <i class="ki-filled ki-cross">
                </i>
            </button>
        </div>
        <div class="kt-modal-body p-0 pb-5">
            <div class="kt-tabs kt-tabs-line justify-between px-5 mb-2.5" data-kt-tabs="true">
                <div class="flex items-center gap-5">
                    <button class="kt-tab-toggle py-5 active" data-kt-tab-toggle="#search_modal_mixed">
                        Mixed
                    </button>
                    <button class="kt-tab-toggle py-5" data-kt-tab-toggle="#search_modal_settings">
                        Settings
                    </button>
                    <button class="kt-tab-toggle py-5" data-kt-tab-toggle="#search_modal_integrations">
                        Integrations
                    </button>
                    <button class="kt-tab-toggle py-5" data-kt-tab-toggle="#search_modal_users">
                        Users
                    </button>
                    <button class="kt-tab-toggle py-5" data-kt-tab-toggle="#search_modal_docs">
                        Docs
                    </button>
                    <button class="kt-tab-toggle py-5" data-kt-tab-toggle="#search_modal_empty">
                        Empty
                    </button>
                    <button class="kt-tab-toggle py-5" data-kt-tab-toggle="#search_modal_no-results">
                        No Results
                    </button>
                </div>
                <div class="kt-menu -mt-px" data-kt-menu="true">
                    <div class="kt-menu-item" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-offset="0, 10px">
                        <button class="kt-menu-toggle kt-btn kt-btn-icon kt-btn-ghost">
                            <i class="ki-filled ki-setting-2">
                            </i>
                        </button>
                        <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="#">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-document">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        View
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover" data-kt-menu-item-placement="right-start" data-kt-menu-item-offset="-15px, 0">
                                <div class="kt-menu-link">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-notification-status">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        Export
                                    </span>
                                    <span class="kt-menu-arrow">
                                        <i class="ki-filled ki-right text-xs rtl:transform rtl:rotate-180">
                                        </i>
                                    </span>
                                </div>
                                <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link" href="{{ url('demo5/account/home/settings-sidebar') }}">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-sms">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title">
                                                Email
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link" href="{{ url('demo5/account/home/settings-sidebar') }}">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-message-notify">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title">
                                                SMS
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link" href="{{ url('demo5/account/home/settings-sidebar') }}">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-notification-status">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title">
                                                Push
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="#">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-pencil">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        Edit
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="#">
                                    <span class="kt-menu-icon">
                                        <i class="ki-filled ki-trash">
                                        </i>
                                    </span>
                                    <span class="kt-menu-title">
                                        Delete
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kt-scrollable-y-auto" data-kt-scrollable="true" data-kt-scrollable-max-height="auto" data-kt-scrollable-offset="300px">
                <div class="" id="search_modal_mixed">
                    <div class="flex flex-col gap-2.5">
                        <div>
                            <div class="text-xs text-secondary-foreground font-medium pt-2.5 pb-1.5 ps-5">
                                Settings
                            </div>
                            <div class="kt-menu kt-menu-default px-0.5 flex-col">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="#">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-badge">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title">
                                            Public Profile
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
                                            My Account
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="#">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-message-programming">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title">
                                            Devs Forum
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-b-border">
                        </div>
                        <div>
                            <div class="text-xs text-secondary-foreground font-medium pt-2.5 pb-1.5 ps-5">
                                Integrations
                            </div>
                            <div class="kt-menu kt-menu-default px-0.5 flex-col">
                                <div class="kt-menu-item">
                                    <div class="kt-menu-link flex items-center jistify-between gap-2">
                                        <div class="flex items-center grow gap-2">
                                            <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-border bg-accent/60">
                                                <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/jira.svg') }}" />
                                            </div>
                                            <div class="flex flex-col gap-0.5">
                                                <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                                    Jira
                                                </a>
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    Project management
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex justify-end shrink-0">
                                            <div class="flex -space-x-2">
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-4.png') }}" />
                                                </div>
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-1.png') }}" />
                                                </div>
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-2.png') }}" />
                                                </div>
                                                <div class="flex">
                                                    <span class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-6 text-white size-6 ring-background bg-green-500">
                                                        +3
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu-item">
                                    <div class="kt-menu-link flex items-center jistify-between gap-2">
                                        <div class="flex items-center grow gap-2">
                                            <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-border bg-accent/60">
                                                <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/inferno.svg') }}" />
                                            </div>
                                            <div class="flex flex-col gap-0.5">
                                                <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                                    Inferno
                                                </a>
                                                <span class="text-xs font-medium text-secondary-foreground">
                                                    Real-time photo sharing app
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex justify-end shrink-0">
                                            <div class="flex -space-x-2">
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-14.png') }}" />
                                                </div>
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-12.png') }}" />
                                                </div>
                                                <div class="flex">
                                                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-9.png') }}" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-b-border">
                        </div>
                        <div>
                            <div class="text-xs text-secondary-foreground font-medium pt-2.5 pb-1.5 ps-5">
                                Users
                            </div>
                            <div class="kt-menu kt-menu-default px-0.5 flex-col">
                                <div class="grid gap-1">
                                    <div class="kt-menu-item">
                                        <div class="kt-menu-link flex justify-between gap-2">
                                            <div class="flex items-center gap-2.5">
                                                <img alt="" class="rounded-full size-9 shrink-0" src="{{ asset('assets/media/avatars/300-3.png') }}" />
                                                <div class="flex flex-col">
                                                    <a class="text-sm font-semibold text-mono hover:text-primary mb-px" href="#">
                                                        Tyler Hero
                                                    </a>
                                                    <span class="text-2sm font-normal text-muted-foreground">
                                                        tyler.hero@gmail.com
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden" id="search_modal_settings">
                    <div class="kt-menu kt-menu-default px-0.5 flex-col">
                        <div class="text-xs text-secondary-foreground font-medium pt-2.5 ps-5 pb-1.5">
                            Shortcuts
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="#">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-home-2">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Go to Dashboard
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="#">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-badge">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Public Profile
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="#">
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
                                    <i class="ki-filled ki-setting-2">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    My Account
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="#">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-message-programming">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Devs Forum
                                </span>
                            </a>
                        </div>
                        <div class="text-xs text-secondary-foreground font-medium pt-2.5 ps-5 pt-2.5 pb-1.5">
                            Actions
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="#">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-user">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Create User
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="#">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-user-edit">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Create Team
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="#">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-subtitle">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Change Plan
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="#">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-setting">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Setup Branding
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="hidden" id="search_modal_integrations">
                    <div class="kt-menu kt-menu-default px-0.5 flex-col">
                        <div class="kt-menu-item">
                            <div class="kt-menu-link flex items-center jistify-between gap-2">
                                <div class="flex items-center grow gap-2">
                                    <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-border bg-accent/60">
                                        <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/jira.svg') }}" />
                                    </div>
                                    <div class="flex flex-col gap-0.5">
                                        <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                            Jira
                                        </a>
                                        <span class="text-xs font-medium text-secondary-foreground">
                                            Project management
                                        </span>
                                    </div>
                                </div>
                                <div class="flex justify-end shrink-0">
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-4.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-1.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-2.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <span class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-6 text-white size-6 ring-background bg-green-500">
                                                +3
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <div class="kt-menu-link flex items-center jistify-between gap-2">
                                <div class="flex items-center grow gap-2">
                                    <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-border bg-accent/60">
                                        <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/inferno.svg') }}" />
                                    </div>
                                    <div class="flex flex-col gap-0.5">
                                        <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                            Inferno
                                        </a>
                                        <span class="text-xs font-medium text-secondary-foreground">
                                            Real-time photo sharing app
                                        </span>
                                    </div>
                                </div>
                                <div class="flex justify-end shrink-0">
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-14.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-12.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-9.png') }}" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <div class="kt-menu-link flex items-center jistify-between gap-2">
                                <div class="flex items-center grow gap-2">
                                    <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-border bg-accent/60">
                                        <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/evernote.svg') }}" />
                                    </div>
                                    <div class="flex flex-col gap-0.5">
                                        <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                            Evernote
                                        </a>
                                        <span class="text-xs font-medium text-secondary-foreground">
                                            Notes management app
                                        </span>
                                    </div>
                                </div>
                                <div class="flex justify-end shrink-0">
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-6.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-3.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-1.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-8.png') }}" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <div class="kt-menu-link flex items-center jistify-between gap-2">
                                <div class="flex items-center grow gap-2">
                                    <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-border bg-accent/60">
                                        <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/gitlab.svg') }}" />
                                    </div>
                                    <div class="flex flex-col gap-0.5">
                                        <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                            Gitlab
                                        </a>
                                        <span class="text-xs font-medium text-secondary-foreground">
                                            Notes management app
                                        </span>
                                    </div>
                                </div>
                                <div class="flex justify-end shrink-0">
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-18.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-17.png') }}" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <div class="kt-menu-link flex items-center jistify-between gap-2">
                                <div class="flex items-center grow gap-2">
                                    <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-border bg-accent/60">
                                        <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/google-webdev.svg') }}" />
                                    </div>
                                    <div class="flex flex-col gap-0.5">
                                        <a class="text-sm font-semibold text-mono hover:text-primary" href="#">
                                            Google webdev
                                        </a>
                                        <span class="text-xs font-medium text-secondary-foreground">
                                            Building web expierences
                                        </span>
                                    </div>
                                </div>
                                <div class="flex justify-end shrink-0">
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-14.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-20.png') }}" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="{{ asset('assets/media/avatars/300-21.png') }}" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item px-4 pt-2">
                            <a class="kt-btn kt-btn-outline justify-center" href="#">
                                Go to Apps
                            </a>
                        </div>
                    </div>
                </div>
                <div class="hidden" id="search_modal_users">
                    <div class="kt-menu kt-menu-default px-0.5 flex-col">
                        <div class="grid gap-1">
                            <div class="kt-menu-item">
                                <div class="kt-menu-link flex justify-between gap-2">
                                    <div class="flex items-center gap-2.5">
                                        <img alt="" class="rounded-full size-9 shrink-0" src="{{ asset('assets/media/avatars/300-3.png') }}" />
                                        <div class="flex flex-col">
                                            <a class="text-sm font-semibold text-mono hover:text-primary mb-px" href="#">
                                                Tyler Hero
                                            </a>
                                            <span class="text-2sm font-normal text-muted-foreground">
                                                tyler.hero@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden" id="search_modal_docs">
                    <div class="kt-menu kt-menu-default px-0.5 flex-col">
                        <div class="grid">
                            <div class="kt-menu-item">
                                <div class="kt-menu-link flex items-center">
                                    <div class="flex items-center grow gap-2.5">
                                        <img src="{{ asset('assets/media/file-types/pdf.svg') }}" />
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold text-mono cursor-pointer hover:text-primary mb-px">
                                                Project-pitch.pdf
                                            </span>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                4.7 MB 26 Sep 2024 3:20 PM
                                            </span>
                                        </div>
                                    </div>
                                    <button class="kt-btn kt-btn-icon kt-btn-ghost kt-btn-sm">
                                        <i class="ki-filled ki-dots-vertical text-lg">
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div class="kt-menu-item">
                                <div class="kt-menu-link flex items-center">
                                    <div class="flex items-center grow gap-2.5">
                                        <img src="{{ asset('assets/media/file-types/doc.svg') }}" />
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold text-mono cursor-pointer hover:text-primary mb-px">
                                                Report-v1.docx
                                            </span>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                2.3 MB 1 Oct 2024 12:00 PM
                                            </span>
                                        </div>
                                    </div>
                                    <button class="kt-btn kt-btn-icon kt-btn-ghost kt-btn-sm">
                                        <i class="ki-filled ki-dots-vertical text-lg">
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div class="kt-menu-item">
                                <div class="kt-menu-link flex items-center">
                                    <div class="flex items-center grow gap-2.5">
                                        <img src="{{ asset('assets/media/file-types/javascript.svg') }}" />
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold text-mono cursor-pointer hover:text-primary mb-px">
                                                Framework-App.js
                                            </span>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                0.8 MB 17 Oct 2024 6:46 PM
                                            </span>
                                        </div>
                                    </div>
                                    <button class="kt-btn kt-btn-icon kt-btn-ghost kt-btn-sm">
                                        <i class="ki-filled ki-dots-vertical text-lg">
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div class="kt-menu-item">
                                <div class="kt-menu-link flex items-center">
                                    <div class="flex items-center grow gap-2.5">
                                        <img src="{{ asset('assets/media/file-types/ai.svg') }}" />
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold text-mono cursor-pointer hover:text-primary mb-px">
                                                Framework-App.js
                                            </span>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                0.8 MB 17 Oct 2024 6:46 PM
                                            </span>
                                        </div>
                                    </div>
                                    <button class="kt-btn kt-btn-icon kt-btn-ghost kt-btn-sm">
                                        <i class="ki-filled ki-dots-vertical text-lg">
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div class="kt-menu-item">
                                <div class="kt-menu-link flex items-center">
                                    <div class="flex items-center grow gap-2.5">
                                        <img src="{{ asset('assets/media/file-types/php.svg') }}" />
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold text-mono cursor-pointer hover:text-primary mb-px">
                                                appController.js
                                            </span>
                                            <span class="text-xs font-medium text-muted-foreground">
                                                0.1 MB 21 Nov 2024 3:20 PM
                                            </span>
                                        </div>
                                    </div>
                                    <button class="kt-btn kt-btn-icon kt-btn-ghost kt-btn-sm">
                                        <i class="ki-filled ki-dots-vertical text-lg">
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div class="kt-menu-item px-4 pt-2.5">
                                <a class="kt-btn kt-btn-outline justify-center" href="#">
                                    Go to Users
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden" id="search_modal_empty">
                    <div class="flex flex-col text-center py-9 gap-5">
                        <div class="flex justify-center">
                            <img alt="image" class="dark:hidden max-h-[113px]" src="{{ asset('assets/media/illustrations/33.svg') }}" />
                            <img alt="image" class="light:hidden max-h-[113px]" src="{{ asset('assets/media/illustrations/33-dark.svg') }}" />
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <h3 class="text-base font-semibold text-mono text-center">
                                Looking for something..
                            </h3>
                            <span class="text-sm font-medium text-center text-secondary-foreground">
                                Initiate your digital experience with
                                <br />
                                our intuitive dashboard
                            </span>
                        </div>
                        <div class="flex justify-center">
                            <a class="kt-btn kt-btn-outline flex justify-center" href="#">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
                <div class="hidden" id="search_modal_no-results">
                    <div class="flex flex-col text-center py-9 gap-5">
                        <div class="flex justify-center">
                            <img alt="image" class="dark:hidden max-h-[113px]" src="{{ asset('assets/media/illustrations/33.svg') }}" />
                            <img alt="image" class="light:hidden max-h-[113px]" src="{{ asset('assets/media/illustrations/33-dark.svg') }}" />
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <h3 class="text-base font-semibold text-mono text-center">
                                No Results Found
                            </h3>
                            <span class="text-sm font-medium text-center text-secondary-foreground">
                                Refine your query to discover relevant items
                            </span>
                        </div>
                        <div class="flex justify-center">
                            <a class="kt-btn kt-btn-outline flex justify-center" href="#">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>