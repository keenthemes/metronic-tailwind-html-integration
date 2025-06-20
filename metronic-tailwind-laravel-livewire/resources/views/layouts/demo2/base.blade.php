<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
<head>
    @include('layouts.partials.head')
    @livewireStyles
</head>
<body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:100px] data-[kt-sticky-header=on]:[--header-height:60px]">
    <livewire:shared.theme-toggle />

    <!-- Main -->
	<div class="flex grow flex-col in-data-[kt-sticky-header=on]:pt-(--header-height)">
		<!-- Header -->
		<livewire:demo2.header />

		<!-- Navbar -->
		<livewire:demo2.navbar />

		<!-- Toolbar -->
		<livewire:demo2.toolbar />

		<!-- Content -->
		<main class="grow" id="content" role="content">
			{{ $slot }}
		</main>

		<!-- Footer -->
		<livewire:demo2.footer />
    </div>

    @include('layouts.partials.scripts')
    @livewireScripts
</body>
</html>
