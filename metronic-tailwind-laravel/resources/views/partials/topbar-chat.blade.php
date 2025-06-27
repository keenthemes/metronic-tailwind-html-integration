<div>

    <!-- Chat -->
    <button class="kt-btn kt-btn-ghost kt-btn-icon hover:bg-primary/10 hover:[&_i]:text-primary size-9 rounded-full"
        data-kt-drawer-toggle="#chat_drawer">
        <i class="ki-filled ki-messages text-lg">
        </i>
    </button>
    <!--Chat Drawer-->
    <div class="kt-drawer kt-drawer-end card bottom-5 end-5 top-5 hidden w-[450px] max-w-[90%] flex-col rounded-xl border border-border"
        data-kt-drawer="true" data-kt-drawer-container="body" id="chat_drawer">
        <div>
            <div class="flex items-center justify-between gap-2.5 px-5 py-3.5 text-sm font-semibold text-mono">
                Chat
                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-dim shrink-0" data-kt-drawer-dismiss="true">
                    <i class="ki-filled ki-cross">
                    </i>
                </button>
            </div>
            <div class="border-b border-b-border">
            </div>
            <div class="border-b border-border py-2.5">
                <div class="flex flex-wrap items-center justify-between gap-2 px-5">
                    <div class="flex flex-wrap items-center gap-2">
                        <div
                            class="bg-accent/60 flex size-11 shrink-0 items-center justify-center rounded-full border border-border">
                            <img alt="" class="size-7" src="assets/media/brand-logos/gitlab.svg" />
                        </div>
                        <div class="flex flex-col">
                            <a class="hover:text-primary text-sm font-semibold text-mono" href="#">
                                HR Team
                            </a>
                            <span class="text-xs font-medium italic text-muted-foreground">
                                Jessy is typing..
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <div class="flex -space-x-2">
                            <div class="flex">
                                <img class="hover:z-5 relative size-[30px] shrink-0 rounded-full ring-1 ring-background"
                                    src="assets/media/avatars/300-4.png" />
                            </div>
                            <div class="flex">
                                <img class="hover:z-5 relative size-[30px] shrink-0 rounded-full ring-1 ring-background"
                                    src="assets/media/avatars/300-1.png" />
                            </div>
                            <div class="flex">
                                <img class="hover:z-5 relative size-[30px] shrink-0 rounded-full ring-1 ring-background"
                                    src="assets/media/avatars/300-2.png" />
                            </div>
                            <div class="flex">
                                <span
                                    class="hover:z-5 text-2xs relative inline-flex size-6 size-[30px] shrink-0 items-center justify-center rounded-full bg-green-500 font-semibold leading-none text-white ring-1 ring-background">
                                    +10
                                </span>
                            </div>
                        </div>
                        <div class="kt-menu" data-kt-menu="true">
                            <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px"
                                data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start"
                                data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                                <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                    <i class="ki-filled ki-dots-vertical text-lg">
                                    </i>
                                </button>
                                <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]"
                                    data-kt-menu-dismiss="true">
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link" href="html/demo1/account/members/teams.html">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-users">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title">
                                                Invite Users
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0"
                                        data-kt-menu-item-placement="right-start" data-kt-menu-item-toggle="dropdown"
                                        data-kt-menu-item-trigger="click|lg:hover">
                                        <div class="kt-menu-link">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-people">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title">
                                                Team
                                            </span>
                                            <span class="kt-menu-arrow">
                                                <i class="ki-filled ki-right text-xs rtl:rotate-180 rtl:transform">
                                                </i>
                                            </span>
                                        </div>
                                        <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/account/members/import-members.html">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-shield-search">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        Find Members
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/account/members/import-members.html">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-calendar">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        Meetings
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/account/members/import-members.html">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-filter-edit">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        Group Settings
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link"
                                            href="html/demo1/account/security/privacy-settings.html">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-setting-3">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title">
                                                Settings
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="kt-scrollable-y-auto grow" data-kt-scrollable="true" data-kt-scrollable-dependencies="#header"
            data-kt-scrollable-max-height="auto" data-kt-scrollable-offset="230px">
            <div class="flex flex-col gap-5 py-5">
                <div class="flex items-end gap-3.5 px-5">
                    <img alt="" class="size-9 rounded-full" src="assets/media/avatars/300-5.png" />
                    <div class="flex flex-col gap-1.5">
                        <div
                            class="kt-card bg-accent/60 rounded-bs-none text-2sm flex flex-col gap-2.5 p-3 shadow-none">
                            Next week we are closing the project. Do You have questions?
                        </div>
                        <span class="text-xs font-medium text-muted-foreground">
                            14:04
                        </span>
                    </div>
                </div>
                <div class="flex items-end justify-end gap-3.5 px-5">
                    <div class="flex flex-col gap-1.5">
                        <div class="kt-card bg-primary rounded-be-none flex flex-col gap-2.5 p-3 shadow-none">
                            <p class="text-2sm text-primary-foreground font-medium">
                                This is excellent news!
                            </p>
                        </div>
                        <div class="relative flex items-center justify-end gap-2">
                            <span class="text-xs font-medium text-secondary-foreground">
                                14:08
                            </span>
                            <i class="ki-filled ki-double-check absolute text-lg text-green-500">
                            </i>
                        </div>
                    </div>
                    <div class="relative shrink-0">
                        <div class="kt-avatar size-9">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-2.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-end gap-3.5 px-5">
                    <img alt="" class="size-9 rounded-full" src="assets/media/avatars/300-4.png" />
                    <div class="flex flex-col gap-1.5">
                        <div
                            class="kt-card bg-accent/60 rounded-bs-none text-2sm flex flex-col gap-2.5 p-3 shadow-none">
                            I have checked the features, can not wait to demo them!
                        </div>
                        <span class="text-xs font-medium text-muted-foreground">
                            14:26
                        </span>
                    </div>
                </div>
                <div class="flex items-end gap-3.5 px-5">
                    <img alt="" class="size-9 rounded-full" src="assets/media/avatars/300-1.png" />
                    <div class="flex flex-col gap-1.5">
                        <div
                            class="kt-card bg-accent/60 rounded-bs-none text-2sm flex flex-col gap-2.5 p-3 shadow-none">
                            I have looked over the rollout plan, and everything seems spot on.
                        </div>
                        <span class="text-xs font-medium text-muted-foreground">
                            15:09
                        </span>
                    </div>
                </div>
                <div class="flex items-end justify-end gap-3.5 px-5">
                    <div class="flex flex-col gap-1.5">
                        <div class="kt-card bg-primary rounded-be-none flex flex-col gap-2.5 p-3 shadow-none">
                            <p class="text-2sm text-primary-foreground font-medium">
                                Haven't seen the build yet, I'll look now.
                            </p>
                        </div>
                        <div class="relative flex items-center justify-end gap-2">
                            <span class="text-xs font-medium text-secondary-foreground">
                                15:52
                            </span>
                            <i class="ki-filled ki-double-check absolute text-lg text-muted-foreground">
                            </i>
                        </div>
                    </div>
                    <div class="relative shrink-0">
                        <div class="kt-avatar size-9">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-2.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-end justify-end gap-3.5 px-5">
                    <div class="flex flex-col gap-1.5">
                        <div class="kt-card bg-primary rounded-be-none flex flex-col gap-2.5 p-3 shadow-none">
                            <p class="text-2sm text-primary-foreground font-medium">
                                Checking the build now
                            </p>
                        </div>
                        <div class="relative flex items-center justify-end gap-2">
                            <span class="text-xs font-medium text-secondary-foreground">
                                15:52
                            </span>
                            <i class="ki-filled ki-double-check absolute text-lg text-muted-foreground">
                            </i>
                        </div>
                    </div>
                    <div class="relative shrink-0">
                        <div class="kt-avatar size-9">
                            <div class="kt-avatar-image">
                                <img alt="avatar" src="assets/media/avatars/300-2.png">
                                </img>
                            </div>
                            <div class="kt-avatar-indicator -bottom-2 -end-2">
                                <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-end gap-3.5 px-5">
                    <img alt="" class="size-9 rounded-full" src="assets/media/avatars/300-4.png" />
                    <div class="flex flex-col gap-1.5">
                        <div
                            class="kt-card bg-accent/60 rounded-bs-none text-2sm flex flex-col gap-2.5 p-3 shadow-none">
                            Tomorrow, I will send the link for the meeting
                        </div>
                        <span class="text-xs font-medium text-muted-foreground">
                            17:40
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!--Chat Footer-->
        <div class="mb-2.5">
            <div class="bg-accent/60 mb-2.5 flex grow gap-2 border-y border-border px-5 py-3.5" id="join_request">
                <div class="kt-avatar size-9">
                    <div class="kt-avatar-image">
                        <img alt="avatar" src="assets/media/avatars/300-14.png">
                        </img>
                    </div>
                    <div class="kt-avatar-indicator -bottom-2 -end-2">
                        <div class="kt-avatar-status kt-avatar-status-online size-2.5">
                        </div>
                    </div>
                </div>
                <div class="flex grow items-center justify-between gap-3">
                    <div class="flex flex-col">
                        <div class="mb-px text-sm">
                            <a class="hover:text-primary font-semibold text-mono" href="#">
                                Jane Perez
                            </a>
                            <span class="text-secondary-foreground">
                                wants to join chat
                            </span>
                        </div>
                        <span class="flex items-center text-xs font-medium text-muted-foreground">
                            1 day ago
                            <span class="mx-1.5 size-1 rounded-full bg-mono/30">
                            </span>
                            Design Team
                        </span>
                    </div>
                    <div class="flex gap-2.5">
                        <button class="kt-btn kt-btn-sm kt-btn-outline kt-btn-sm" data-kt-dismiss="#join_request">
                            Decline
                        </button>
                        <button class="kt-btn kt-btn-sm kt-btn-mono kt-btn-sm">
                            Accept
                        </button>
                    </div>
                </div>
            </div>
            <div class="relative mx-5 grow">
                <img alt="" class="absolute start-0 top-2/4 ms-2.5 size-[30px] -translate-y-2/4 rounded-full"
                    src="assets/media/avatars/300-2.png">
                <input class="kt-input h-auto bg-transparent py-4 ps-12" placeholder="Write a message..."
                    type="text" value="" />
                <div class="absolute end-3 top-1/2 flex -translate-y-1/2 items-center gap-2.5">
                    <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                        <i class="ki-filled ki-exit-up">
                        </i>
                    </button>
                    <a class="kt-btn kt-btn-mono kt-btn-sm" href="#">
                        Send
                    </a>
                </div>
                </img>
            </div>
        </div>
        <!--End of Chat Footer-->
    </div>
    <!--End of Chat Drawer-->
    <!-- End of Chat -->
</div>
