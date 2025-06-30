<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:60px] [--sidebar-width:285px] lg:overflow-hidden bg-muted">
        @include('partials.theme-toggle')

        <!-- Page -->
        <!-- Main -->
        <div class="flex grow">
            @include('layouts.demo7.sidebar')

            <!-- Wrapper -->
            <div class="flex flex-col grow">
                @include('layouts.demo7.header')

                <!-- Content -->
                <main class="grow" id="content" role="content">
                    <!-- Container -->
                    <div class="kt-container-fluid">
                        @yield('content')
                    </div>
                    <!-- End of Container -->
                </main>
                <!-- End of Content -->

                @include('layouts.demo7.footer')
            </div>
            <!-- End of Wrapper -->
        </div>
        <!-- End of Main -->
        <!-- End of Page -->

        @include('layouts.partials.scripts')

        @yield('scripts')
    </body>
</html>