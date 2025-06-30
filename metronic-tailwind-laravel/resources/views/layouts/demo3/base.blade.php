<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:58px] [--sidebar-width:58px] [--navbar-height:56px] lg:overflow-hidden bg-muted">
        @include('partials.theme-toggle')

        <!-- Page -->
        <!-- Base -->
        <div class="flex grow">
            @include('layouts.demo3.header')

            <!-- Wrapper -->
            <div class="flex flex-col lg:flex-row grow pt-(--header-height)">
                @include('layouts.demo3.sidebar')

                <!-- Main -->
                @include('layouts.demo3.navbar')

                <div class="flex grow rounded-b-xl bg-background border-x border-b border-input lg:mt-(--navbar-height) mx-5 lg:ms-(--sidebar-width) mb-5">
                    <div class="flex flex-col grow kt-scrollable-y lg:[scrollbar-width:auto] pt-7 lg:[&_.kt-container-fluid]:pe-4" id="scrollable_content">
                        <!-- Content -->
                        <main class="grow" role="content">
                            @yield('content')
                        </main>
                        <!-- End of Content -->
                        @include('layouts.demo3.footer')
                    </div>
                </div>
                <!-- End of Main -->
            </div>
            <!-- End of Wrapper -->
        </div>
        <!-- End of Base -->
        <!-- End of Page -->

        @include('layouts.partials.scripts')

        @yield('scripts')
    </body>
</html>