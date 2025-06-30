@extends('layouts.demo9.base')

@section('content')
    <!--begin::Row-->
    <div class="flex flex-col xl:flex-row gap-5">
        <!--begin::Col-->
        <div class="flex flex-col w-full xl:w-2/3 gap-5">
            <!--begin::Row-->
            <div class="flex flex-col sm:flex-row gap-5">
                <!--begin::Col-->
                <div class="w-full sm:w-1/2">
                    <!--begin::Card-->
                    <div class="card bg-primary-active-light border-0">
                        <!--begin::Card body-->
                        <div class="card-body flex flex-col justify-between min-h-[220px] p-5">
                            <!--begin::Wrapper-->
                            <div class="flex flex-col">
                                <span class="text-gray-600 dark:text-gray-500 font-semibold mb-1">
                                    Total Balance
                                </span>
                                <span class="text-2xl font-bold">
                                    $4,595.00
                                </span>
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Wrapper-->
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-semibold">
                                        Your account is
                                    </span>
                                    <span class="kt-badge kt-badge-sm kt-badge-success">
                                        Verified
                                    </span>
                                </div>
                                <span class="text-sm font-semibold text-gray-500">
                                    You can withdraw up to $2,500 per day
                                </span>
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="w-full sm:w-1/2">
                    <!--begin::Card-->
                    <div class="card bg-opacity-10 bg-info border-0">
                        <!--begin::Card body-->
                        <div class="card-body flex flex-col justify-between min-h-[220px] p-5">
                            <!--begin::Wrapper-->
                            <div class="flex flex-col">
                                <span class="text-gray-600 dark:text-gray-500 font-semibold mb-1">
                                    Pending Balance
                                </span>
                                <span class="text-2xl font-bold">
                                    $1,200.00
                                </span>
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Wrapper-->
                            <div class="flex flex-col">
                                <span class="text-sm font-semibold text-gray-500">
                                    A deposit of $300 from
                                </span>
                                <a href="#" class="text-sm font-semibold text-primary">
                                    Barclays UK
                                </a>
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
            </div>
            <!--end::Row-->
            <!--begin::Card-->
            <div class="card border-0">
                <!--begin::Card header-->
                <div class="card-header border-0 pt-2">
                    <!--begin::Card title-->
                    <div class="card-title">
                        <h3 class="text-lg font-semibold">
                            My Cards
                        </h3>
                    </div>
                    <!--end::Card title-->
                    <!--begin::Card toolbar-->
                    <div class="card-toolbar">
                        <!--begin::Menu-->
                        <button class="kt-btn kt-btn-icon kt-btn-sm" data-kt-menu-placement="bottom-end" data-kt-menu-trigger="click">
                            <i class="ki-filled ki-dots-horizontal">
                            </i>
                        </button>
                        <div class="kt-menu-dropdown kt-menu-dropdown-classic w-24" data-kt-menu="true">
                            <div class="kt-menu-item">
                                <a href="#" class="kt-menu-link">
                                    <span class="kt-menu-title">
                                        Edit
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item">
                                <a href="#" class="kt-menu-link">
                                    <span class="kt-menu-title">
                                        Delete
                                    </span>
                                </a>
                            </div>
                            <div class="kt-menu-item">
                                <a href="#" class="kt-menu-link">
                                    <span class="kt-menu-title">
                                        Report
                                    </span>
                                </a>
                            </div>
                        </div>
                        <!--end::Menu-->
                    </div>
                    <!--end::Card toolbar-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body flex flex-col md:flex-row items-center gap-5 p-5">
                    <!--begin::Col-->
                    <div class="w-full md:w-1/2">
                        <!--begin::Card-->
                        <div class="card shadow-none bg-no-repeat bg-right-top bg-cover min-h-[220px] p-5" style="background-image:url('{{ asset('assets/media/svg/card-bg.svg') }}')">
                            <!--begin::Wrapper-->
                            <div class="flex flex-col h-full">
                                <div class="flex items-center gap-2 mb-1">
                                    <img src="{{ asset('assets/media/svg/mastercard.svg') }}" class="w-10" alt="mastercard">
                                    <div class="flex flex-col">
                                        <span class="text-gray-700 font-semibold">
                                            Mastercard
                                        </span>
                                        <span class="text-gray-600 text-sm">
                                            Personal
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-grow">
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xl font-bold">
                                        5000 **** **** 8474
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        Card expires at 06/28
                                    </span>
                                </div>
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Card-->
                    </div>
                    <!--end::Col-->
                    <!--begin::Col-->
                    <div class="w-full md:w-1/2">
                        <!--begin::Card-->
                        <div class="card shadow-none bg-no-repeat bg-right-top bg-cover min-h-[220px] p-5" style="background-image:url('{{ asset('assets/media/svg/card-bg.svg') }}')">
                            <!--begin::Wrapper-->
                            <div class="flex flex-col h-full">
                                <div class="flex items-center gap-2 mb-1">
                                    <img src="{{ asset('assets/media/svg/visa.svg') }}" class="w-10" alt="visa">
                                    <div class="flex flex-col">
                                        <span class="text-gray-700 font-semibold">
                                            Visa
                                        </span>
                                        <span class="text-gray-600 text-sm">
                                            Business
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-grow">
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xl font-bold">
                                        5000 **** **** 8474
                                    </span>
                                    <span class="text-sm text-gray-600">
                                        Card expires at 09/25
                                    </span>
                                </div>
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Card-->
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Card body-->
            </div>
            <!--end::Card-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="flex flex-col w-full xl:w-1/3 gap-5">
            <!--begin::Card-->
            <div class="card border-0">
                <!--begin::Card header-->
                <div class="card-header border-0">
                    <!--begin::Card title-->
                    <div class="card-title">
                        <h3 class="text-lg font-semibold">
                            Transactions
                        </h3>
                    </div>
                    <!--end::Card title-->
                    <!--begin::Card toolbar-->
                    <div class="card-toolbar">
                        <a href="#" class="text-sm font-semibold text-primary">
                            View All
                        </a>
                    </div>
                    <!--end::Card toolbar-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body p-0">
                    <!--begin::Table-->
                    <table class="table">
                        <!--begin::Thead-->
                        <thead>
                            <tr class="text-gray-500 text-sm font-semibold">
                                <th class="p-4 w-1/2">
                                    Description
                                </th>
                                <th class="p-4 w-1/4 text-end">
                                    Amount
                                </th>
                                <th class="p-4 w-1/4 text-end">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <!--end::Thead-->
                        <!--begin::Tbody-->
                        <tbody>
                            <tr>
                                <td class="p-4">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center justify-center w-10 h-10 bg-light rounded-full">
                                            <i class="ki-filled ki-arrow-down-left text-lg text-success">
                                            </i>
                                        </div>
                                        <div class="flex flex-col">
                                            <span class="font-semibold">
                                                Stripe
                                            </span>
                                            <span class="text-sm text-gray-500">
                                                Payment received
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="font-semibold text-success">
                                        +$24.00
                                    </span>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="text-sm font-semibold text-gray-500">
                                        24 Jan 2024
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center justify-center w-10 h-10 bg-light rounded-full">
                                            <i class="ki-filled ki-arrow-up-right text-lg text-danger">
                                            </i>
                                        </div>
                                        <div class="flex flex-col">
                                            <span class="font-semibold">
                                                Netflix
                                            </span>
                                            <span class="text-sm text-gray-500">
                                                Subscription
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="font-semibold text-danger">
                                        -$12.99
                                    </span>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="text-sm font-semibold text-gray-500">
                                        20 Jan 2024
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center justify-center w-10 h-10 bg-light rounded-full">
                                            <i class="ki-filled ki-arrow-up-right text-lg text-danger">
                                            </i>
                                        </div>
                                        <div class="flex flex-col">
                                            <span class="font-semibold">
                                                Figma
                                            </span>
                                            <span class="text-sm text-gray-500">
                                                Subscription
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="font-semibold text-danger">
                                        -$99.00
                                    </span>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="text-sm font-semibold text-gray-500">
                                        18 Jan 2024
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center justify-center w-10 h-10 bg-light rounded-full">
                                            <i class="ki-filled ki-arrow-down-left text-lg text-success">
                                            </i>
                                        </div>
                                        <div class="flex flex-col">
                                            <span class="font-semibold">
                                                Upwork
                                            </span>
                                            <span class="text-sm text-gray-500">
                                                Payment received
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="font-semibold text-success">
                                        +$124.00
                                    </span>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="text-sm font-semibold text-gray-500">
                                        12 Jan 2024
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center justify-center w-10 h-10 bg-light rounded-full">
                                            <i class="ki-filled ki-arrow-up-right text-lg text-danger">
                                            </i>
                                        </div>
                                        <div class="flex flex-col">
                                            <span class="font-semibold">
                                                Dribbble
                                            </span>
                                            <span class="text-sm text-gray-500">
                                                Subscription
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="font-semibold text-danger">
                                        -$24.00
                                    </span>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="text-sm font-semibold text-gray-500">
                                        10 Jan 2024
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center justify-center w-10 h-10 bg-light rounded-full">
                                            <i class="ki-filled ki-arrow-down-left text-lg text-success">
                                            </i>
                                        </div>
                                        <div class="flex flex-col">
                                            <span class="font-semibold">
                                                Envato
                                            </span>
                                            <span class="text-sm text-gray-500">
                                                Payment received
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="font-semibold text-success">
                                        +$424.00
                                    </span>
                                </td>
                                <td class="p-4 text-end">
                                    <span class="text-sm font-semibold text-gray-500">
                                        04 Jan 2024
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        <!--end::Tbody-->
                    </table>
                    <!--end::Table-->
                </div>
                <!--end::Card body-->
            </div>
            <!--end::Card-->
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->
@endsection
