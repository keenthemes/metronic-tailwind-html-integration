<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
<head>
    @include('layouts.partials.head')
</head>
<body class="antialiased flex h-full text-base text-foreground bg-background demo1 kt-sidebar-fixed kt-header-fixed">
    @include('layouts.partials.theme-mode')

    <!-- Page -->
    <!-- Main -->
    <div class="flex grow">
        @include('layouts.demo1.partials.sidebar')

        <!-- Wrapper -->
        <div class="kt-wrapper flex grow flex-col">
            @include('layouts.demo1.partials.header')

            <!-- Content -->
            <main class="grow pt-5" id="content" role="content">
                @yield('content')
            </main>
            <!-- End of Content -->

            @include('layouts.demo1.partials.footer')
        </div>
        <!-- End of Wrapper -->
    </div>
    <!-- End of Main -->
    <!-- End of Page -->

    @include('layouts.partials.scripts')
</body>
</html>