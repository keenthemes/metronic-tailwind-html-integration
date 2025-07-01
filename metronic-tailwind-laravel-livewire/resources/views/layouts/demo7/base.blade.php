<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @livewireStyles
    </head>
    <body class="antialiased flex h-full text-base text-foreground bg-background [--header-height-default:95px] data-kt-[sticky-header=on]:[--header-height:60px] [--header-height:var(--header-height-default)] [--header-height-mobile:70px]">
		<livewire:shared.theme-toggle />

        <!-- Page -->
        <!-- Main -->
        <div class="flex grow flex-col in-data-kt-[sticky-header=on]:pt-(--header-height-default)">
            <livewire:demo7.header />

            <!-- Toolbar -->
            <div class="">
                <!-- Container -->
                <div class="kt-container-fixed">
                    <div class="border-t border-border dark:border-coal-100"></div>
                    <livewire:demo7.toolbar />
                    <div class="border-b border-border mb-5 lg:mb-7.5">
                    </div>
                </div>
                <!-- End of Container -->
            </div>
            <!-- End of Toolbar -->

            <!-- Content -->
            <main class="grow" id="content" role="content">
                <!-- Container -->
                <div class="kt-container-fixed" id="contentContainer">
                    {{ $slot }}
                </div>
                <!-- End of Container -->
            </main>
            <!-- End of Content -->

            <livewire:demo7.footer />
        </div>
        <!-- End of Main -->
        <!-- End of Page -->

        @include('layouts.partials.scripts')
        @livewireScripts
    </body>
</html>