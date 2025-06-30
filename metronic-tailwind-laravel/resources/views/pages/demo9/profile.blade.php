@extends('layouts.demo9.base')

@section('content')
    <!--begin::Public Profile-->
    <div class="grid gap-5 lg:gap-7.5">
        <!--begin::Row-->
        <div class="grid lg:grid-cols-3 gap-5 lg:gap-7.5">
            <div class="lg:col-span-1">
                <div class="grid gap-5 lg:gap-7.5">
                    <!--begin::Card-->
                    <div class="card">
                        <div class="card-body flex flex-col justify-between gap-5">
                            <div class="flex flex-col items-center text-center gap-3">
                                <div class="kt-avatar kt-avatar-xl">
                                    <img src="{{ asset('assets/media/avatars/300-2.png') }}" alt="avatar">
                                </div>
                                <div class="flex flex-col gap-1">
                                    <a href="#" class="text-lg font-semibold text-gray-900 dark:text-gray-100 dark:hover:text-primary hover:text-primary transition-colors">
                                        Cody Fisher
                                    </a>
                                    <div class="flex items-center text-sm font-medium text-gray-600 dark:text-gray-500 gap-1.5">
                                        <i class="ki-filled ki-badge text-lg">
                                        </i>
                                        <span>
                                            Team Lead
                                        </span>
                                    </div>
                                    <div class="flex items-center text-sm font-medium text-gray-600 dark:text-gray-500 gap-1.5">
                                        <i class="ki-filled ki-geolocation text-lg">
                                        </i>
                                        <span>
                                            Los Angeles, CA
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-2.5">
                                <a href="#" class="kt-btn kt-btn-primary">
                                    <i class="ki-filled ki-plus">
                                    </i>
                                    <span>
                                        Follow
                                    </span>
                                </a>
                                <div class="kt-menu" data-kt-menu="true">
                                    <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                        <button class="kt-menu-toggle kt-btn kt-btn-outline">
                                            <i class="ki-filled ki-send">
                                            </i>
                                            <span>
                                                Message
                                            </span>
                                        </button>
                                        <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-message-text-2">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        Send Email
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-bubble">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        SMS
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-question">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        Chat
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Card-->
                    <!--begin::Card-->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">
                                Profile Details
                            </h3>
                            <div class="kt-menu" data-kt-menu="true">
                                <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                    <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                        <i class="ki-filled ki-dots-vertical text-lg">
                                        </i>
                                    </button>
                                    <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="#">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-pencil">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title">
                                                    Edit Profile
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="#">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-shield-tick">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title">
                                                    Activity
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="#">
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
                        <div class="card-body flex flex-col gap-4">
                            <div class="flex items-center justify-between flex-wrap gap-2">
                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                    Last Active
                                </span>
                                <span class="text-sm font-semibold text-gray-800 dark:text-gray-300">
                                    2 days ago
                                </span>
                            </div>
                            <div class="flex items-center justify-between flex-wrap gap-2">
                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                    Status
                                </span>
                                <span class="kt-badge kt-badge-sm kt-badge-outline kt-badge-success">
                                    Active
                                </span>
                            </div>
                            <div class="flex items-center justify-between flex-wrap gap-2">
                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                    Language
                                </span>
                                <span class="text-sm font-semibold text-gray-800 dark:text-gray-300">
                                    English
                                </span>
                            </div>
                            <div class="flex items-center justify-between flex-wrap gap-2">
                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                    Timezone
                                </span>
                                <span class="text-sm font-semibold text-gray-800 dark:text-gray-300">
                                    GMT-10:00
                                </span>
                            </div>
                        </div>
                    </div>
                    <!--end::Card-->
                    <!--begin::Card-->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">
                                Social Networks
                            </h3>
                            <div class="kt-menu" data-kt-menu="true">
                                <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                    <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                        <i class="ki-filled ki-dots-vertical text-lg">
                                        </i>
                                    </button>
                                    <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="#">
                                                <span class="kt-menu-icon">
                                                    <i class="ki-filled ki-plus-square">
                                                    </i>
                                                </span>
                                                <span class="kt-menu-title">
                                                    Add Profile
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
                                                    Edit Profile
                                                </span>
                                            </a>
                                        </div>
                                        <div class="kt-menu-item">
                                            <a class="kt-menu-link" href="#">
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
                        <div class="card-body flex flex-col gap-3">
                            <a class="flex items-center gap-2" href="#">
                                <i class="ki-filled ki-dribbble text-2xl text-dribbble">
                                </i>
                                <span class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                    dribbble.com/keenthemes
                                </span>
                            </a>
                            <a class="flex items-center gap-2" href="#">
                                <i class="ki-filled ki-facebook text-2xl text-facebook">
                                </i>
                                <span class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                    facebook.com/keenthemes
                                </span>
                            </a>
                            <a class="flex items-center gap-2" href="#">
                                <i class="ki-filled ki-instagram text-2xl text-instagram">
                                </i>
                                <span class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                    instagram.com/keenthemes
                                </span>
                            </a>
                            <a class="flex items-center gap-2" href="#">
                                <i class="ki-filled ki-twitter text-2xl text-twitter">
                                </i>
                                <span class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                    twitter.com/keenthemes
                                </span>
                            </a>
                        </div>
                    </div>
                    <!--end::Card-->
                </div>
            </div>
            <div class="lg:col-span-2">
                <div class="grid gap-5 lg:gap-7.5">
                    <!--begin::Navbar-->
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="kt-tabs" data-kt-tabs="true">
                                <div class="kt-tabs-nav flex">
                                    <button class="kt-tab-toggle kt-tab-active:text-primary kt-tab-active:border-primary-light kt-tab-active:bg-primary-light text-sm font-semibold px-4 py-2.5 border-b-2 border-b-transparent" data-kt-tab-toggle="#profile_tab_pane_1">
                                        Activity
                                    </button>
                                    <button class="kt-tab-toggle kt-tab-active:text-primary kt-tab-active:border-primary-light kt-tab-active:bg-primary-light text-sm font-semibold px-4 py-2.5 border-b-2 border-b-transparent" data-kt-tab-toggle="#profile_tab_pane_2">
                                        Projects
                                    </button>
                                    <button class="kt-tab-toggle kt-tab-active:text-primary kt-tab-active:border-primary-light kt-tab-active:bg-primary-light text-sm font-semibold px-4 py-2.5 border-b-2 border-b-transparent" data-kt-tab-toggle="#profile_tab_pane_3">
                                        Campaigns
                                    </button>
                                    <button class="kt-tab-toggle kt-tab-active:text-primary kt-tab-active:border-primary-light kt-tab-active:bg-primary-light text-sm font-semibold px-4 py-2.5 border-b-2 border-b-transparent" data-kt-tab-toggle="#profile_tab_pane_4">
                                        Documents
                                    </button>
                                    <button class="kt-tab-toggle kt-tab-active:text-primary kt-tab-active:border-primary-light kt-tab-active:bg-primary-light text-sm font-semibold px-4 py-2.5 border-b-2 border-b-transparent" data-kt-tab-toggle="#profile_tab_pane_5">
                                        Followers
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Navbar-->
                    <div id="profile_tab_pane_1">
                        <div class="grid gap-5 lg:gap-7.5">
                            <!--begin::Card-->
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        Activity
                                    </h3>
                                    <div class="kt-menu" data-kt-menu="true">
                                        <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                            <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                                <i class="ki-filled ki-dots-vertical text-lg">
                                                </i>
                                            </button>
                                            <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                                <div class="kt-menu-item">
                                                    <a class="kt-menu-link" href="#">
                                                        <span class="kt-menu-icon">
                                                            <i class="ki-filled ki-plus-square">
                                                            </i>
                                                        </span>
                                                        <span class="kt-menu-title">
                                                            Add Member
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
                                                            Edit Profile
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
                                <div class="card-body">
                                    <!--begin::Timeline-->
                                    <div class="grid gap-4">
                                        <!--begin::Timeline item-->
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-[18px] h-[18px] border-2 border-gray-300 dark:border-gray-500 rounded-full mt-1.5 ring-4 ring-gray-100 dark:ring-gray-700">
                                            </div>
                                            <div class="grid gap-2">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Jane Perez
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        has sent a new message to
                                                    </span>
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        "Project Zero"
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        group
                                                    </span>
                                                </div>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    Today, 2:40 PM
                                                </span>
                                            </div>
                                        </div>
                                        <!--end::Timeline item-->
                                        <!--begin::Timeline item-->
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-[18px] h-[18px] border-2 border-gray-300 dark:border-gray-500 rounded-full mt-1.5 ring-4 ring-gray-100 dark:ring-gray-700">
                                            </div>
                                            <div class="grid gap-2">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Sam Wilson
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        has created a new project
                                                    </span>
                                                    <a href="#" class="kt-badge kt-badge-sm kt-badge-outline kt-badge-success">
                                                        "Crypto"
                                                    </a>
                                                </div>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    Today, 1:40 PM
                                                </span>
                                            </div>
                                        </div>
                                        <!--end::Timeline item-->
                                        <!--begin::Timeline item-->
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-[18px] h-[18px] border-2 border-gray-300 dark:border-gray-500 rounded-full mt-1.5 ring-4 ring-gray-100 dark:ring-gray-700">
                                            </div>
                                            <div class="grid gap-4">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        The event
                                                    </span>
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        "Project Phoenix"
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        has been successfully created
                                                    </span>
                                                </div>
                                                <div class="flex items-center gap-4">
                                                    <div class="kt-avatar-group">
                                                        <a href="#" class="kt-avatar-sm" data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                            <img src="{{ asset('assets/media/avatars/300-1.png') }}" alt="avatar">
                                                            <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                                Jane Perez
                                                            </span>
                                                        </a>
                                                        <a href="#" class="kt-avatar-sm" data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                            <img src="{{ asset('assets/media/avatars/300-2.png') }}" alt="avatar">
                                                            <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                                Cody Fisher
                                                            </span>
                                                        </a>
                                                        <a href="#" class="kt-avatar-sm" data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                            <img src="{{ asset('assets/media/avatars/300-3.png') }}" alt="avatar">
                                                            <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                                Esther Howard
                                                            </span>
                                                        </a>
                                                        <a href="#" class="kt-avatar-sm" data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                            <img src="{{ asset('assets/media/avatars/300-4.png') }}" alt="avatar">
                                                            <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                                Jenny Wilson
                                                            </span>
                                                        </a>
                                                        <a href="#" class="kt-avatar-sm" data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                            <img src="{{ asset('assets/media/avatars/300-5.png') }}" alt="avatar">
                                                            <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                                Marvin McKinney
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        Yesterday, 10:30 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end::Timeline item-->
                                        <!--begin::Timeline item-->
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-[18px] h-[18px] border-2 border-gray-300 dark:border-gray-500 rounded-full mt-1.5 ring-4 ring-gray-100 dark:ring-gray-700">
                                            </div>
                                            <div class="grid gap-2">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        A new file has been uploaded to
                                                    </span>
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        "Finance"
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        folder
                                                    </span>
                                                </div>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    Yesterday, 10:30 AM
                                                </span>
                                            </div>
                                        </div>
                                        <!--end::Timeline item-->
                                        <!--begin::Timeline item-->
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-[18px] h-[18px] border-2 border-gray-300 dark:border-gray-500 rounded-full mt-1.5 ring-4 ring-gray-100 dark:ring-gray-700">
                                            </div>
                                            <div class="grid gap-4">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Esther Howard
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        has added 2 new members to
                                                    </span>
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        "Marketing"
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        group
                                                    </span>
                                                </div>
                                                <div class="flex items-center gap-4">
                                                    <div class="kt-avatar-group">
                                                        <div class="kt-avatar-sm" data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                            <img src="{{ asset('assets/media/avatars/300-1.png') }}" alt="avatar">
                                                            <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                                Jane Perez
                                                            </span>
                                                        </div>
                                                        <div class="kt-avatar-sm" data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                            <img src="{{ asset('assets/media/avatars/300-2.png') }}" alt="avatar">
                                                            <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                                Cody Fisher
                                                            </span>
                                                        </div>
                                                        <div class="kt-avatar-sm" data-kt-tooltip="true" data-kt-tooltip-placement="top">
                                                            <img src="{{ asset('assets/media/avatars/300-3.png') }}" alt="avatar">
                                                            <span class="kt-tooltip" data-kt-tooltip-content="true">
                                                                Esther Howard
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        Yesterday, 9:30 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end::Timeline item-->
                                        <!--begin::Timeline item-->
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-[18px] h-[18px] border-2 border-gray-300 dark:border-gray-500 rounded-full mt-1.5 ring-4 ring-gray-100 dark:ring-gray-700">
                                            </div>
                                            <div class="grid gap-2">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Marvin McKinney
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        has joined to
                                                    </span>
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        "Project Alpha"
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        group
                                                    </span>
                                                </div>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    2 days ago, 11:30 AM
                                                </span>
                                            </div>
                                        </div>
                                        <!--end::Timeline item-->
                                        <!--begin::Timeline item-->
                                        <div class="flex items-start gap-4">
                                            <div class="flex-shrink-0 w-[18px] h-[18px] border-2 border-gray-300 dark:border-gray-500 rounded-full mt-1.5 ring-4 ring-gray-100 dark:ring-gray-700">
                                            </div>
                                            <div class="grid gap-2">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Robert Fox
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        has created a new task in
                                                    </span>
                                                    <a href="#" class="kt-badge kt-badge-sm kt-badge-outline kt-badge-primary">
                                                        "Project Phoenix"
                                                    </a>
                                                </div>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    2 days ago, 10:30 AM
                                                </span>
                                            </div>
                                        </div>
                                        <!--end::Timeline item-->
                                    </div>
                                    <!--end::Timeline-->
                                </div>
                            </div>
                            <!--end::Card-->
                            <!--begin::Card-->
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        Connections
                                    </h3>
                                    <a href="#" class="text-sm font-semibold text-primary hover:text-primary-active">
                                        View All
                                    </a>
                                </div>
                                <div class="card-body">
                                    <div class="grid md:grid-cols-2 gap-5">
                                        <!--begin::Connection-->
                                        <div class="card shadow-none">
                                            <div class="card-body flex items-center gap-4 p-4">
                                                <div class="kt-avatar kt-avatar-lg">
                                                    <img src="{{ asset('assets/media/avatars/300-1.png') }}" alt="avatar">
                                                </div>
                                                <div class="flex flex-col gap-1">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Jane Perez
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        Team Lead
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end::Connection-->
                                        <!--begin::Connection-->
                                        <div class="card shadow-none">
                                            <div class="card-body flex items-center gap-4 p-4">
                                                <div class="kt-avatar kt-avatar-lg">
                                                    <img src="{{ asset('assets/media/avatars/300-2.png') }}" alt="avatar">
                                                </div>
                                                <div class="flex flex-col gap-1">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Cody Fisher
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        Project Manager
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end::Connection-->
                                        <!--begin::Connection-->
                                        <div class="card shadow-none">
                                            <div class="card-body flex items-center gap-4 p-4">
                                                <div class="kt-avatar kt-avatar-lg">
                                                    <img src="{{ asset('assets/media/avatars/300-3.png') }}" alt="avatar">
                                                </div>
                                                <div class="flex flex-col gap-1">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Esther Howard
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        Ruby Developer
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end::Connection-->
                                        <!--begin::Connection-->
                                        <div class="card shadow-none">
                                            <div class="card-body flex items-center gap-4 p-4">
                                                <div class="kt-avatar kt-avatar-lg">
                                                    <img src="{{ asset('assets/media/avatars/300-4.png') }}" alt="avatar">
                                                </div>
                                                <div class="flex flex-col gap-1">
                                                    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                        Jenny Wilson
                                                    </a>
                                                    <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                        UX Designer
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--end::Connection-->
                                    </div>
                                </div>
                            </div>
                            <!--end::Card-->
                        </div>
                    </div>
                    <div id="profile_tab_pane_2" class="hidden">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    Projects
                                </h3>
                                <div class="kt-menu" data-kt-menu="true">
                                    <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                        <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                            <i class="ki-filled ki-dots-vertical text-lg">
                                            </i>
                                        </button>
                                        <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-plus-square">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        Add Project
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
                                                        Edit Project
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
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
                            <div class="card-body">
                                <div class="grid sm:grid-cols-2 gap-5">
                                    <!--begin::Project-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col gap-3.5">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-2.5">
                                                    <div class="kt-avatar kt-avatar-md">
                                                        <img src="{{ asset('assets/media/brand-logos/plentymarkets.svg') }}" alt="avatar">
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                            Plentymarkets
                                                        </a>
                                                        <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                            CRM System
                                                        </span>
                                                    </div>
                                                </div>
                                                <span class="kt-badge kt-badge-outline kt-badge-primary">
                                                    Active
                                                </span>
                                            </div>
                                            <p class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                CRM dashboard showing your progress and various sales practises
                                            </p>
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Due Date
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        2024/09/25
                                                    </span>
                                                </div>
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Budget
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        $24,800
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-1.5">
                                                <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                    Progress
                                                </span>
                                                <div class="flex items-center gap-4">
                                                    <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-500 rounded-full">
                                                        <div class="h-1.5 rounded-full bg-success" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        55%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Project-->
                                    <!--begin::Project-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col gap-3.5">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-2.5">
                                                    <div class="kt-avatar kt-avatar-md">
                                                        <img src="{{ asset('assets/media/brand-logos/disqus.svg') }}" alt="avatar">
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                            Disqus
                                                        </a>
                                                        <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                            Community Forum
                                                        </span>
                                                    </div>
                                                </div>
                                                <span class="kt-badge kt-badge-outline kt-badge-primary">
                                                    Active
                                                </span>
                                            </div>
                                            <p class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                Community forum for all your customers to interact with each other
                                            </p>
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Due Date
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        2024/11/15
                                                    </span>
                                                </div>
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Budget
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        $8,400
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-1.5">
                                                <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                    Progress
                                                </span>
                                                <div class="flex items-center gap-4">
                                                    <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-500 rounded-full">
                                                        <div class="h-1.5 rounded-full bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        75%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Project-->
                                    <!--begin::Project-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col gap-3.5">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-2.5">
                                                    <div class="kt-avatar kt-avatar-md">
                                                        <img src="{{ asset('assets/media/brand-logos/infusionsoft.svg') }}" alt="avatar">
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                            Infusionsoft
                                                        </a>
                                                        <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                            Subscrition Management
                                                        </span>
                                                    </div>
                                                </div>
                                                <span class="kt-badge kt-badge-outline kt-badge-primary">
                                                    Active
                                                </span>
                                            </div>
                                            <p class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                Subscription management for your end users to control their plans
                                            </p>
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Due Date
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        2024/10/25
                                                    </span>
                                                </div>
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Budget
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        $12,600
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-1.5">
                                                <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                    Progress
                                                </span>
                                                <div class="flex items-center gap-4">
                                                    <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-500 rounded-full">
                                                        <div class="h-1.5 rounded-full bg-success" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        85%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Project-->
                                    <!--begin::Project-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col gap-3.5">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-2.5">
                                                    <div class="kt-avatar kt-avatar-md">
                                                        <img src="{{ asset('assets/media/brand-logos/kickstarter.svg') }}" alt="avatar">
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                            Kickstarter
                                                        </a>
                                                        <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                            Project Funding
                                                        </span>
                                                    </div>
                                                </div>
                                                <span class="kt-badge kt-badge-outline kt-badge-warning">
                                                    Pending
                                                </span>
                                            </div>
                                            <p class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                Project funding module for your customers to invest in your business
                                            </p>
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Due Date
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        2025/01/10
                                                    </span>
                                                </div>
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Budget
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        $48,400
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-1.5">
                                                <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                    Progress
                                                </span>
                                                <div class="flex items-center gap-4">
                                                    <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-500 rounded-full">
                                                        <div class="h-1.5 rounded-full bg-success" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        65%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Project-->
                                    <!--begin::Project-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col gap-3.5">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-2.5">
                                                    <div class="kt-avatar kt-avatar-md">
                                                        <img src="{{ asset('assets/media/brand-logos/telegram.svg') }}" alt="avatar">
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                            Telegram
                                                        </a>
                                                        <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                            Instant Messaging
                                                        </span>
                                                    </div>
                                                </div>
                                                <span class="kt-badge kt-badge-outline kt-badge-danger">
                                                    Cancelled
                                                </span>
                                            </div>
                                            <p class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                Instant messaging app for your customers to communicate with you
                                            </p>
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Due Date
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        2024/09/25
                                                    </span>
                                                </div>
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Budget
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        $24,800
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-1.5">
                                                <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                    Progress
                                                </span>
                                                <div class="flex items-center gap-4">
                                                    <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-500 rounded-full">
                                                        <div class="h-1.5 rounded-full bg-success" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        55%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Project-->
                                    <!--begin::Project-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col gap-3.5">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-2.5">
                                                    <div class="kt-avatar kt-avatar-md">
                                                        <img src="{{ asset('assets/media/brand-logos/vimeo.svg') }}" alt="avatar">
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                            Vimeo
                                                        </a>
                                                        <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                            Video Streaming
                                                        </span>
                                                    </div>
                                                </div>
                                                <span class="kt-badge kt-badge-outline kt-badge-primary">
                                                    Active
                                                </span>
                                            </div>
                                            <p class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                Video streaming service for your customers to watch your content
                                            </p>
                                            <div class="flex items-center justify-between">
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Due Date
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        2024/09/25
                                                    </span>
                                                </div>
                                                <div class="flex flex-col gap-1.5">
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        Budget
                                                    </span>
                                                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        $24,800
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-1.5">
                                                <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                    Progress
                                                </span>
                                                <div class="flex items-center gap-4">
                                                    <div class="w-full h-1.5 bg-gray-200 dark:bg-gray-500 rounded-full">
                                                        <div class="h-1.5 rounded-full bg-success" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span class="text-sm font-semibold text-gray-600 dark:text-gray-500">
                                                        55%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Project-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="profile_tab_pane_3" class="hidden">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    Campaigns
                                </h3>
                                <div class="kt-menu" data-kt-menu="true">
                                    <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                        <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                            <i class="ki-filled ki-dots-vertical text-lg">
                                            </i>
                                        </button>
                                        <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-plus-square">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        Add Campaign
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
                                                        Edit Campaign
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
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
                            <div class="card-body">
                                <div class="grid gap-4">
                                    <!--begin::Campaign-->
                                    <div class="flex items-center flex-wrap gap-4">
                                        <div class="flex items-center flex-1 gap-4">
                                            <img src="{{ asset('assets/media/brand-logos/google-webdev.svg') }}" class="w-10 h-10" alt="google-webdev">
                                            <div class="flex flex-col gap-1">
                                                <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                    Google Webdev
                                                </a>
                                                <div class="flex items-center flex-wrap gap-x-2 gap-y-1">
                                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                        Creation date:
                                                        <span class="text-gray-800 dark:text-gray-300">
                                                            24/07/2024
                                                        </span>
                                                    </span>
                                                    <span class="w-1 h-1 rounded-full bg-gray-500">
                                                    </span>
                                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                        Target:
                                                        <span class="text-gray-800 dark:text-gray-300">
                                                            2,400
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <div class="flex flex-col gap-1 text-end">
                                                <span class="text-sm font-bold text-gray-900 dark:text-gray-100">
                                                    $2,450
                                                </span>
                                                <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                    Total Spent
                                                </span>
                                            </div>
                                            <div class="kt-menu" data-kt-menu="true">
                                                <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                                    <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-light">
                                                        <i class="ki-filled ki-dots-vertical text-lg">
                                                        </i>
                                                    </button>
                                                    <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                                        <div class="kt-menu-item">
                                                            <a class="kt-menu-link" href="#">
                                                                <span class="kt-menu-icon">
                                                                    <i class="ki-filled ki-plus-square">
                                                                    </i>
                                                                </span>
                                                                <span class="kt-menu-title">
                                                                    Add Campaign
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
                                                                    Edit Campaign
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
                                    </div>
                                    <!--end::Campaign-->
                                    <!--begin::Campaign-->
                                    <div class="flex items-center flex-wrap gap-4">
                                        <div class="flex items-center flex-1 gap-4">
                                            <img src="{{ asset('assets/media/brand-logos/facebook.svg') }}" class="w-10 h-10" alt="facebook">
                                            <div class="flex flex-col gap-1">
                                                <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                    Facebook Ads
                                                </a>
                                                <div class="flex items-center flex-wrap gap-x-2 gap-y-1">
                                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                        Creation date:
                                                        <span class="text-gray-800 dark:text-gray-300">
                                                            24/07/2024
                                                        </span>
                                                    </span>
                                                    <span class="w-1 h-1 rounded-full bg-gray-500">
                                                    </span>
                                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                        Target:
                                                        <span class="text-gray-800 dark:text-gray-300">
                                                            3,500
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <div class="flex flex-col gap-1 text-end">
                                                <span class="text-sm font-bold text-gray-900 dark:text-gray-100">
                                                    $3,200
                                                </span>
                                                <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                    Total Spent
                                                </span>
                                            </div>
                                            <div class="kt-menu" data-kt-menu="true">
                                                <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                                    <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-light">
                                                        <i class="ki-filled ki-dots-vertical text-lg">
                                                        </i>
                                                    </button>
                                                    <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                                        <div class="kt-menu-item">
                                                            <a class="kt-menu-link" href="#">
                                                                <span class="kt-menu-icon">
                                                                    <i class="ki-filled ki-plus-square">
                                                                    </i>
                                                                </span>
                                                                <span class="kt-menu-title">
                                                                    Add Campaign
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
                                                                    Edit Campaign
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
                                    </div>
                                    <!--end::Campaign-->
                                    <!--begin::Campaign-->
                                    <div class="flex items-center flex-wrap gap-4">
                                        <div class="flex items-center flex-1 gap-4">
                                            <img src="{{ asset('assets/media/brand-logos/twitter.svg') }}" class="w-10 h-10" alt="twitter">
                                            <div class="flex flex-col gap-1">
                                                <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                    Twitter Competitors
                                                </a>
                                                <div class="flex items-center flex-wrap gap-x-2 gap-y-1">
                                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                        Creation date:
                                                        <span class="text-gray-800 dark:text-gray-300">
                                                            24/07/2024
                                                        </span>
                                                    </span>
                                                    <span class="w-1 h-1 rounded-full bg-gray-500">
                                                    </span>
                                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                        Target:
                                                        <span class="text-gray-800 dark:text-gray-300">
                                                            4,600
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-4">
                                            <div class="flex flex-col gap-1 text-end">
                                                <span class="text-sm font-bold text-gray-900 dark:text-gray-100">
                                                    $4,600
                                                </span>
                                                <span class="text-xs font-medium text-gray-600 dark:text-gray-500">
                                                    Total Spent
                                                </span>
                                            </div>
                                            <div class="kt-menu" data-kt-menu="true">
                                                <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                                    <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-light">
                                                        <i class="ki-filled ki-dots-vertical text-lg">
                                                        </i>
                                                    </button>
                                                    <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                                        <div class="kt-menu-item">
                                                            <a class="kt-menu-link" href="#">
                                                                <span class="kt-menu-icon">
                                                                    <i class="ki-filled ki-plus-square">
                                                                    </i>
                                                                </span>
                                                                <span class="kt-menu-title">
                                                                    Add Campaign
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
                                                                    Edit Campaign
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
                                    </div>
                                    <!--end::Campaign-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="profile_tab_pane_4" class="hidden">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    Documents
                                </h3>
                                <div class="kt-menu" data-kt-menu="true">
                                    <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                                        <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                                            <i class="ki-filled ki-dots-vertical text-lg">
                                            </i>
                                        </button>
                                        <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
                                                    <span class="kt-menu-icon">
                                                        <i class="ki-filled ki-plus-square">
                                                        </i>
                                                    </span>
                                                    <span class="kt-menu-title">
                                                        Add Document
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
                                                        Edit Document
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="kt-menu-item">
                                                <a class="kt-menu-link" href="#">
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
                            <div class="card-body">
                                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    <!--begin::Document-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col items-center p-5">
                                            <img src="{{ asset('assets/media/file-types/pdf.svg') }}" class="w-10 h-10 mb-2.5" alt="pdf">
                                            <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary text-center transition-colors">
                                                Project Specifications
                                            </a>
                                            <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                1.2 MB
                                            </span>
                                        </div>
                                    </div>
                                    <!--end::Document-->
                                    <!--begin::Document-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col items-center p-5">
                                            <img src="{{ asset('assets/media/file-types/doc.svg') }}" class="w-10 h-10 mb-2.5" alt="doc">
                                            <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary text-center transition-colors">
                                                Project Briefing
                                            </a>
                                            <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                2.4 MB
                                            </span>
                                        </div>
                                    </div>
                                    <!--end::Document-->
                                    <!--begin::Document-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col items-center p-5">
                                            <img src="{{ asset('assets/media/file-types/zip.svg') }}" class="w-10 h-10 mb-2.5" alt="zip">
                                            <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary text-center transition-colors">
                                                Project Assets
                                            </a>
                                            <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                1.2 GB
                                            </span>
                                        </div>
                                    </div>
                                    <!--end::Document-->
                                    <!--begin::Document-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col items-center p-5">
                                            <img src="{{ asset('assets/media/file-types/gif.svg') }}" class="w-10 h-10 mb-2.5" alt="gif">
                                            <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary text-center transition-colors">
                                                Project Animations
                                            </a>
                                            <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                4.5 MB
                                            </span>
                                        </div>
                                    </div>
                                    <!--end::Document-->
                                    <!--begin::Document-->
                                    <div class="card shadow-none border border-gray-300 dark:border-gray-500">
                                        <div class="card-body flex flex-col items-center p-5">
                                            <img src="{{ asset('assets/media/file-types/ai.svg') }}" class="w-10 h-10 mb-2.5" alt="ai">
                                            <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary text-center transition-colors">
                                                Project Illustrations
                                            </a>
                                            <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                8.9 MB
                                            </span>
                                        </div>
                                    </div>
                                    <!--end::Document-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="profile_tab_pane_5" class="hidden">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    Followers
                                </h3>
                                <a href="#" class="text-sm font-semibold text-primary hover:text-primary-active">
                                    View All
                                </a>
                            </div>
                            <div class="card-body">
                                <div class="grid gap-4">
                                    <!--begin::Follower-->
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center flex-1 gap-4">
                                            <div class="kt-avatar kt-avatar-lg">
                                                <img src="{{ asset('assets/media/avatars/300-1.png') }}" alt="avatar">
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                    Jane Perez
                                                </a>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    Team Lead
                                                </span>
                                            </div>
                                        </div>
                                        <button class="kt-btn kt-btn-sm kt-btn-outline">
                                            <i class="ki-filled ki-plus">
                                            </i>
                                            <span>
                                                Follow
                                            </span>
                                        </button>
                                    </div>
                                    <!--end::Follower-->
                                    <!--begin::Follower-->
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center flex-1 gap-4">
                                            <div class="kt-avatar kt-avatar-lg">
                                                <img src="{{ asset('assets/media/avatars/300-2.png') }}" alt="avatar">
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                    Cody Fisher
                                                </a>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    Project Manager
                                                </span>
                                            </div>
                                        </div>
                                        <button class="kt-btn kt-btn-sm kt-btn-primary">
                                            <i class="ki-filled ki-check">
                                            </i>
                                            <span>
                                                Following
                                            </span>
                                        </button>
                                    </div>
                                    <!--end::Follower-->
                                    <!--begin::Follower-->
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center flex-1 gap-4">
                                            <div class="kt-avatar kt-avatar-lg">
                                                <img src="{{ asset('assets/media/avatars/300-3.png') }}" alt="avatar">
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                    Esther Howard
                                                </a>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    Ruby Developer
                                                </span>
                                            </div>
                                        </div>
                                        <button class="kt-btn kt-btn-sm kt-btn-outline">
                                            <i class="ki-filled ki-plus">
                                            </i>
                                            <span>
                                                Follow
                                            </span>
                                        </button>
                                    </div>
                                    <!--end::Follower-->
                                    <!--begin::Follower-->
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center flex-1 gap-4">
                                            <div class="kt-avatar kt-avatar-lg">
                                                <img src="{{ asset('assets/media/avatars/300-4.png') }}" alt="avatar">
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                    Jenny Wilson
                                                </a>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    UX Designer
                                                </span>
                                            </div>
                                        </div>
                                        <button class="kt-btn kt-btn-sm kt-btn-primary">
                                            <i class="ki-filled ki-check">
                                            </i>
                                            <span>
                                                Following
                                            </span>
                                        </button>
                                    </div>
                                    <!--end::Follower-->
                                    <!--begin::Follower-->
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center flex-1 gap-4">
                                            <div class="kt-avatar kt-avatar-lg">
                                                <img src="{{ asset('assets/media/avatars/300-5.png') }}" alt="avatar">
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <a href="#" class="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
                                                    Marvin McKinney
                                                </a>
                                                <span class="text-sm font-medium text-gray-600 dark:text-gray-500">
                                                    Product Manager
                                                </span>
                                            </div>
                                        </div>
                                        <button class="kt-btn kt-btn-sm kt-btn-outline">
                                            <i class="ki-filled ki-plus">
                                            </i>
                                            <span>
                                                Follow
                                            </span>
                                        </button>
                                    </div>
                                    <!--end::Follower-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end::Row-->
    </div>
    <!--end::Public Profile-->
@endsection