<div>

    <!-- Notifications -->
    <button class="kt-btn kt-btn-ghost kt-btn-icon hover:bg-primary/10 hover:[&_i]:text-primary size-9 rounded-full"
        data-kt-drawer-toggle="#notifications_drawer">
        <i class="ki-filled ki-notification-status text-lg">
        </i>
    </button>
    <!--Notifications Drawer-->
    <div class="kt-drawer kt-drawer-end card bottom-5 end-5 top-5 hidden w-[450px] max-w-[90%] flex-col rounded-xl border border-border"
        data-kt-drawer="true" data-kt-drawer-container="body" id="notifications_drawer">
        <div class="flex items-center justify-between gap-2.5 border-b border-b-border px-5 py-2.5 text-sm font-semibold text-mono"
            id="notifications_header">
            Notifications
            <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-dim shrink-0" data-kt-drawer-dismiss="true">
                <i class="ki-filled ki-cross">
                </i>
            </button>
        </div>
        <div class="kt-tabs kt-tabs-line mb-2 justify-between px-5" data-kt-tabs="true" id="notifications_tabs">
            <div class="flex items-center gap-5">
                <button class="kt-tab-toggle active py-3" data-kt-tab-toggle="#notifications_tab_all">
                    All
                </button>
                <button class="kt-tab-toggle relative py-3" data-kt-tab-toggle="#notifications_tab_inbox">
                    Inbox
                    <span
                        class="absolute end-0 top-2 size-[5px] translate-x-full translate-y-1/2 transform rounded-full bg-green-500 rtl:start-0">
                    </span>
                </button>
                <button class="kt-tab-toggle py-3" data-kt-tab-toggle="#notifications_tab_team">
                    Team
                </button>
                <button class="kt-tab-toggle py-3" data-kt-tab-toggle="#notifications_tab_following">
                    Following
                </button>
            </div>
            <div class="kt-menu" data-kt-menu="true">
                <div class="kt-menu-item" data-kt-menu-item-offset="0,10px" data-kt-menu-item-placement="bottom-end"
                    data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown"
                    data-kt-menu-item-trigger="click|lg:hover">
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
                        <div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0"
                            data-kt-menu-item-placement="right-start" data-kt-menu-item-toggle="dropdown"
                            data-kt-menu-item-trigger="click|lg:hover">
                            <div class="kt-menu-link">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-notification-status">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Export
                                </span>
                                <span class="kt-menu-arrow">
                                    <i class="ki-filled ki-right text-xs rtl:rotate-180 rtl:transform">
                                    </i>
                                </span>
                            </div>
                            <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
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
                                    <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
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
                                    <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
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
        <div class="flex grow flex-col" id="notifications_tab_all">
            <div class="kt-scrollable-y-auto grow" data-kt-scrollable="true" data-kt-scrollable-dependencies="#header"
                data-kt-scrollable-max-height="auto" data-kt-scrollable-offset="150px">
                <div class="divider-y divider-border flex grow flex-col gap-5 pb-4 pt-3">
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-4.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Joe Lincoln
                                    </a>
                                    <span class="text-secondary-foreground">
                                        mentioned you in
                                    </span>
                                    <a class="hover:text-primary text-primary" href="#">
                                        Latest Trends
                                    </a>
                                    <span class="text-secondary-foreground">
                                        topic
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    18 mins ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Web Design 2024
                                </span>
                            </div>
                            <div class="kt-card bg-muted/70 flex flex-col gap-2.5 rounded-lg p-3.5 shadow-none">
                                <div class="mb-px text-sm font-semibold text-secondary-foreground">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        @Cody
                                    </a>
                                    <span class="font-medium text-secondary-foreground">
                                        For an expert opinion, check out what Mike has to say on this topic!
                                    </span>
                                </div>
                                <div class="kt-input">
                                    <input placeholder="Reply" type="text" value="" />
                                    <button class="kt-btn kt-btn-ghost kt-btn-icon -me-1.5 size-6">
                                        <i class="ki-filled ki-picture">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-5.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Leslie Alexander
                                    </a>
                                    <span class="text-secondary-foreground">
                                        added new tags to
                                    </span>
                                    <a class="hover:text-primary text-primary" href="#">
                                        Web Redesign 2024
                                    </a>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    53 mins ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    ACME
                                </span>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <span class="kt-badge kt-badge-sm kt-badge-info kt-badge-outline">
                                    Client-Request
                                </span>
                                <span class="kt-badge kt-badge-sm kt-badge-warning kt-badge-outline">
                                    Figma
                                </span>
                                <span class="kt-badge kt-badge-sm kt-badge-secondary kt-badge-outline">
                                    Redesign
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5" id="notification_request_3">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-27.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Guy Hawkins
                                    </a>
                                    <span class="text-secondary-foreground">
                                        requested access to
                                    </span>
                                    <a class="hover:text-primary text-primary" href="#">
                                        AirSpace
                                    </a>
                                    <span class="text-secondary-foreground">
                                        project
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    14 hours ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Dev Team
                                </span>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button class="kt-btn kt-btn-outline kt-btn-sm"
                                    data-kt-dismiss="#notification_request_3">
                                    Decline
                                </button>
                                <button class="kt-btn kt-btn-mono kt-btn-sm"
                                    data-kt-dismiss="#notification_request_3">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-10.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-offline size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Jane Perez
                                    </a>
                                    <span class="text-secondary-foreground">
                                        invites you to review a file.
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    3 hours ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    742kb
                                </span>
                            </div>
                            <div
                                class="kt-card bg-muted/70 flex flex-row items-center gap-1.5 rounded-lg p-2.5 shadow-none">
                                <img class="h-5" src="assets/media/file-types/pdf.svg" />
                                <a class="hover:text-primary me-1 text-xs font-medium text-secondary-foreground"
                                    href="#">
                                    Launch_nov24.pptx
                                </a>
                                <span class="text-xs font-medium text-muted-foreground">
                                    Edited 39 mins ago
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-11.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="mb-px text-sm font-medium">
                                <a class="hover:text-primary font-semibold text-mono" href="#">
                                    Raymond Pawell
                                </a>
                                <span class="text-secondary-foreground">
                                    posted a new article
                                </span>
                                <a class="hover:text-primary text-primary" href="#">
                                    2024 Roadmap
                                </a>
                            </div>
                            <span class="flex items-center text-xs font-medium text-muted-foreground">
                                1 hour ago
                                <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                </span>
                                Roadmap
                            </span>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-14.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-offline size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Tyler Hero
                                    </a>
                                    <span class="text-secondary-foreground">
                                        wants to view your design project
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    3 day ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Metronic Launcher mockups
                                </span>
                            </div>
                            <div
                                class="kt-card bg-muted/70 flex flex-row items-center gap-1.5 rounded-lg p-2.5 shadow-none">
                                <div
                                    class="flex h-[30px] w-[26px] shrink-0 items-center justify-center rounded-sm border border-border bg-background">
                                    <img class="h-5" src="assets/media/file-types/figma.svg" />
                                </div>
                                <a class="hover:text-primary me-1 text-xs font-medium text-secondary-foreground"
                                    href="#">
                                    Launcher-UIkit.fig
                                </a>
                                <span class="text-xs font-medium text-muted-foreground">
                                    Edited 2 mins ago
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b border-b-border">
            </div>
            <div class="grid grid-cols-2 gap-2.5 p-5" id="notifications_all_footer">
                <button class="kt-btn kt-btn-outline justify-center">
                    Archive all
                </button>
                <button class="kt-btn kt-btn-outline justify-center">
                    Mark all as read
                </button>
            </div>
        </div>
        <div class="flex hidden grow flex-col" id="notifications_tab_inbox">
            <div class="kt-scrollable-y-auto grow" data-kt-scrollable="true"
                data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto"
                data-kt-scrollable-offset="150px">
                <div class="flex flex-col gap-5 pb-4 pt-3">
                    <div class="flex grow gap-2.5 px-5" id="notification_request_13">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-25.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Samuel Lee
                                    </a>
                                    <span class="text-secondary-foreground">
                                        requested to add user to
                                    </span>
                                    <a class="hover:text-primary text-primary font-semibold" href="#">
                                        TechSynergy
                                    </a>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    22 hours ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Dev Team
                                </span>
                            </div>
                            <div
                                class="kt-card bg-muted/70 flex flex-row items-center justify-between gap-1.5 rounded-lg px-2.5 py-2 shadow-none">
                                <div class="flex flex-col">
                                    <a class="hover:text-primary text-xs font-medium text-mono" href="#">
                                        Ronald Richards
                                    </a>
                                    <a class="hover:text-primary text-xs font-medium text-muted-foreground"
                                        href="#">
                                        ronald.richards@gmail.com
                                    </a>
                                </div>
                                <a class="hover:text-primary text-xs font-medium text-secondary-foreground"
                                    href="#">
                                    Go to profile
                                </a>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button class="kt-btn kt-btn-outline kt-btn-sm"
                                    data-kt-dismiss="#notification_request_13">
                                    Decline
                                </button>
                                <button class="kt-btn kt-btn-mono kt-btn-sm"
                                    data-kt-dismiss="#notification_request_13">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow items-center gap-2.5 px-5">
                        <div
                            class="flex size-8 items-center justify-center rounded-full border border-green-200 bg-green-50 dark:border-green-950">
                            <i class="ki-filled ki-check text-lg text-green-500">
                            </i>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span class="text-sm font-medium text-secondary-foreground">
                                You have succesfully verified your account
                            </span>
                            <span class="text-xs font-medium text-muted-foreground">
                                2 days ago
                            </span>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-34.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Ava Peterson
                                    </a>
                                    <span class="text-secondary-foreground">
                                        uploaded attachment
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    3 days ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    ACME
                                </span>
                            </div>
                            <div
                                class="kt-card bg-muted/70 flex flex-row items-center justify-between gap-1.5 rounded-lg p-2.5 shadow-none">
                                <div class="flex items-center gap-1.5">
                                    <img class="h-6" src="assets/media/file-types/xls.svg" />
                                    <div class="flex flex-col gap-0.5">
                                        <a class="hover:text-primary text-xs font-medium text-secondary-foreground"
                                            href="#">
                                            Redesign-2024.xls
                                        </a>
                                        <span class="text-xs font-medium text-muted-foreground">
                                            2.6 MB
                                        </span>
                                    </div>
                                </div>
                                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                    <svg fill="none" height="14" viewbox="0 0 14 14" width="14"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd"
                                            d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                        <path clip-rule="evenodd"
                                            d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                        <path clip-rule="evenodd"
                                            d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-29.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-3">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Ethan Parker
                                    </a>
                                    <span class="text-secondary-foreground">
                                        created a new tasks to
                                    </span>
                                    <a class="hover:text-primary text-primary" href="#">
                                        Site Sculpt
                                    </a>
                                    <span class="text-secondary-foreground">
                                        project
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    3 days ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Web Designer
                                </span>
                            </div>
                            <div class="kt-card bg-muted/70 gap-3.5 rounded-lg p-3.5 shadow-none">
                                <div class="flex flex-wrap items-center justify-between gap-2.5">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-xs font-medium text-mono">
                                            Location history is erased after Logging In
                                        </span>
                                        <span class="text-xs font-medium text-muted-foreground">
                                            Due Date: 15 May, 2024
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-6 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-3.png" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-6 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-2.png" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2.5">
                                    <span class="kt-badge kt-badge-sm kt-badge-success kt-badge-outline">
                                        Improvement
                                    </span>
                                    <span class="kt-badge kt-badge-sm kt-badge-destructive kt-badge-outline">
                                        Bug
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5" id="notification_request_3">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-30.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Benjamin Harris
                                    </a>
                                    <span class="text-secondary-foreground">
                                        requested to upgrade plan
                                    </span>
                                    <a class="hover:text-primary text-primary" href="#">
                                    </a>
                                    <span class="text-secondary-foreground">
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    4 days ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Marketing
                                </span>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button class="kt-btn kt-btn-outline kt-btn-sm"
                                    data-kt-dismiss="#notification_request_3">
                                    Decline
                                </button>
                                <button class="kt-btn kt-btn-mono kt-btn-sm"
                                    data-kt-dismiss="#notification_request_3">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-24.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="mb-px text-sm font-medium">
                                <a class="hover:text-primary font-semibold text-mono" href="#">
                                    Isaac Morgan
                                </a>
                                <span class="text-secondary-foreground">
                                    mentioned you in
                                </span>
                                <a class="hover:text-primary text-primary" href="#">
                                    Data Transmission
                                </a>
                                topic
                            </div>
                            <span class="flex items-center text-xs font-medium text-muted-foreground">
                                6 days ago
                                <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                </span>
                                Dev Team
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b border-b-border">
            </div>
            <div class="grid grid-cols-2 gap-2.5 p-5" id="notifications_inbox_footer">
                <button class="kt-btn kt-btn-outline justify-center">
                    Archive all
                </button>
                <button class="kt-btn kt-btn-outline justify-center">
                    Mark all as read
                </button>
            </div>
        </div>
        <div class="flex hidden grow flex-col" id="notifications_tab_team">
            <div class="kt-scrollable-y-auto grow" data-kt-scrollable="true"
                data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto"
                data-kt-scrollable-offset="150px">
                <div class="flex flex-col gap-5 pb-4 pt-3">
                    <div class="flex grow gap-2 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-15.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-3" id="notification_request_10">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Nova Hawthorne
                                    </a>
                                    <span class="text-secondary-foreground">
                                        sent you an meeting invation
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    2 days ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Dev Team
                                </span>
                            </div>
                            <div class="kt-card bg-muted/70 rounded-lg p-2.5 shadow-none">
                                <div class="flex flex-wrap items-center justify-between gap-2.5">
                                    <div class="flex items-center gap-2.5">
                                        <div class="border-primary/10 rounded-lg border">
                                            <div
                                                class="border-b-primary/10 bg-primary/10 flex items-center justify-center rounded-t-lg border-b">
                                                <span class="text-primary fw-medium p-1.5 text-xs">
                                                    Apr
                                                </span>
                                            </div>
                                            <div class="flex size-9 items-center justify-center">
                                                <span class="fw-semibold text-md tracking-tight text-mono">
                                                    12
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex flex-col gap-1.5">
                                            <a class="hover:text-primary text-xs font-medium text-secondary-foreground"
                                                href="#">
                                                Peparation For Release
                                            </a>
                                            <span class="text-xs font-medium text-secondary-foreground">
                                                9:00 PM - 10:00 PM
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-6 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-4.png" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-6 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-1.png" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-6 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-2.png" />
                                        </div>
                                        <div class="flex">
                                            <span
                                                class="hover:z-5 text-2xs relative inline-flex size-6 size-6 shrink-0 items-center justify-center rounded-full bg-green-500 font-semibold leading-none text-white ring-1 ring-background">
                                                +3
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button class="kt-btn kt-btn-outline kt-btn-sm"
                                    data-kt-dismiss="#notification_request_10">
                                    Decline
                                </button>
                                <button class="kt-btn kt-btn-mono kt-btn-sm"
                                    data-kt-dismiss="#notification_request_10">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-6.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="mb-px text-sm font-medium">
                                <a class="hover:text-primary font-semibold text-mono" href="#">
                                    Adrian Vale
                                </a>
                                <span class="text-secondary-foreground">
                                    change the due date of
                                </span>
                                <a class="hover:text-primary text-primary" href="#">
                                    Marketing
                                </a>
                                to 13 May
                            </div>
                            <span class="flex items-center text-xs font-medium text-muted-foreground">
                                2 days ago
                                <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                </span>
                                Marketing
                            </span>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-12.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Skylar Frost
                                    </a>
                                    <span class="text-secondary-foreground">
                                        uploaded 2 attachments
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    3 days ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Web Design
                                </span>
                            </div>
                            <div
                                class="kt-card bg-muted/70 flex flex-row items-center justify-between gap-1.5 rounded-lg p-2.5 shadow-none">
                                <div class="flex items-center gap-1.5">
                                    <img class="h-6" src="assets/media/file-types/word.svg" />
                                    <div class="flex flex-col gap-0.5">
                                        <a class="hover:text-primary text-xs font-medium text-secondary-foreground"
                                            href="#">
                                            Landing-page.docx
                                        </a>
                                        <span class="text-xs font-medium text-muted-foreground">
                                            1.9 MB
                                        </span>
                                    </div>
                                </div>
                                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                    <svg fill="none" height="14" viewbox="0 0 14 14" width="14"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd"
                                            d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                        <path clip-rule="evenodd"
                                            d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                        <path clip-rule="evenodd"
                                            d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                class="kt-card bg-muted/70 flex flex-row items-center justify-between gap-1.5 rounded-lg p-2.5 shadow-none">
                                <div class="flex items-center gap-1.5">
                                    <img class="h-6" src="assets/media/file-types/svg.svg" />
                                    <div class="flex flex-col gap-0.5">
                                        <a class="hover:text-primary text-xs font-medium text-secondary-foreground"
                                            href="#">
                                            New-icon.svg
                                        </a>
                                        <span class="text-xs font-medium text-muted-foreground">
                                            2.3 MB
                                        </span>
                                    </div>
                                </div>
                                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                    <svg fill="none" height="14" viewbox="0 0 14 14" width="14"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd"
                                            d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                        <path clip-rule="evenodd"
                                            d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                        <path clip-rule="evenodd"
                                            d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z"
                                            fill="#99A1B7" fill-rule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-21.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Selene Silverleaf
                                    </a>
                                    <span class="text-secondary-foreground">
                                        commented on
                                    </span>
                                    <a class="hover:text-primary text-primary" href="#">
                                        SiteSculpt
                                    </a>
                                    <span class="text-secondary-foreground">
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    4 days ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Manager
                                </span>
                            </div>
                            <div class="kt-card bg-muted/70 flex flex-col gap-2.5 rounded-lg p-3.5 shadow-none">
                                <div class="mb-px text-sm font-semibold text-secondary-foreground">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        @Cody
                                    </a>
                                    <span class="font-medium text-secondary-foreground">
                                        This
                                        design is simply stunning! From layout to color, it's a work of art!
                                    </span>
                                </div>
                                <div class="kt-input">
                                    <input placeholder="Reply" type="text" value="" />
                                    <button class="kt-btn kt-btn-ghost kt-btn-icon -me-1.5 size-6">
                                        <i class="ki-filled ki-picture">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5" id="notification_request_3">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-13.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Thalia Fox
                                    </a>
                                    <span class="text-secondary-foreground">
                                        has invited you
                                        to join
                                    </span>
                                    <a class="hover:text-primary text-primary" href="#">
                                        Design Research
                                    </a>
                                    <span class="text-secondary-foreground">
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    4 days ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Dev
                                    Team
                                </span>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button class="kt-btn kt-btn-outline kt-btn-sm"
                                    data-kt-dismiss="#notification_request_3">
                                    Decline
                                </button>
                                <button class="kt-btn kt-btn-mono kt-btn-sm"
                                    data-kt-dismiss="#notification_request_3">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b border-b-border">
            </div>
            <div class="grid grid-cols-2 gap-2.5 p-5" id="notifications_team_footer">
                <button class="kt-btn kt-btn-outline justify-center">
                    Archive all
                </button>
                <button class="kt-btn kt-btn-outline justify-center">
                    Mark all as read
                </button>
            </div>
        </div>
        <div class="flex hidden grow flex-col" id="notifications_tab_following">
            <div class="kt-scrollable-y-auto grow" data-kt-scrollable="true"
                data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto"
                data-kt-scrollable-offset="150px">
                <div class="flex flex-col gap-5 pb-4 pt-3">
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-1.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-2.5">
                            <div class="mb-1 flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Jane Perez
                                    </a>
                                    <span class="text-secondary-foreground">
                                        added 2 new works to
                                    </span>
                                    <a class="hover:text-primary text-primary font-semibold" href="#">
                                        Inspirations 2024
                                    </a>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    23 hours ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Craftwork Design
                                </span>
                            </div>
                            <div class="flex items-center gap-2.5">
                                <div class="kt-card bg-muted/70 flex w-40 flex-col gap-3.5 shadow-none">
                                    <div class="kt-card-rounded-t h-24 shrink-0 bg-cover bg-no-repeat"
                                        style="background-image: url('assets/media/images/600x600/6.jpg')">
                                    </div>
                                    <div class="px-2.5 pb-2">
                                        <a class="hover:text-primary mb-0.5 block text-xs font-medium leading-4 text-secondary-foreground"
                                            href="#">
                                            Geometric Patterns
                                        </a>
                                        <div class="text-xs font-medium text-muted-foreground">
                                            Token ID:
                                            <span class="text-xs font-medium text-secondary-foreground">
                                                81023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-card bg-muted/70 flex w-40 flex-col gap-3.5 shadow-none">
                                    <div class="kt-card-rounded-t h-24 shrink-0 bg-cover bg-no-repeat"
                                        style="background-image: url('assets/media/images/600x600/1.jpg')">
                                    </div>
                                    <div class="px-2.5 pb-2">
                                        <a class="hover:text-primary mb-0.5 block text-xs font-medium leading-4 text-secondary-foreground"
                                            href="#">
                                            Artistic Expressions
                                        </a>
                                        <div class="text-xs font-medium text-muted-foreground">
                                            Token ID:
                                            <span class="text-xs font-medium text-secondary-foreground">
                                                67890
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5" id="notification_request_17">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-19.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-2.5">
                            <div class="mb-1 flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Natalie Wood
                                    </a>
                                    <span class="text-secondary-foreground">
                                        wants to edit marketing project
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    1 day ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Designer
                                </span>
                            </div>
                            <div
                                class="kt-card bg-muted/70 flex flex-row items-center gap-1.5 rounded-lg p-2.5 shadow-none">
                                <div
                                    class="flex h-[30px] w-[26px] shrink-0 items-center justify-center rounded-sm border border-border bg-white">
                                    <img class="h-5" src="assets/media/brand-logos/jira.svg" />
                                </div>
                                <a class="hover:text-primary me-1 text-xs font-medium text-secondary-foreground"
                                    href="#">
                                    User-feedback.jira
                                </a>
                                <span class="text-xs font-medium text-muted-foreground">
                                    Edited 1 hour ago
                                </span>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button class="kt-btn kt-btn-outline kt-btn-sm"
                                    data-kt-dismiss="#notification_request_17">
                                    Decline
                                </button>
                                <button class="kt-btn kt-btn-mono kt-btn-sm"
                                    data-kt-dismiss="#notification_request_17">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-17.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-2.5">
                            <div class="mb-1 flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Aaron Foster
                                    </a>
                                    <span class="text-secondary-foreground">
                                        requested to view
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    3 day ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Larsen Ltd
                                </span>
                            </div>
                            <div
                                class="kt-card bg-muted/70 flex flex-row items-center gap-1.5 rounded-lg px-2.5 py-1.5 shadow-none">
                                <i class="ki-filled ki-user-tick text-base text-green-500">
                                </i>
                                <span class="text-sm font-medium text-green-500">
                                    You allowed Aaron to view
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-34.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="mb-px text-sm font-medium">
                                <a class="hover:text-primary font-semibold text-mono" href="#">
                                    Chloe Morgan
                                </a>
                                <span class="text-secondary-foreground">
                                    posted a new
                                    article
                                </span>
                                <a class="hover:text-primary text-primary" href="#">
                                    User Experience
                                </a>
                            </div>
                            <span class="flex items-center text-xs font-medium text-muted-foreground">
                                1 day ago
                                <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                </span>
                                Nexus
                            </span>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-9.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex grow flex-col gap-2.5">
                            <div class="mb-1 flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Gabriel Bennett
                                    </a>
                                    <span class="text-secondary-foreground">
                                        started connect you
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    3 day ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Development
                                </span>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button class="kt-btn kt-btn-sm kt-btn-outline">
                                    <i class="ki-filled ki-check-circle">
                                    </i>
                                    Connected
                                </button>
                                <button class="kt-btn kt-btn-mono kt-btn-sm">
                                    Go to profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-b-border">
                    </div>
                    <div class="flex grow gap-2.5 px-5" id="notification_request_3">
                        <div class="kt-avatar size-8">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-13.png" />
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3.5">
                            <div class="flex flex-col gap-1">
                                <div class="mb-px text-sm font-medium">
                                    <a class="hover:text-primary font-semibold text-mono" href="#">
                                        Thalia Fox
                                    </a>
                                    <span class="text-secondary-foreground">
                                        has invited you
                                        to join
                                    </span>
                                    <a class="hover:text-primary text-primary" href="#">
                                        Design Research
                                    </a>
                                    <span class="text-secondary-foreground">
                                    </span>
                                </div>
                                <span class="flex items-center text-xs font-medium text-muted-foreground">
                                    4 days ago
                                    <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                                    </span>
                                    Dev
                                    Team
                                </span>
                            </div>
                            <div class="flex flex-wrap gap-2.5">
                                <button class="kt-btn kt-btn-outline kt-btn-sm"
                                    data-kt-dismiss="#notification_request_3">
                                    Decline
                                </button>
                                <button class="kt-btn kt-btn-mono kt-btn-sm"
                                    data-kt-dismiss="#notification_request_3">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b border-b-border">
            </div>
            <div class="grid grid-cols-2 gap-2.5 p-5" id="notifications_following_footer">
                <button class="kt-btn kt-btn-outline justify-center">
                    Archive all
                </button>
                <button class="kt-btn kt-btn-outline justify-center">
                    Mark all as read
                </button>
            </div>
        </div>
    </div>
    <!--End of Notifications Drawer-->
    <!-- End of Notifications -->
</div>
