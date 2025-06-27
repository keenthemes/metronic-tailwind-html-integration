<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body
        class="flex h-full bg-background text-base text-foreground antialiased [--header-height:100px] data-[kt-sticky-header=on]:[--header-height:60px]">
        @include('partials.theme-toggle')

        <!-- Main -->
        <div class="in-data-[kt-sticky-header=on]:pt-(--header-height) flex grow flex-col">
            <!-- Header -->
            @include('layouts.demo2.header')

            <!-- Navbar -->
            @include('layouts.demo2.navbar')

            <!-- Toolbar -->
            @include('layouts.demo2.toolbar')

            <!-- Content -->
            <main class="grow" id="content" role="content">
                @yield('content')
            </main>

            <!-- Footer -->
            @include('layouts.demo2.footer')
        </div>

        @include('layouts.partials.scripts')
    </body>
</html>
