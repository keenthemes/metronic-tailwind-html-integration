<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:60px] [--sidebar-width:90px] bg-muted">
        @include('partials.theme-toggle')

        <!-- Page -->
        <!-- Base -->
        <div class="flex grow">
            <!-- Wrapper -->
            <div class="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
                @include('layouts.demo8.sidebar')
                <!-- Main -->
                <div class="flex flex-col grow rounded-xl bg-background border border-input lg:ms-(--sidebar-width) mt-0 lg:mt-5 m-5">
                    <div class="flex flex-col grow kt-scrollable-y-auto lg:[--scrollbar-width:auto] pt-5" id="scrollable_content">
                        <main class="grow" role="content">
                            @include('layouts.demo8.toolbar')
                            <!-- Container -->
                            <div class="kt-container-fixed">
                                @yield('content')
                            </div>
                            <!-- End of Container -->
                        </main>
                        <!-- End of Content -->
                    </div>

					@include('layouts.demo8.footer')
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