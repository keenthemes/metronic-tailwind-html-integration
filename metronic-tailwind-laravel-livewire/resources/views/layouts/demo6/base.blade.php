<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @livewireStyles
    </head>
    <body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:60px] [--sidebar-width:270px] lg:overflow-hidden bg-muted">
		<livewire:shared.theme-toggle />

        <!-- Page -->
        <!-- Base -->
        <div class="flex grow">
            <livewire:demo6.header />

            <livewire:demo6.sidebar />

            <!-- Wrapper -->
            <div class="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
                <!-- Main -->
                <div class="flex flex-col grow items-stretch rounded-xl bg-background border border-input lg:ms-(--sidebar-width) mt-0 lg:mt-[15px] m-[15px]">
                    <div class="flex flex-col grow kt-scrollable-y-auto [--kt-scrollbar-width:auto] pt-5" id="scrollable_content">
                        <main class="grow" role="content">
                            <livewire:demo6.toolbar />

                            <!-- Container -->
                            <div class="kt-container-fixed">
                                {{ $slot }}
                            </div>
                            <!-- End of Container -->
                        </main>
                        <livewire:demo6.footer />
                    </div>
                </div>
                <!-- End of Main -->
            </div>
            <!-- End of Wrapper -->
        </div>
        <!-- End of Base -->
        <!-- End of Page -->

        @include('layouts.partials.scripts')
        @livewireScripts
    </body>
</html>