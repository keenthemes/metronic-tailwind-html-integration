<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">
<head>
    @include('layouts.partials.head')
</head>
<body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:100px] data-[kt-sticky-header=on]:[--header-height:60px]">
    @include('layouts.partials.theme-mode')

    <!-- Main -->
	<div class="flex grow flex-col in-data-[kt-sticky-header=on]:pt-(--header-height)">
		<!-- Header -->
		@include('layouts.demo2.partials.header')

		<!-- Navbar -->
		@include('layouts.demo2.partials.navbar')

		<!-- Toolbar -->
		@include('layouts.demo2.partials.toolbar')

		<!-- Content -->
		<main class="grow" id="content" role="content">
			@yield('content')
		</main>

		<!-- Footer -->
		@include('layouts.demo2.partials.footer')
    </div>

    @include('layouts.partials.scripts')
</body>
</html>
