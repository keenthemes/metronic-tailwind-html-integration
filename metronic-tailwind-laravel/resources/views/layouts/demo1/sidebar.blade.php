<!-- Sidebar -->
<div class="kt-sidebar fixed bottom-0 top-0 z-20 hidden shrink-0 flex-col items-stretch border-e border-e-border bg-background [--kt-drawer-enable:true] lg:flex lg:[--kt-drawer-enable:false]"
    data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start top-0 bottom-0" id="sidebar">
    <div class="kt-sidebar-header relative hidden shrink-0 items-center justify-between px-3 lg:flex lg:px-6"
        id="sidebar_header">
        <a class="dark:hidden" href="html/demo1.html">
            <img class="default-logo min-h-[22px] max-w-none" src="assets/media/app/default-logo.svg" />
            <img class="small-logo min-h-[22px] max-w-none" src="assets/media/app/mini-logo.svg" />
        </a>
        <a class="hidden dark:block" href="html/demo1.html">
            <img class="default-logo min-h-[22px] max-w-none" src="assets/media/app/default-logo-dark.svg" />
            <img class="small-logo min-h-[22px] max-w-none" src="assets/media/app/mini-logo.svg" />
        </a>
        <button
            class="kt-btn kt-btn-outline kt-btn-icon absolute start-full top-2/4 size-[30px] -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4"
            data-kt-toggle="body" data-kt-toggle-class="kt-sidebar-collapse" id="sidebar_toggle">
            <i
                class="ki-filled ki-black-left-line kt-toggle-active:rotate-180 rtl:translate rtl:kt-toggle-active:rotate-0 transition-all duration-300 rtl:rotate-180">
            </i>
        </button>
    </div>
    <div class="kt-sidebar-content flex shrink-0 grow py-5 pe-2" id="sidebar_content">
        <div class="kt-scrollable-y-hover flex shrink-0 grow pe-1 ps-2 lg:pe-3 lg:ps-5" data-kt-scrollable="true"
            data-kt-scrollable-dependencies="#sidebar_header" data-kt-scrollable-height="auto"
            data-kt-scrollable-offset="0px" data-kt-scrollable-wrappers="#sidebar_content" id="sidebar_scrollable">
            <!-- Sidebar Menu -->
            <div class="kt-menu flex grow flex-col gap-1" data-kt-menu="true" data-kt-menu-accordion-expand-all="false"
                id="sidebar_menu">
                <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
                    <div class="kt-menu-link flex grow cursor-pointer items-center gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-element-11 text-lg">
                            </i>
                        </span>
                        <span
                            class="kt-menu-title kt-menu-item-active:text-primary kt-menu-link-hover:!text-primary text-sm font-medium text-foreground">
                            Dashboards
                        </span>
                        <span class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                            <span class="kt-menu-item-show:hidden inline-flex">
                                <i class="ki-filled ki-plus text-[11px]">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-[11px]">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div
                        class="kt-menu-accordion relative gap-1 ps-[10px] before:absolute before:bottom-0 before:start-[20px] before:top-0 before:border-s before:border-border">
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Light Sidebar
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/dashboards/dark-sidebar.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Dark Sidebar
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="kt-menu-item pt-2.25 pb-px">
                    <span
                        class="kt-menu-heading pe-[10px] ps-[10px] text-xs font-medium uppercase text-muted-foreground">
                        User
                    </span>
                </div>
                <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
                    <div class="kt-menu-link flex grow cursor-pointer items-center gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-profile-circle text-lg">
                            </i>
                        </span>
                        <span
                            class="kt-menu-title kt-menu-item-active:text-primary kt-menu-link-hover:!text-primary text-sm font-medium text-foreground">
                            Public Profile
                        </span>
                        <span class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                            <span class="kt-menu-item-show:hidden inline-flex">
                                <i class="ki-filled ki-plus text-[11px]">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-[11px]">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div
                        class="kt-menu-accordion relative gap-1 ps-[10px] before:absolute before:bottom-0 before:start-[20px] before:top-0 before:border-s before:border-border">
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Profiles
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/profiles/default.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Default
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/profiles/creator.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Creator
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/profiles/company.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Company
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/profiles/nft.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            NFT
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/profiles/blogger.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Blogger
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/profiles/crm.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            CRM
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item flex-col-reverse" data-kt-menu-item-toggle="accordion"
                                    data-kt-menu-item-trigger="click">
                                    <div class="kt-menu-link grow cursor-pointer gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                        tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span class="kt-menu-title text-2sm font-normal text-secondary-foreground">
                                            <span class="kt-menu-item-show:!flex hidden">
                                                Show less
                                            </span>
                                            <span class="kt-menu-item-show:hidden flex">
                                                Show 4 more
                                            </span>
                                        </span>
                                        <span
                                            class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                            <span class="kt-menu-item-show:hidden inline-flex">
                                                <i class="ki-filled ki-plus text-[11px]">
                                                </i>
                                            </span>
                                            <span class="kt-menu-item-show:inline-flex hidden">
                                                <i class="ki-filled ki-minus text-[11px]">
                                                </i>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="kt-menu-accordion gap-1">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/public-profile/profiles/gamer.html" tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Gamer
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/public-profile/profiles/feeds.html" tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Feeds
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/public-profile/profiles/plain.html" tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Plain
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/public-profile/profiles/modal.html" tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Modal
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Projects
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/projects/3-columns.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            3 Columns
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/projects/2-columns.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            2 Columns
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/public-profile/works.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Works
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/public-profile/teams.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Teams
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/public-profile/network.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Network
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/public-profile/activity.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Activity
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item flex-col-reverse" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span class="kt-menu-title text-2sm font-normal text-secondary-foreground">
                                    <span class="kt-menu-item-show:!flex hidden">
                                        Show less
                                    </span>
                                    <span class="kt-menu-item-show:hidden flex">
                                        Show 3 more
                                    </span>
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div class="kt-menu-accordion gap-1">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/campaigns/card.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Campaigns - Card
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/campaigns/list.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Campaigns - List
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/public-profile/empty.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Empty
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
                    <div class="kt-menu-link flex grow cursor-pointer items-center gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-setting-2 text-lg">
                            </i>
                        </span>
                        <span
                            class="kt-menu-title kt-menu-item-active:text-primary kt-menu-link-hover:!text-primary text-sm font-medium text-foreground">
                            My Account
                        </span>
                        <span
                            class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                            <span class="kt-menu-item-show:hidden inline-flex">
                                <i class="ki-filled ki-plus text-[11px]">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-[11px]">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div
                        class="kt-menu-accordion relative gap-1 ps-[10px] before:absolute before:bottom-0 before:start-[20px] before:top-0 before:border-s before:border-border">
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Account Home
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/home/get-started.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Get Started
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/home/user-profile.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            User Profile
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/home/company-profile.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Company Profile
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/home/settings-sidebar.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Settings - With Sidebar
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/home/settings-enterprise.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Settings - Enterprise
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/home/settings-plain.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Settings - Plain
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/home/settings-modal.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Settings - Modal
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Billing
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/billing/basic.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Billing - Basic
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/billing/enterprise.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Billing - Enterprise
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/billing/plans.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Plans
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/billing/history.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Billing History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Security
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/security/get-started.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Get Started
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/security/overview.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Security Overview
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/security/allowed-ip-addresses.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Allowed IP Addresses
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/security/privacy-settings.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Privacy Settings
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/security/device-management.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Device Management
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/security/backup-and-recovery.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Backup & Recovery
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/security/current-sessions.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Current Sessions
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/security/security-log.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Security Log
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Members & Roles
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/team-starter.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Teams Starter
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/teams.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Teams
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/team-info.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Team Info
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/members-starter.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Members Starter
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/team-members.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Team Members
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/import-members.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Import Members
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/roles.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Roles
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/permissions-toggle.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Permissions - Toggler
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/members/permissions-check.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Permissions - Check
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/account/integrations.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Integrations
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/account/notifications.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Notifications
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/account/api-keys.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    API Keys
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item flex-col-reverse" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span class="kt-menu-title text-2sm font-normal text-secondary-foreground">
                                    <span class="kt-menu-item-show:!flex hidden">
                                        Show less
                                    </span>
                                    <span class="kt-menu-item-show:hidden flex">
                                        Show 3 more
                                    </span>
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div class="kt-menu-accordion gap-1">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/appearance.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Appearance
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/invite-a-friend.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Invite a Friend
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/account/activity.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Activity
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
                    <div class="kt-menu-link flex grow cursor-pointer items-center gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-users text-lg">
                            </i>
                        </span>
                        <span
                            class="kt-menu-title kt-menu-item-active:text-primary kt-menu-link-hover:!text-primary text-sm font-medium text-foreground">
                            Network
                        </span>
                        <span
                            class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                            <span class="kt-menu-item-show:hidden inline-flex">
                                <i class="ki-filled ki-plus text-[11px]">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-[11px]">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div
                        class="kt-menu-accordion relative gap-1 ps-[10px] before:absolute before:bottom-0 before:start-[20px] before:top-0 before:border-s before:border-border">
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/network/get-started.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Get Started
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    User Cards
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-cards/mini-cards.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Mini Cards
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-cards/team-crew.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Team Crew
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-cards/author.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Author
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-cards/nft.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            NFT
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-cards/social.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Social
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    User Table
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-table/team-crew.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Team Crew
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-table/app-roster.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            App Roster
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-table/market-authors.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Market Authors
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-table/saas-users.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            SaaS Users
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-table/store-clients.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Store Clients
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/network/user-table/visitors.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Visitors
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <div class="kt-menu-label grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                href="#" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span class="kt-menu-title text-2sm font-normal text-foreground">
                                    Cooperations
                                </span>
                                <span class="kt-menu-badge me-[-10px]">
                                    <span class="kt-badge kt-badge-sm text-accent-foreground/60">
                                        Soon
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <div class="kt-menu-label grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                href="#" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span class="kt-menu-title text-2sm font-normal text-foreground">
                                    Leads
                                </span>
                                <span class="kt-menu-badge me-[-10px]">
                                    <span class="kt-badge kt-badge-sm text-accent-foreground/60">
                                        Soon
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <div class="kt-menu-label grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                href="#" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span class="kt-menu-title text-2sm font-normal text-foreground">
                                    Donators
                                </span>
                                <span class="kt-menu-badge me-[-10px]">
                                    <span class="kt-badge kt-badge-sm text-accent-foreground/60">
                                        Soon
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
                    <div class="kt-menu-link flex grow cursor-pointer items-center gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-security-user text-lg">
                            </i>
                        </span>
                        <span
                            class="kt-menu-title kt-menu-item-active:text-primary kt-menu-link-hover:!text-primary text-sm font-medium text-foreground">
                            Authentication
                        </span>
                        <span
                            class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                            <span class="kt-menu-item-show:hidden inline-flex">
                                <i class="ki-filled ki-plus text-[11px]">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-[11px]">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div
                        class="kt-menu-accordion relative gap-1 ps-[10px] before:absolute before:bottom-0 before:start-[20px] before:top-0 before:border-s before:border-border">
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Classic
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/authentication/classic/sign-in.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Sign In
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/authentication/classic/sign-up.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Sign Up
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/authentication/classic/2fa.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            2FA
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/authentication/classic/check-email.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Check Email
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                                    data-kt-menu-item-trigger="click">
                                    <div class="kt-menu-link grow cursor-pointer gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                        tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                            Reset Password
                                        </span>
                                        <span
                                            class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                            <span class="kt-menu-item-show:hidden inline-flex">
                                                <i class="ki-filled ki-plus text-[11px]">
                                                </i>
                                            </span>
                                            <span class="kt-menu-item-show:inline-flex hidden">
                                                <i class="ki-filled ki-minus text-[11px]">
                                                </i>
                                            </span>
                                        </span>
                                    </div>
                                    <div
                                        class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/authentication/classic/reset-password/enter-email.html"
                                                tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Enter Email
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/authentication/classic/reset-password/check-email.html"
                                                tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Check Email
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/authentication/classic/reset-password/change-password.html"
                                                tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Change Password
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/authentication/classic/reset-password/password-changed.html"
                                                tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Password is Changed
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Branded
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/authentication/branded/sign-in.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Sign In
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/authentication/branded/sign-up.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Sign Up
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/authentication/branded/2fa.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            2FA
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/authentication/branded/check-email.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Check Email
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                                    data-kt-menu-item-trigger="click">
                                    <div class="kt-menu-link grow cursor-pointer gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                        tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                            Reset Password
                                        </span>
                                        <span
                                            class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                            <span class="kt-menu-item-show:hidden inline-flex">
                                                <i class="ki-filled ki-plus text-[11px]">
                                                </i>
                                            </span>
                                            <span class="kt-menu-item-show:inline-flex hidden">
                                                <i class="ki-filled ki-minus text-[11px]">
                                                </i>
                                            </span>
                                        </span>
                                    </div>
                                    <div
                                        class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/authentication/branded/reset-password/enter-email.html"
                                                tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Enter Email
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/authentication/branded/reset-password/check-email.html"
                                                tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Check Email
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/authentication/branded/reset-password/change-password.html"
                                                tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Change Password
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                                href="html/demo1/authentication/branded/reset-password/password-changed.html"
                                                tabindex="0">
                                                <span
                                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                                </span>
                                                <span
                                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                                    Password is Changed
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/authentication/welcome-message.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Welcome Message
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/authentication/account-deactivated.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Account Deactivated
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/authentication/error-404.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Error 404
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/authentication/error-500.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Error 500
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="kt-menu-item pt-2.25 pb-px">
                    <span
                        class="kt-menu-heading pe-[10px] ps-[10px] text-xs font-medium uppercase text-muted-foreground">
                        Apps
                    </span>
                </div>
                <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
                    <div class="kt-menu-link flex grow cursor-pointer items-center gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-users text-lg">
                            </i>
                        </span>
                        <span
                            class="kt-menu-title kt-menu-item-active:text-primary kt-menu-link-hover:!text-primary text-sm font-medium text-foreground">
                            Store - Client
                        </span>
                        <span
                            class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                            <span class="kt-menu-item-show:hidden inline-flex">
                                <i class="ki-filled ki-plus text-[11px]">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-[11px]">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div
                        class="kt-menu-accordion relative gap-1 ps-[10px] before:absolute before:bottom-0 before:start-[20px] before:top-0 before:border-s before:border-border">
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/store-client/home.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Home
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/store-client/search-results-grid.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Search Results - Grid
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/store-client/search-results-list.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Search Results - List
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/store-client/product-details.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Product Details
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/store-client/shopping-cart.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Shopping Cart
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/store-client/wishlist.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Wishlist
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-toggle="accordion"
                            data-kt-menu-item-trigger="click">
                            <div class="kt-menu-link grow cursor-pointer gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px]"
                                tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-medium kt-menu-link-hover:!text-primary me-1 font-normal text-foreground">
                                    Checkout
                                </span>
                                <span
                                    class="kt-menu-arrow me-[-10px] ms-1 w-[20px] shrink-0 justify-end text-muted-foreground">
                                    <span class="kt-menu-item-show:hidden inline-flex">
                                        <i class="ki-filled ki-plus text-[11px]">
                                        </i>
                                    </span>
                                    <span class="kt-menu-item-show:inline-flex hidden">
                                        <i class="ki-filled ki-minus text-[11px]">
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div
                                class="kt-menu-accordion relative gap-1 ps-[22px] before:absolute before:bottom-0 before:start-[32px] before:top-0 before:border-s before:border-border">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/store-client/checkout/order-summary.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Order Summary
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/store-client/checkout/shipping-info.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Shipping Info
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/store-client/checkout/payment-method.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Payment Method
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[5px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                        href="html/demo1/store-client/checkout/order-placed.html" tabindex="0">
                                        <span
                                            class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                        </span>
                                        <span
                                            class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                            Order Placed
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/store-client/my-orders.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    My Orders
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 grow items-center gap-[14px] border border-transparent py-[8px] pe-[10px] ps-[10px] hover:rounded-lg"
                                href="html/demo1/store-client/order-receipt.html" tabindex="0">
                                <span
                                    class="kt-menu-bullet kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary relative -start-[3px] flex w-[6px] before:absolute before:top-0 before:size-[6px] before:-translate-y-1/2 before:rounded-full rtl:start-0 rtl:before:translate-x-1/2">
                                </span>
                                <span
                                    class="kt-menu-title text-2sm kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary font-normal text-foreground">
                                    Order Receipt
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="kt-menu-item">
                    <div class="kt-menu-label gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        href="" tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-setting text-lg">
                            </i>
                        </span>
                        <span class="kt-menu-title text-sm font-medium text-foreground">
                            Store - Admin
                        </span>
                        <span class="kt-menu-badge me-[-10px]">
                            <span class="kt-badge kt-badge-sm text-accent-foreground/60">
                                Soon
                            </span>
                        </span>
                    </div>
                </div>
                <div class="kt-menu-item">
                    <div class="kt-menu-label gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        href="" tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-python text-lg">
                            </i>
                        </span>
                        <span class="kt-menu-title text-sm font-medium text-foreground">
                            Store - Services
                        </span>
                        <span class="kt-menu-badge me-[-10px]">
                            <span class="kt-badge kt-badge-sm text-accent-foreground/60">
                                Soon
                            </span>
                        </span>
                    </div>
                </div>
                <div class="kt-menu-item">
                    <div class="kt-menu-label gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        href="" tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-artificial-intelligence text-lg">
                            </i>
                        </span>
                        <span class="kt-menu-title text-sm font-medium text-foreground">
                            AI Promt
                        </span>
                        <span class="kt-menu-badge me-[-10px]">
                            <span class="kt-badge kt-badge-sm text-accent-foreground/60">
                                Soon
                            </span>
                        </span>
                    </div>
                </div>
                <div class="kt-menu-item">
                    <div class="kt-menu-label gap-[10px] border border-transparent py-[6px] pe-[10px] ps-[10px]"
                        href="" tabindex="0">
                        <span class="kt-menu-icon w-[20px] items-start text-muted-foreground">
                            <i class="ki-filled ki-cheque text-lg">
                            </i>
                        </span>
                        <span class="kt-menu-title text-sm font-medium text-foreground">
                            Invoice Generator
                        </span>
                        <span class="kt-menu-badge me-[-10px]">
                            <span class="kt-badge kt-badge-sm text-accent-foreground/60">
                                Soon
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <!-- End of Sidebar Menu -->
        </div>
    </div>
</div>
<!-- End of Sidebar -->
