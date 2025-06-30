@extends('layouts.demo8.base')

@section('content')
    <div class="grid gap-5 lg:gap-7.5">
        <!-- begin: grid -->
        <div class="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
            <div class="lg:col-span-2">
                <div class="kt-card h-full">
                <div class="kt-card-content flex flex-col place-content-center gap-5">
                    <div class="flex justify-center">
                    <img alt="image" class="dark:hidden max-h-[180px]" src="assets/media/illustrations/32.svg"/>
                    <img alt="image" class="light:hidden max-h-[180px]" src="assets/media/illustrations/32-dark.svg"/>
                    </div>
                    <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-3 text-center">
                        <h2 class="text-xl font-semibold text-mono">
                        Swift Setup for New Teams
                        </h2>
                        <p class="text-sm font-medium text-secondary-foreground">
                        Enhance team formation and management with easy-to-use tools for communication,
                        <br/>
                        task organization, and progress tracking, all in one place.
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <a class="kt-btn kt-btn-primary" href="html/demo8/public-profile/teams.html">
                        Create Team
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="lg:col-span-1">
                <div class="kt-card h-full">
                <div class="kt-card-header">
                    <h3 class="kt-card-title">
                    Highlights
                    </h3>
                    <div class="kt-menu" data-kt-menu="true">
                    <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                        <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                        <i class="ki-filled ki-dots-vertical text-lg">
                        </i>
                        </button>
                        <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="html/demo8/account/activity.html">
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
                            <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal" href="#">
                            <span class="kt-menu-icon">
                                <i class="ki-filled ki-share">
                                </i>
                            </span>
                            <span class="kt-menu-title">
                                Share
                            </span>
                            </a>
                        </div>
                        <div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0" data-kt-menu-item-placement="right-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                            <div class="kt-menu-link">
                            <span class="kt-menu-icon">
                                <i class="ki-filled ki-notification-status">
                                </i>
                            </span>
                            <span class="kt-menu-title">
                                Notifications
                            </span>
                            <span class="kt-menu-arrow">
                                <i class="ki-filled ki-right text-xs rtl:transform rtl:rotate-180">
                                </i>
                            </span>
                            </div>
                            <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
                            <div class="kt-menu-item">
                                <a class="kt-menu-link" href="html/demo8/account/home/settings-sidebar.html">
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
                                <a class="kt-menu-link" href="html/demo8/account/home/settings-sidebar.html">
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
                                <a class="kt-menu-link" href="html/demo8/account/home/settings-sidebar.html">
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
                            <a class="kt-menu-link" data-kt-modal-toggle="#report_user_modal" href="#">
                            <span class="kt-menu-icon">
                                <i class="ki-filled ki-dislike">
                                </i>
                            </span>
                            <span class="kt-menu-title">
                                Report
                            </span>
                            </a>
                        </div>
                        <div class="kt-menu-separator">
                        </div>
                        <div class="kt-menu-item">
                            <a class="kt-menu-link" href="html/demo8/account/home/settings-enterprise.html">
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
                <div class="kt-card-content flex flex-col gap-4 p-5 lg:p-7.5 lg:pt-4">
                    <div class="flex flex-col gap-0.5">
                    <span class="text-sm font-normal text-secondary-foreground">
                        All time sales
                    </span>
                    <div class="flex items-center gap-2.5">
                        <span class="text-3xl font-semibold text-mono">
                        $295.7k
                        </span>
                        <span class="kt-badge kt-badge-outline kt-badge-success kt-badge-sm">
                        +2.7%
                        </span>
                    </div>
                    </div>
                    <div class="flex items-center gap-1 mb-1.5">
                    <div class="bg-green-500 h-2 w-full max-w-[60%] rounded-xs">
                    </div>
                    <div class="bg-destructive h-2 w-full max-w-[25%] rounded-xs">
                    </div>
                    <div class="bg-violet-500 h-2 w-full max-w-[15%] rounded-xs">
                    </div>
                    </div>
                    <div class="flex items-center flex-wrap gap-4 mb-1">
                    <div class="flex items-center gap-1.5">
                        <span class="rounded-full size-2 rounded-full kt-badge-success">
                        </span>
                        <span class="text-sm font-normal text-foreground">
                        Metronic
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="rounded-full size-2 rounded-full kt-badge-destructive">
                        </span>
                        <span class="text-sm font-normal text-foreground">
                        Bundle
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="rounded-full size-2 rounded-full kt-badge-info">
                        </span>
                        <span class="text-sm font-normal text-foreground">
                        MetronicNest
                        </span>
                    </div>
                    </div>
                    <div class="border-b border-input">
                    </div>
                    <div class="grid gap-3">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-1.5">
                        <i class="ki-filled ki-shop text-base text-muted-foreground">
                        </i>
                        <span class="text-sm font-normal text-mono">
                            Online Store
                        </span>
                        </div>
                        <div class="flex items-center text-sm font-medium text-foreground gap-6">
                        <span class="lg:text-right">
                            $172k
                        </span>
                        <span class="lg:text-right">
                            <i class="ki-filled ki-arrow-up text-green-500">
                            </i>
                            3.9%
                        </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-1.5">
                        <i class="ki-filled ki-facebook text-base text-muted-foreground">
                        </i>
                        <span class="text-sm font-normal text-mono">
                            Facebook
                        </span>
                        </div>
                        <div class="flex items-center text-sm font-medium text-foreground gap-6">
                        <span class="lg:text-right">
                            $85k
                        </span>
                        <span class="lg:text-right">
                            <i class="ki-filled ki-arrow-down text-destructive">
                            </i>
                            0.7%
                        </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-1.5">
                        <i class="ki-filled ki-instagram text-base text-muted-foreground">
                        </i>
                        <span class="text-sm font-normal text-mono">
                            Instagram
                        </span>
                        </div>
                        <div class="flex items-center text-sm font-medium text-foreground gap-6">
                        <span class="lg:text-right">
                            $36k
                        </span>
                        <span class="lg:text-right">
                            <i class="ki-filled ki-arrow-up text-green-500">
                            </i>
                            8.2%
                        </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-1.5">
                        <i class="ki-filled ki-google text-base text-muted-foreground">
                        </i>
                        <span class="text-sm font-normal text-mono">
                            Google
                        </span>
                        </div>
                        <div class="flex items-center text-sm font-medium text-foreground gap-6">
                        <span class="lg:text-right">
                            $26k
                        </span>
                        <span class="lg:text-right">
                            <i class="ki-filled ki-arrow-up text-green-500">
                            </i>
                            8.2%
                        </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-1.5">
                        <i class="ki-filled ki-shop text-base text-muted-foreground">
                        </i>
                        <span class="text-sm font-normal text-mono">
                            Retail
                        </span>
                        </div>
                        <div class="flex items-center text-sm font-medium text-foreground gap-6">
                        <span class="lg:text-right">
                            $7k
                        </span>
                        <span class="lg:text-right">
                            <i class="ki-filled ki-arrow-down text-destructive">
                            </i>
                            0.7%
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- end: grid -->
    </div>
@endsection