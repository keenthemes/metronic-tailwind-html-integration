<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="demo1 kt-sidebar-fixed kt-header-fixed flex h-full bg-background text-base text-foreground antialiased">
        @include('partials.theme-toggle')

        <!-- Page -->
        <!-- Main -->
        <div class="flex grow">
            @include('layouts.demo1.sidebar')

            <!-- Wrapper -->
            <div class="kt-wrapper flex grow flex-col">
                @include('layouts.demo1.header')

                <!-- Content -->
                <main class="grow pt-5" id="content" role="content">
                    @yield('content')
                </main>
                <!-- End of Content -->

                @include('layouts.demo1.footer')
            </div>
            <!-- End of Wrapper -->
        </div>
        <!-- End of Main -->
        <!-- End of Page -->

        @include('layouts.partials.scripts')
    </body>
</html>
