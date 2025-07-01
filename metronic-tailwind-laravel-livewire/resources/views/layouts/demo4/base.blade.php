<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
    <head>
        @include('layouts.partials.head')
        @livewireStyles
    </head>
    <body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:60px] [--sidebar-width:290px] bg-muted! lg:overflow-hidden">
        <livewire:shared.theme-toggle />

        <!-- Page -->
        <!-- Base -->
        <div class="flex grow">
            <livewire:demo4.header />

            <!-- Wrapper -->
            <div class="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
                <livewire:demo4.sidebar />

                <!-- Main -->
                <div class="flex grow rounded-xl bg-background border border-input lg:ms-(--sidebar-width) mt-0 lg:mt-5 m-5">
                    <div class="flex flex-col grow kt-scrollable-y-auto lg:[--kt-scrollbar-width:auto] pt-5" id="scrollable_content">
                        <main class="grow" role="content">
                            <livewire:demo4.toolbar />

                            <!-- Content -->
                            <main class="grow" id="content" role="content">
                                {{ $slot }}
                            </main>
                            <!-- End of Content -->

                           <livewire:demo4.footer />
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
        @livewireScripts
    </body>
</html>