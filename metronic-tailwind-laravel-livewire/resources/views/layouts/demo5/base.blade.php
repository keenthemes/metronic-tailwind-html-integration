<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @livewireStyles
    </head>
    <body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:54px] [--sidebar-width:200px]">
        <livewire:shared.theme-toggle />

        <!-- Page -->
        <!-- Main -->
        <div class="flex grow flex-col in-data-kt-[sticky-header=on]:pt-(--header-height)">
            <livewire:demo5.header />

            <livewire:demo5.navbar />

            <!-- Wrapper Container -->
            <div class="container-fixed w-full flex px-0 lg:ps-4">
                <livewire:demo5.sidebar />

                <!-- Content -->
                <main class="flex flex-col grow" id="content" role="content">
                    <livewire:demo5.toolbar />

					{{ $slot }}

                    <livewire:demo5.footer />
                </main>
                <!-- End of Content -->
            </div>
            <!-- End of Wrapper Container -->
        </div>
        <!-- End of Main -->

        @include('layouts.partials.scripts')
        @livewireScripts
    </body>
</html>