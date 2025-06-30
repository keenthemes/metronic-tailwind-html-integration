<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full" data-kt-theme-mode="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="demo9 flex h-full bg-light antialiased">
    @include('partials.theme-toggle')

    <!-- Page -->
    <div class="flex grow">
        @include('layouts.demo9.sidebar')

        <!-- Wrapper -->
        <div class="kt-wrapper flex grow flex-col">
            @include('layouts.demo9.header')

            <!-- Content -->
            <main class="grow" id="content" role="content">
                <div class="kt-container-fixed">
                    @yield('content')
                </div>
            </main>
            <!-- End of Content -->

            @include('layouts.demo9.footer')
        </div>
        <!-- End of Wrapper -->
    </div>
    <!-- End of Page -->

    @include('layouts.partials.scripts')
</body>
</html>