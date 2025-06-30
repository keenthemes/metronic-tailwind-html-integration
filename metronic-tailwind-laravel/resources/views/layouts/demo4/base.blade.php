<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:60px] [--sidebar-width:290px] bg-muted! lg:overflow-hidden">
        @include('partials.theme-toggle')

        <!-- Page -->
        <!-- Base -->
        <div class="flex grow">
            @include('layouts.demo4.header')

            <!-- Wrapper -->
            <div class="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
                @include('layouts.demo4.sidebar')

                <!-- Main -->
                <div class="flex grow rounded-xl bg-background border border-input lg:ms-(--sidebar-width) mt-0 lg:mt-5 m-5">
                    <div class="flex flex-col grow kt-scrollable-y-auto lg:[--kt-scrollbar-width:auto] pt-5" id="scrollable_content">
                        <main class="grow" role="content">
                            @include('layouts.demo4.toolbar')

                            <!-- Content -->
                            <main class="grow" id="content" role="content">
                                @yield('content')
                            </main>
                            <!-- End of Content -->

                            @include('layouts.demo4.footer')
                        </main>
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