<!--Megamenu Contaoner-->
<div class="flex items-stretch" id="megaMenuContainer">
    <!--Megamenu Inner-->
    <div class="flex items-stretch [--kt-reparent-mode:prepend] [--kt-reparent-target:body] lg:[--kt-reparent-mode:prepend] lg:[--kt-reparent-target:#megaMenuContainer]"
        data-kt-reparent="true">
        <!--Megamenu Wrapper-->
        <div class="hidden [--kt-drawer-enable:true] lg:flex lg:items-stretch lg:[--kt-drawer-enable:false]"
            data-kt-drawer="true"
            data-kt-drawer-class="kt-drawer kt-drawer-start fixed z-10 top-0 bottom-0 w-full me-5 max-w-[250px] p-5 lg:p-0 overflow-auto"
            id="mega_menu_wrapper">
            <!--Megamenu-->
            <div class="kt-menu flex-col gap-5 lg:flex-row lg:gap-7.5" data-kt-menu="true" id="mega_menu">
                <!--Megamenu Item-->
                <div class="kt-menu-item active">
                    <a class="kt-menu-link kt-menu-item-hover:text-primary kt-menu-item-active:text-mono kt-menu-item-active:font-medium text-nowrap text-sm font-medium text-foreground"
                        href="html/demo1.html">
                        <span class="kt-menu-title text-nowrap">
                            Home
                        </span>
                    </a>
                </div>
                <!--End of Megamenu Item-->
                <!--Megamenu Item-->
                <div class="kt-menu-item" data-kt-menu-item-placement="bottom-start"
                    data-kt-menu-item-placement-rtl="bottom-end" data-kt-menu-item-toggle="accordion|lg:dropdown"
                    data-kt-menu-item-trigger="click|lg:hover">
                    <div
                        class="kt-menu-link kt-menu-link-hover:text-primary kt-menu-item-active:text-mono kt-menu-item-show:text-primary kt-menu-item-here:text-mono kt-menu-item-active:font-medium kt-menu-item-here:font-medium text-sm text-foreground">
                        <span class="kt-menu-title text-nowrap">
                            Profiles
                        </span>
                        <span class="kt-menu-arrow flex lg:hidden">
                            <span class="kt-menu-item-show:hidden text-muted-foreground">
                                <i class="ki-filled ki-plus text-xs">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-xs">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div class="kt-menu-dropdown w-full gap-0 lg:max-w-[900px]">
                        <div class="pb-2 pt-4 lg:p-7.5">
                            <div class="grid gap-5 lg:grid-cols-2 lg:gap-10">
                                <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                    <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                        Profiles
                                    </h3>
                                    <div class="grid lg:grid-cols-2 lg:gap-5">
                                        <div class="flex flex-col gap-0.5">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/default.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-badge">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Default
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/creator.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-coffee">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Creator
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/company.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-abstract-41">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Company
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/nft.html" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-bitcoin">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        NFT
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/blogger.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-message-text">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Blogger
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/crm.html" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-devices">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        CRM
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/gamer.html" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-ghost">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Gamer
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/feeds.html" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-book">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Feeds
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/plain.html" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-files">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Plain
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/profiles/modal.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-mouse-square">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Modal
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-financial-schedule">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Freelancer
                                                    </span>
                                                    <span class="kt-menu-badge">
                                                        <span class="kt-badge kt-badge-sm">
                                                            Soon
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-technology-4">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Developer
                                                    </span>
                                                    <span class="kt-menu-badge">
                                                        <span class="kt-badge kt-badge-sm">
                                                            Soon
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-users">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Team
                                                    </span>
                                                    <span class="kt-menu-badge">
                                                        <span class="kt-badge kt-badge-sm">
                                                            Soon
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-calendar-tick">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Events
                                                    </span>
                                                    <span class="kt-menu-badge">
                                                        <span class="kt-badge kt-badge-sm">
                                                            Soon
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                    <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                        Other Pages
                                    </h3>
                                    <div class="grid lg:grid-cols-2 lg:gap-5">
                                        <div class="flex flex-col gap-0.5">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/projects/3-columns.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-element-6">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Projects - 3 Columns
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/projects/2-columns.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-element-4">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Projects - 2 Columns
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="html/demo1/public-profile/works.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-office-bag">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Works
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="html/demo1/public-profile/teams.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-people">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Teams
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="html/demo1/public-profile/network.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-icon">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Network
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="html/demo1/public-profile/activity.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-chart-line-up-2">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Activity
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/campaigns/card.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-element-11">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Campaigns - Card
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/public-profile/campaigns/list.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-kanban">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Campaigns - List
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="html/demo1/public-profile/empty.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-file-sheet">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Empty Page
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-document">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Documents
                                                    </span>
                                                    <span class="kt-menu-badge">
                                                        <span class="kt-badge kt-badge-sm">
                                                            Soon
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-award">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Badges
                                                    </span>
                                                    <span class="kt-menu-badge">
                                                        <span class="kt-badge kt-badge-sm">
                                                            Soon
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-gift">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title grow-0">
                                                        Awards
                                                    </span>
                                                    <span class="kt-menu-badge">
                                                        <span class="kt-badge kt-badge-sm">
                                                            Soon
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-muted/50 flex flex-wrap items-center gap-2.5 rounded-xl border border-border px-4 py-4 lg:justify-between lg:rounded-t-none lg:border-0 lg:border-t lg:border-t-border lg:px-7.5 lg:py-5">
                            <div class="flex flex-col gap-1.5">
                                <div class="text-base font-semibold leading-none text-mono">
                                    Read to Get Started ?
                                </div>
                                <div class="fomt-medium text-sm text-secondary-foreground">
                                    Take your docs to the next level of Metronic
                                </div>
                            </div>
                            <a class="kt-btn kt-btn-mono" href="#">
                                Read Documentation
                            </a>
                        </div>
                    </div>
                </div>
                <!--End of Megamenu Item-->
                <!--Megamenu Item-->
                <div class="kt-menu-item" data-kt-menu-item-offset="-300px, 0"
                    data-kt-menu-item-offset-rtl="300px, 0" data-kt-menu-item-overflow="true"
                    data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end"
                    data-kt-menu-item-toggle="accordion|lg:dropdown" data-kt-menu-item-trigger="click|lg:hover">
                    <div
                        class="kt-menu-link kt-menu-link-hover:text-primary kt-menu-item-active:text-mono kt-menu-item-show:text-primary kt-menu-item-here:text-mono kt-menu-item-active:font-semibold kt-menu-item-here:font-semibold text-sm font-medium text-secondary-foreground">
                        <span class="kt-menu-title text-nowrap">
                            My Account
                        </span>
                        <span class="kt-menu-arrow flex lg:hidden">
                            <span class="kt-menu-item-show:hidden text-muted-foreground">
                                <i class="ki-filled ki-plus text-xs">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-xs">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div class="kt-menu-dropdown w-full flex-col gap-0 lg:max-w-[1240px] lg:flex-row">
                        <div
                            class="bg-muted/25 mt-2 shrink-0 rounded-xl px-3 py-4 lg:mt-0 lg:w-[250px] lg:rounded-l-xl lg:rounded-r-none lg:border-e lg:border-e-border lg:p-7.5">
                            <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                General Pages
                            </h3>
                            <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                        href="html/demo1/account/integrations.html">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-technology-2">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Integrations
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                        href="html/demo1/account/notifications.html">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-notification-1">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Notifications
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                        href="html/demo1/account/api-keys.html">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-key">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            API Keys
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                        href="html/demo1/account/appearance.html">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-eye">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Appearance
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                        href="html/demo1/account/invite-a-friend.html">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-user-tick">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Invite a Friend
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                        href="html/demo1/account/activity.html">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-support">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Activity
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                        href="">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-verify">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Brand
                                        </span>
                                        <span class="kt-menu-badge">
                                            <span class="kt-badge kt-badge-sm">
                                                Soon
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                        href="">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-euro">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Get Paid
                                        </span>
                                        <span class="kt-menu-badge">
                                            <span class="kt-badge kt-badge-sm">
                                                Soon
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="grow pb-2 pt-4 lg:p-7.5 lg:pb-5">
                            <div class="grid gap-5 lg:grid-cols-5">
                                <div class="flex flex-col">
                                    <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                        Account Home
                                    </h3>
                                    <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/home/get-started.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Get Started
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/home/user-profile.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    User Profile
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/home/company-profile.html" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Company Profile
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/home/settings-sidebar.html" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    With Sidebar
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/home/settings-enterprise.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Enterprise
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/home/settings-plain.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Plain
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/home/settings-modal.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Modal
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                        Billing
                                    </h3>
                                    <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/billing/basic.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Basic Billing
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/billing/enterprise.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Enterprise
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/billing/plans.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Plans
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/billing/history.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Billing History
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Tax Info
                                                </span>
                                                <span class="kt-menu-badge">
                                                    <span class="kt-badge kt-badge-sm">
                                                        Soon
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Invoices
                                                </span>
                                                <span class="kt-menu-badge">
                                                    <span class="kt-badge kt-badge-sm">
                                                        Soon
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Gateaways
                                                </span>
                                                <span class="kt-menu-badge">
                                                    <span class="kt-badge kt-badge-sm">
                                                        Soon
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                        Security
                                    </h3>
                                    <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/security/get-started.html" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Get Started
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/security/overview.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Security Overview
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/security/allowed-ip-addresses.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    IP Addresses
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/security/privacy-settings.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Privacy Settings
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/security/device-management.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Device Management
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/security/backup-and-recovery.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Backup & Recovery
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/security/current-sessions.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Current Sessions
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/security/security-log.html" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Security Log
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                        Members & Roles
                                    </h3>
                                    <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/members/team-starter.html" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Teams Starter
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/members/teams.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Teams
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/members/team-info.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Team Info
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/members/members-starter.html" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Members Starter
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/members/team-members.html" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Team Members
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/members/import-members.html" tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Import Members
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/members/roles.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Roles
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/members/permissions-toggle.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Persmissions - Toggler
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/account/members/permissions-check.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Persmissions - Check
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                        Other Pages
                                    </h3>
                                    <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/integrations.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Integrations
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/notifications.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Notifications
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/api-keys.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    API Keys
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/appearance.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Appearance
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/invite-a-friend.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Invite a Friend
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/account/activity.html"
                                                tabindex="0">
                                                <span class="kt-menu-title grow-0">
                                                    Activity
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End of Megamenu Item-->
                <!--Megamenu Item-->
                <div class="kt-menu-item" data-kt-menu-item-offset="-300px, 0"
                    data-kt-menu-item-offset-rtl="300px, 0" data-kt-menu-item-overflow="true"
                    data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end"
                    data-kt-menu-item-toggle="accordion|lg:dropdown" data-kt-menu-item-trigger="click|lg:hover">
                    <div
                        class="kt-menu-link kt-menu-link-hover:text-primary kt-menu-item-active:text-mono kt-menu-item-show:text-primary kt-menu-item-here:text-mono kt-menu-item-active:font-semibold kt-menu-item-here:font-semibold text-sm font-medium text-secondary-foreground">
                        <span class="kt-menu-title text-nowrap">
                            Network
                        </span>
                        <span class="kt-menu-arrow flex lg:hidden">
                            <span class="kt-menu-item-show:hidden text-muted-foreground">
                                <i class="ki-filled ki-plus text-xs">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-xs">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div class="kt-menu-dropdown w-full flex-col gap-0 lg:max-w-[670px]">
                        <div class="flex flex-col lg:flex-row">
                            <div
                                class="bg-muted/25 mt-2 flex shrink-0 flex-col gap-5 rounded-xl px-3 py-4 lg:mt-0 lg:w-[250px] lg:rounded-none lg:rounded-tl-xl lg:border-r lg:border-r-border lg:p-7.5">
                                <h3 class="h-3.5 ps-2.5 text-sm font-semibold leading-none text-foreground">
                                    General Pages
                                </h3>
                                <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                            href="#">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-flag">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title grow-0">
                                                Get Started
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                            href="#">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-users">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title grow-0">
                                                Colleagues
                                            </span>
                                            <span class="kt-menu-badge">
                                                <span class="kt-badge kt-badge-sm">
                                                    Soon
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                            href="#">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-heart">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title grow-0">
                                                Donators
                                            </span>
                                            <span class="kt-menu-badge">
                                                <span class="kt-badge kt-badge-sm">
                                                    Soon
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                            href="#">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-abstract-21">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title grow-0">
                                                Leads
                                            </span>
                                            <span class="kt-menu-badge">
                                                <span class="kt-badge kt-badge-sm">
                                                    Soon
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="grow pb-2 pt-4 lg:p-7.5 lg:pb-5">
                                <div class="grid gap-5 lg:grid-cols-2">
                                    <div class="flex flex-col gap-5">
                                        <h3
                                            class="flex h-3.5 items-center gap-1.5 ps-2.5 text-sm font-semibold leading-none text-foreground">
                                            User Cards
                                        </h3>
                                        <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-cards/mini-cards.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Mini Cards
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-cards/team-crew.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Team Crew
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="html/demo1/network/user-cards/nft.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Authors
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-cards/social.html" tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        NFT Users
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Social Users
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#" tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Gamers
                                                    </span>
                                                    <span class="kt-menu-badge">
                                                        <span class="kt-badge kt-badge-sm">
                                                            Soon
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-5">
                                        <h3
                                            class="flex h-3.5 items-center gap-1.5 ps-2.5 text-sm font-semibold leading-none text-foreground">
                                            User Base
                                            <span
                                                class="kt-badge kt-badge-sm kt-badge-primary kt-badge-outline left-auto">
                                                Datatables
                                            </span>
                                        </h3>
                                        <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-table/team-crew.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Team Crew
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-table/app-roster.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        App Roster
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-table/market-authors.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Market Authors
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-table/saas-users.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        SaaS Users
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-table/store-clients.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Store Clients
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/network/user-table/visitors.html" tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Visitors
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-muted/50 flex flex-wrap items-center gap-2.5 rounded-xl border border-border px-4 py-4 lg:justify-between lg:rounded-t-none lg:border-0 lg:border-t lg:border-t-border lg:px-7.5 lg:py-5">
                            <div class="flex flex-col gap-1.5">
                                <div class="text-base font-semibold leading-none text-mono">
                                    Read to Get Started ?
                                </div>
                                <div class="fomt-medium text-sm text-secondary-foreground">
                                    Take your docs to the next level of Metronic
                                </div>
                            </div>
                            <a class="kt-btn kt-btn-mono" href="#">
                                Read Documentation
                            </a>
                        </div>
                    </div>
                </div>
                <!--End of Megamenu Item-->
                <!--Megamenu Item-->
                <div class="kt-menu-item" data-kt-menu-item-offset="-300px, 0"
                    data-kt-menu-item-offset-rtl="300px, 0" data-kt-menu-item-overflow="true"
                    data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end"
                    data-kt-menu-item-toggle="accordion|lg:dropdown" data-kt-menu-item-trigger="click|lg:hover">
                    <div
                        class="kt-menu-link kt-menu-link-hover:text-primary kt-menu-item-active:text-mono kt-menu-item-show:text-primary kt-menu-item-here:text-mono kt-menu-item-active:font-semibold kt-menu-item-here:font-semibold text-sm font-medium text-secondary-foreground">
                        <span class="kt-menu-title text-nowrap">
                            Store
                        </span>
                        <span class="kt-menu-arrow flex lg:hidden">
                            <span class="kt-menu-item-show:hidden text-muted-foreground">
                                <i class="ki-filled ki-plus text-xs">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-xs">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div class="kt-menu-dropdown w-full gap-0 lg:max-w-[600px]">
                        <div class="pb-2 pt-4 lg:p-7.5">
                            <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                <h3 class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                    Store - Client
                                </h3>
                                <div class="grid lg:grid-cols-2 lg:gap-5">
                                    <div class="flex flex-col gap-0.5">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/store-client/home.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-home">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Home
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/store-client/search-results-grid.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-grid">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Search Results - Grid
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/store-client/search-results-list.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-tablet-text-up">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Search Results - List
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/store-client/product-details.html" tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-picture">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Product Details
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/store-client/shopping-cart.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-handcart">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Shopping Cart
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/store-client/wishlist.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-heart">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Wishlist
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/store-client/checkout/order-summary.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-subtitle">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Checkout - Order Summary
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/store-client/checkout/shipping-info.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-delivery">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Checkout - Shipping Info
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/store-client/checkout/payment-method.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-wallet">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Checkout - Payment Method
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link"
                                                href="html/demo1/store-client/checkout/order-placed.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-check-circle">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Checkout - Order Placed
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/store-client/my-orders.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-archive">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    My Orders
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="html/demo1/store-client/order-receipt.html"
                                                tabindex="0">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-document">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title grow-0">
                                                    Order Receipt
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-muted/50 flex flex-wrap items-center gap-2.5 rounded-xl border border-border px-4 py-4 lg:justify-between lg:rounded-t-none lg:border-0 lg:border-t lg:border-t-border lg:px-7.5 lg:py-5">
                            <div class="flex flex-col gap-1.5">
                                <div class="text-base font-semibold leading-none text-mono">
                                    Read to Get Started ?
                                </div>
                                <div class="fomt-medium text-sm text-secondary-foreground">
                                    Take your docs to the next level of Metronic
                                </div>
                            </div>
                            <a class="kt-btn kt-btn-mono" href="#">
                                Read Documentation
                            </a>
                        </div>
                    </div>
                </div>
                <!--End of Megamenu Item-->
                <!--Megamenu Item-->
                <div class="kt-menu-item" data-kt-menu-item-offset="-300px, 0"
                    data-kt-menu-item-offset-rtl="300px, 0" data-kt-menu-item-overflow="true"
                    data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end"
                    data-kt-menu-item-toggle="accordion|lg:dropdown" data-kt-menu-item-trigger="click|lg:hover">
                    <div
                        class="kt-menu-link kt-menu-link-hover:text-primary kt-menu-item-active:text-mono kt-menu-item-show:text-primary kt-menu-item-here:text-mono kt-menu-item-active:font-semibold kt-menu-item-here:font-semibold text-sm font-medium text-secondary-foreground">
                        <span class="kt-menu-title text-nowrap">
                            Authentication
                        </span>
                        <span class="kt-menu-arrow flex lg:hidden">
                            <span class="kt-menu-item-show:hidden text-muted-foreground">
                                <i class="ki-filled ki-plus text-xs">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-xs">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div class="kt-menu-dropdown w-full flex-col gap-0 lg:max-w-[700px]">
                        <div class="flex flex-col lg:flex-row">
                            <div class="grow pb-2 pt-4 lg:p-7.5 lg:pb-5">
                                <div class="grid gap-5 lg:grid-cols-2">
                                    <div class="flex flex-col">
                                        <h3
                                            class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                            Classic Layout
                                        </h3>
                                        <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/classic/sign-in.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Sign In
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/classic/sign-up.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Sign Up
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/classic/2fa.html" tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        2FA
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/classic/check-email.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Check Email
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item pt-1">
                                                <span class="p-2.5 text-sm font-medium text-secondary-foreground">
                                                    Reset Password
                                                </span>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/classic/reset-password/enter-email.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Enter Email
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/classic/reset-password/check-email.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Check Email
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/classic/reset-password/change-password.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Change Password
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/classic/reset-password/password-changed.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Password is Changed
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <h3
                                            class="mb-2 ps-2.5 text-sm font-semibold leading-none text-foreground lg:mb-5">
                                            Branded Layout
                                        </h3>
                                        <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/branded/sign-in.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Sign In
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/branded/sign-up.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Sign Up
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/branded/2fa.html" tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        2FA
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/branded/check-email.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Check Email
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item pt-1">
                                                <span class="p-2.5 text-sm font-medium text-secondary-foreground">
                                                    Reset Password
                                                </span>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/branded/reset-password/enter-email.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Enter Email
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/branded/reset-password/check-email.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Check Email
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/branded/reset-password/change-password.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Change Password
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link"
                                                    href="html/demo1/authentication/branded/reset-password/password-changed.html"
                                                    tabindex="0">
                                                    <span class="kt-menu-title grow-0">
                                                        Password is Changed
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="bg-muted/25 mb-4 shrink-0 rounded-xl px-3 py-4 lg:mb-0 lg:w-[260px] lg:rounded-e-xl lg:rounded-l-none lg:border-s lg:border-s-border lg:p-7.5">
                                <h3 class="mb-5 ps-2.5 text-sm font-semibold leading-none text-foreground">
                                    Other Pages
                                </h3>
                                <div class="kt-menu kt-menu-default kt-menu-fit flex-col">
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                            href="html/demo1/authentication/welcome-message.html">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-like-2">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title grow-0">
                                                Welcome Message
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                            href="html/demo1/authentication/account-deactivated.html">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-shield-cross">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title grow-0">
                                                Account Deactivated
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                            href="html/demo1/authentication/error-404.html">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-message-question">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title grow-0">
                                                Error 404
                                            </span>
                                        </a>
                                    </div>
                                    <div class="kt-menu-item">
                                        <a class="kt-menu-link kt-menu-link-hover:!bg-background kt-menu-link-hover:border-border kt-menu-item-active:!bg-background kt-menu-item-active:border-border border border-transparent"
                                            href="html/demo1/authentication/error-500.html">
                                            <span class="kt-menu-icon">
                                                <i class="ki-filled ki-information">
                                                </i>
                                            </span>
                                            <span class="kt-menu-title grow-0">
                                                Error 500
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-muted/50 flex flex-wrap items-center gap-2.5 rounded-xl border border-border px-4 py-4 lg:justify-between lg:rounded-t-none lg:border-0 lg:border-t lg:border-t-border lg:px-7.5 lg:py-5">
                            <div class="flex flex-col gap-1.5">
                                <div class="text-base font-semibold leading-none text-mono">
                                    Read to Get Started ?
                                </div>
                                <div class="fomt-medium text-sm text-secondary-foreground">
                                    Take your docs to the next level of Metronic
                                </div>
                            </div>
                            <a class="kt-btn kt-btn-mono" href="#">
                                Read Documentation
                            </a>
                        </div>
                    </div>
                </div>
                <!--End of Megamenu Item-->
                <!--Megamenu Item-->
                <div class="kt-menu-item" data-kt-menu-item-offset="0,0|lg:-20px, 0"
                    data-kt-menu-item-offset-rtl="0,0|lg:20px, 0" data-kt-menu-item-overflow="true"
                    data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end"
                    data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                    <div
                        class="kt-menu-link kt-menu-link-hover:text-primary kt-menu-item-active:text-mono kt-menu-item-show:text-primary kt-menu-item-here:text-mono kt-menu-item-active:font-semibold kt-menu-item-here:font-semibold text-sm font-medium text-secondary-foreground">
                        <span class="kt-menu-title text-nowrap">
                            Help
                        </span>
                        <span class="kt-menu-arrow flex lg:hidden">
                            <span class="kt-menu-item-show:hidden text-muted-foreground">
                                <i class="ki-filled ki-plus text-xs">
                                </i>
                            </span>
                            <span class="kt-menu-item-show:inline-flex hidden">
                                <i class="ki-filled ki-minus text-xs">
                                </i>
                            </span>
                        </span>
                    </div>
                    <div class="kt-menu-dropdown kt-menu-default w-full max-w-[220px] py-2.5">
                        <div class="kt-menu-item">
                            <a class="kt-menu-link"
                                href="https://keenthemes.com/metronic/tailwind/docs/getting-started/installation"
                                tabindex="0">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-coffee">
                                    </i>
                                </span>
                                <span class="kt-menu-title grow-0">
                                    Getting Started
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-placement="right-start"
                            data-kt-menu-item-placement-rtl="left-start" data-kt-menu-item-toggle="dropdown"
                            data-kt-menu-item-trigger="click|lg:hover">
                            <div class="kt-menu-link">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-information">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Support Forum
                                </span>
                                <span class="kt-menu-arrow">
                                    <i class="ki-filled ki-right text-xs rtl:rotate-180 rtl:transform">
                                    </i>
                                </span>
                            </div>
                            <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px] lg:max-w-[220px]">
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="https://devs.keenthemes.com" tabindex="0">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-questionnaire-tablet">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            All Questions
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="https://devs.keenthemes.com/popular"
                                        tabindex="0">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-star">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Popular Questions
                                        </span>
                                    </a>
                                </div>
                                <div class="kt-menu-item">
                                    <a class="kt-menu-link" href="https://devs.keenthemes.com/question/create"
                                        tabindex="0">
                                        <span class="kt-menu-icon">
                                            <i class="ki-filled ki-message-question">
                                            </i>
                                        </span>
                                        <span class="kt-menu-title grow-0">
                                            Ask Question
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link"
                                href="https://keenthemes.com/metronic/tailwind/docs/getting-started/license"
                                tabindex="0">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-subtitle">
                                    </i>
                                </span>
                                <span class="kt-menu-title">
                                    Licenses & FAQ
                                </span>
                                <span class="kt-menu-badge" data-kt-tooltip="#menu_tooltip_3">
                                    <i class="ki-filled ki-information-2 text-base text-muted-foreground">
                                    </i>
                                </span>
                                <div class="kt-tooltip" id="menu_tooltip_3">
                                    Learn more about licenses
                                </div>
                            </a>
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="https://keenthemes.com/metronic/tailwind/docs"
                                tabindex="0">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-questionnaire-tablet">
                                    </i>
                                </span>
                                <span class="kt-menu-title grow-0">
                                    Documentation
                                </span>
                            </a>
                        </div>
                        <div class="kt-menu-separator">
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="https://keenthemes.com/contact" tabindex="0">
                                <span class="kt-menu-icon">
                                    <i class="ki-filled ki-share">
                                    </i>
                                </span>
                                <span class="kt-menu-title grow-0">
                                    Contact Us
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <!--End of Megamenu Item-->
            </div>
            <!--End of Megamenu-->
        </div>
        <!--End of Megamenu Wrapper-->
    </div>
    <!--End of Megamenu Inner-->
</div>
<!--End of Megamenu Contaoner-->
