@extends('layouts.demo1.base')

@section('content')
    <!-- Container -->
    <div class="kt-container-fixed" id="contentContainer">
    </div>
    <!-- End of Container -->
    <!-- Container -->
    <div class="kt-container-fixed">
        <div class="flex flex-wrap items-center justify-between gap-5 pb-7.5 lg:items-end">
            <div class="flex flex-col justify-center gap-2">
                <h1 class="text-xl font-medium leading-none text-mono">
                    Dashboard
                </h1>
                <div class="flex items-center gap-2 text-sm font-normal text-secondary-foreground">
                    Central Hub for Personal Customization
                </div>
            </div>
            <div class="flex items-center gap-2.5">
                <a class="kt-btn kt-btn-outline" href="#">
                    View Profile
                </a>
            </div>
        </div>
    </div>
    <!-- End of Container -->
    <!-- Container -->
    <div class="kt-container-fixed">
        <div class="grid gap-5 lg:gap-7.5">
            <!-- begin: grid -->
            <div class="grid items-stretch gap-y-5 lg:grid-cols-3 lg:gap-7.5">
                <div class="lg:col-span-1">
                    <div class="grid h-full grid-cols-2 items-stretch gap-5 lg:gap-7.5">
                        <style>
                            .channel-stats-bg {
                                background-image: url('assets/media/images/2600x1600/bg-3.png');
                            }

                            .dark .channel-stats-bg {
                                background-image: url('assets/media/images/2600x1600/bg-3-dark.png');
                            }
                        </style>
                        <div
                            class="kt-card channel-stats-bg h-full flex-col justify-between gap-6 bg-cover bg-[right_top_-1.7rem] bg-no-repeat rtl:bg-[left_top_-1.7rem]">
                            <img alt="" class="ms-5 mt-4 w-7" src="assets/media/brand-logos/linkedin-2.svg" />
                            <div class="flex flex-col gap-1 px-5 pb-4">
                                <span class="text-3xl font-semibold text-mono">
                                    9.3k
                                </span>
                                <span class="text-sm font-normal text-secondary-foreground">
                                    Amazing mates
                                </span>
                            </div>
                        </div>
                        <div
                            class="kt-card channel-stats-bg h-full flex-col justify-between gap-6 bg-cover bg-[right_top_-1.7rem] bg-no-repeat rtl:bg-[left_top_-1.7rem]">
                            <img alt="" class="ms-5 mt-4 w-7" src="assets/media/brand-logos/youtube-2.svg" />
                            <div class="flex flex-col gap-1 px-5 pb-4">
                                <span class="text-3xl font-semibold text-mono">
                                    24k
                                </span>
                                <span class="text-sm font-normal text-secondary-foreground">
                                    Lessons Views
                                </span>
                            </div>
                        </div>
                        <div
                            class="kt-card channel-stats-bg h-full flex-col justify-between gap-6 bg-cover bg-[right_top_-1.7rem] bg-no-repeat rtl:bg-[left_top_-1.7rem]">
                            <img alt="" class="ms-5 mt-4 w-7" src="assets/media/brand-logos/instagram-03.svg" />
                            <div class="flex flex-col gap-1 px-5 pb-4">
                                <span class="text-3xl font-semibold text-mono">
                                    608
                                </span>
                                <span class="text-sm font-normal text-secondary-foreground">
                                    New subscribers
                                </span>
                            </div>
                        </div>
                        <div
                            class="kt-card channel-stats-bg h-full flex-col justify-between gap-6 bg-cover bg-[right_top_-1.7rem] bg-no-repeat rtl:bg-[left_top_-1.7rem]">
                            <img alt="" class="ms-5 mt-4 w-7 dark:hidden"
                                src="assets/media/brand-logos/tiktok.svg" />
                            <img alt="" class="ms-5 mt-4 hidden w-7 dark:block"
                                src="assets/media/brand-logos/tiktok-dark.svg" />
                            <div class="flex flex-col gap-1 px-5 pb-4">
                                <span class="text-3xl font-semibold text-mono">
                                    2.5k
                                </span>
                                <span class="text-sm font-normal text-secondary-foreground">
                                    Stream audience
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <style>
                        .entry-callout-bg {
                            background-image: url('assets/media/images/2600x1600/2.png');
                        }

                        .dark .entry-callout-bg {
                            background-image: url('assets/media/images/2600x1600/2-dark.png');
                        }
                    </style>
                    <div class="kt-card h-full h-full">
                        <div
                            class="kt-card-content entry-callout-bg bg-[length:80%] bg-no-repeat p-10 [background-position:175%_25%] rtl:[background-position:-70%_25%]">
                            <div class="flex flex-col justify-center gap-4">
                                <div class="flex -space-x-2">
                                    <div class="flex">
                                        <img class="hover:z-5 relative size-10 shrink-0 rounded-full ring-1 ring-background"
                                            src="assets/media/avatars/300-4.png" />
                                    </div>
                                    <div class="flex">
                                        <img class="hover:z-5 relative size-10 shrink-0 rounded-full ring-1 ring-background"
                                            src="assets/media/avatars/300-1.png" />
                                    </div>
                                    <div class="flex">
                                        <img class="hover:z-5 relative size-10 shrink-0 rounded-full ring-1 ring-background"
                                            src="assets/media/avatars/300-2.png" />
                                    </div>
                                    <div class="flex">
                                        <span
                                            class="hover:z-5 text-2xs relative inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-semibold leading-none text-white ring-1 ring-background">
                                            S
                                        </span>
                                    </div>
                                </div>
                                <h2 class="text-xl font-semibold text-mono">
                                    Connect Today & Join
                                    <br />
                                    the
                                    <a class="kt-link" href="#">
                                        KeenThemes Network
                                    </a>
                                </h2>
                                <p class="leading-5.5 text-sm font-normal text-secondary-foreground">
                                    Enhance your projects with premium themes and
                                    <br />
                                    templates. Join the KeenThemes community today
                                    <br />
                                    for top-quality designs and resources.
                                </p>
                            </div>
                        </div>
                        <div class="kt-card-footer justify-center">
                            <a class="kt-link kt-link-underlined kt-link-dashed"
                                href="#">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end: grid -->
            <!-- begin: grid -->
            <div class="grid items-stretch gap-5 lg:grid-cols-3 lg:gap-7.5">
                <div class="lg:col-span-1">
                    <div class="kt-card h-full">
                        <div class="kt-card-header">
                            <h3 class="kt-card-title">
                                Highlights
                            </h3>
                            <div class="kt-menu" data-kt-menu="true">
                                <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px"
                                    data-kt-menu-item-placement="bottom-start" data-kt-menu-item-toggle="dropdown"
                                    data-kt-menu-item-trigger="click">
                                    <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                        <i class="ki-filled ki-dots-vertical text-lg">
                                        </i>
                                    </button>
                                    <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]"
                                        data-kt-menu-dismiss="true">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="#">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-cloud-change">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title">
                                                    Activity
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal"
                                                href="#">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-share">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title">
                                                    Share
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0"
                                            data-kt-menu-item-placement="right-start"
                                            data-kt-menu-item-toggle="dropdown"
                                            data-kt-menu-item-trigger="click|lg:hover">
                                            <div class="kt-menu-link">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-setting-3">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title">
                                                    Settings
                                                </span>
                                                <span class="kt-menu-arrow">
                                                    <i class="ki-filled ki-right text-3xs">
                                                    </i>
                                                </span>
                                            </div>
                                            <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
                                                <div class="kt-menu-item">
                                                    <a class="kt-menu-link"
                                                        href="#">
                                                        <span class="kt-menu-icon">
                                                            <i class="ki-filled ki-notification-bing">
                                                            </i>
                                                        </span>
                                                        <span class="kt-menu-title">
                                                            Notifications
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="kt-menu-item">
                                                    <a class="kt-menu-link"
                                                        href="#">
                                                        <span class="kt-menu-icon">
                                                            <i class="ki-filled ki-profile-circle">
                                                            </i>
                                                        </span>
                                                        <span class="kt-menu-title">
                                                            Account
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="kt-menu-item">
                                                    <a class="kt-menu-link"
                                                        href="#">
                                                        <span class="kt-menu-icon">
                                                            <i class="ki-filled ki-color-swatch">
                                                            </i>
                                                        </span>
                                                        <span class="kt-menu-title">
                                                            Appearance
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-card-content flex flex-col gap-5 px-5 pt-5 lg:px-7.5">
                            <div class="flex items-center gap-2.5">
                                <img alt="" class="size-9 rounded-full"
                                    src="assets/media/avatars/300-3.png" />
                                <div class="flex flex-col gap-1.5">
                                    <a class="text-sm font-medium leading-none text-foreground hover:text-primary"
                                        href="#">
                                        Tyler Hero
                                    </a>
                                    <span class="text-xs font-normal text-secondary-foreground">
                                        Pro plan
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2.5">
                                <img alt="" class="size-9 rounded-full"
                                    src="assets/media/avatars/300-1.png" />
                                <div class="flex flex-col gap-1.5">
                                    <a class="text-sm font-medium leading-none text-foreground hover:text-primary"
                                        href="#">
                                        Esther Howard
                                    </a>
                                    <span class="text-xs font-normal text-secondary-foreground">
                                        Enterprise plan
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2.5">
                                <img alt="" class="size-9 rounded-full"
                                    src="assets/media/avatars/300-11.png" />
                                <div class="flex flex-col gap-1.5">
                                    <a class="text-sm font-medium leading-none text-foreground hover:text-primary"
                                        href="#">
                                        Jacob Jones
                                    </a>
                                    <span class="text-xs font-normal text-secondary-foreground">
                                        Free plan
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="kt-card-footer justify-center">
                            <a class="kt-link kt-link-underlined kt-link-dashed"
                                href="#">
                                All Users
                            </a>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <div class="kt-card h-full">
                        <div class="kt-card-header">
                            <h3 class="kt-card-title">
                                Latest Updates
                            </h3>
                            <a class="kt-btn kt-btn-sm kt-btn-outline" href="#">
                                View All
                            </a>
                        </div>
                        <div class="kt-card-content">
                            <div class="flex flex-col gap-5">
                                <div class="flex items-center gap-2.5">
                                    <div class="flex items-center justify-center rounded-full bg-gray-100 size-9 dark:bg-gray-900">
                                        <i class="ki-filled ki-abstract-39 text-base text-gray-600 dark:text-gray-300">
                                        </i>
                                    </div>
                                    <div class="flex flex-col gap-0.5">
                                        <span class="text-sm font-medium text-foreground">
                                            Phoenix Digital Agency
                                        </span>
                                        <span class="text-xs font-normal text-secondary-foreground">
                                            Laravel, Next.js app
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-7 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-3.png" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-7 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-2.png" />
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-1 lg:gap-5">
                                        <span class="text-xs font-normal text-secondary-foreground">
                                            3 days ago
                                        </span>
                                        <div class="kt-menu" data-kt-menu="true">
                                            <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px"
                                                data-kt-menu-item-placement="bottom-end"
                                                data-kt-menu-item-placement-rtl="bottom-start"
                                                data-kt-menu-item-toggle="dropdown"
                                                data-kt-menu-item-trigger="click">
                                                <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                                    <i class="ki-filled ki-dots-vertical text-lg">
                                                    </i>
                                                </button>
                                                <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]"
                                                    data-kt-menu-dismiss="true">
                                                    <div class="kt-menu-item">
                                                        <a class="kt-menu-link" href="#">
                                                            <span class="kt-menu-icon">
                                                                <i class="ki-filled ki-document">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Details
                                                            </span>
                                                        </a>
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
                                                                <i class="ki-filled ki-copy">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Make a copy
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div class="kt-menu-separator">
                                                    </div>
                                                    <div class="kt-menu-item">
                                                        <a class="kt-menu-link" href="#">
                                                            <span class="kt-menu-icon">
                                                                <i class="ki-filled ki-trash">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Remove
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2.5">
                                    <div class="flex items-center justify-center rounded-full bg-gray-100 size-9 dark:bg-gray-900">
                                        <i class="ki-filled ki-abstract-25 text-base text-gray-600 dark:text-gray-300">
                                        </i>
                                    </div>
                                    <div class="flex flex-col gap-0.5">
                                        <span class="text-sm font-medium text-foreground">
                                            Acme Corp Branding
                                        </span>
                                        <span class="text-xs font-normal text-secondary-foreground">
                                            Web, UI/UX design
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-7 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-1.png" />
                                        </div>
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-7 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-2.png" />
                                        </div>
                                        <div class="flex">
                                            <span
                                                class="hover:z-5 text-2xs relative inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold leading-none text-primary-inverse ring-1 ring-background">
                                                +3
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-1 lg:gap-5">
                                        <span class="text-xs font-normal text-secondary-foreground">
                                            1 week ago
                                        </span>
                                        <div class="kt-menu" data-kt-menu="true">
                                            <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px"
                                                data-kt-menu-item-placement="bottom-end"
                                                data-kt-menu-item-placement-rtl="bottom-start"
                                                data-kt-menu-item-toggle="dropdown"
                                                data-kt-menu-item-trigger="click">
                                                <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                                    <i class="ki-filled ki-dots-vertical text-lg">
                                                    </i>
                                                </button>
                                                <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]"
                                                    data-kt-menu-dismiss="true">
                                                    <div class="kt-menu-item">
                                                        <a class="kt-menu-link" href="#">
                                                            <span class="kt-menu-icon">
                                                                <i class="ki-filled ki-document">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Details
                                                            </span>
                                                        </a>
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
                                                                <i class="ki-filled ki-copy">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Make a copy
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div class="kt-menu-separator">
                                                    </div>
                                                    <div class="kt-menu-item">
                                                        <a class="kt-menu-link" href="#">
                                                            <span class="kt-menu-icon">
                                                                <i class="ki-filled ki-trash">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Remove
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2.5">
                                    <div class="flex items-center justify-center rounded-full bg-gray-100 size-9 dark:bg-gray-900">
                                        <i class="ki-filled ki-abstract-44 text-base text-gray-600 dark:text-gray-300">
                                        </i>
                                    </div>
                                    <div class="flex flex-col gap-0.5">
                                        <span class="text-sm font-medium text-foreground">
                                            Salesforce Integration
                                        </span>
                                        <span class="text-xs font-normal text-secondary-foreground">
                                            Figma, Sketch design
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <div class="flex">
                                            <img class="hover:z-5 relative size-7 shrink-0 rounded-full ring-1 ring-background"
                                                src="assets/media/avatars/300-14.png" />
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-1 lg:gap-5">
                                        <span class="text-xs font-normal text-secondary-foreground">
                                            3 weeks ago
                                        </span>
                                        <div class="kt-menu" data-kt-menu="true">
                                            <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px"
                                                data-kt-menu-item-placement="bottom-end"
                                                data-kt-menu-item-placement-rtl="bottom-start"
                                                data-kt-menu-item-toggle="dropdown"
                                                data-kt-menu-item-trigger="click">
                                                <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                                    <i class="ki-filled ki-dots-vertical text-lg">
                                                    </i>
                                                </button>
                                                <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]"
                                                    data-kt-menu-dismiss="true">
                                                    <div class="kt-menu-item">
                                                        <a class="kt-menu-link" href="#">
                                                            <span class="kt-menu-icon">
                                                                <i class="ki-filled ki-document">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Details
                                                            </span>
                                                        </a>
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
                                                                <i class="ki-filled ki-copy">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Make a copy
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div class="kt-menu-separator">
                                                    </div>
                                                    <div class="kt-menu-item">
                                                        <a class="kt-menu-link" href="#">
                                                            <span class="kt-menu-icon">
                                                                <i class="ki-filled ki-trash">
                                                                </i>
                                                            </span>
                                                            <span class="kt-menu-title">
                                                                Remove
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
                    </div>
                </div>
            </div>
            <!-- end: grid -->
        </div>
    </div>
    <!-- End of Container -->
@endsection
