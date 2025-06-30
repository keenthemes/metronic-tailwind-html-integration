<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr" lang="en">

<head>
	@include('layouts.partials.head')
	@vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="antialiased flex h-full text-base text-foreground bg-background [--header-height:78px]">
	@include('partials.theme-toggle')

	<!-- Page -->
	<!-- Main -->
	<div class="flex grow flex-col in-data-kt-[sticky-header=on]:pt-(--header-height)">
		@include('layouts.demo9.header')

		<!-- Wrapper -->
		<div class="flex grow">
			@include('layouts.demo9.sidebar')
			<!-- Main -->
			<div class="flex flex-col grow rounded-xl lg:ms-(--sidebar-width) mt-0 lg:mt-5 m-5">
				<!-- Wrapper Container -->
				<div class="w-full flex px-0">
					<!-- Content -->
					<main class="flex flex-col grow" id="content" role="content">
						<!-- Toolbar -->
						@include('layouts.demo9.toolbar')
						<!-- End of Toolbar -->
						<!-- Container -->
						<div class="kt-container-fixed">
							@yield('content')
						</div>
						<!-- End of Container -->
						<!-- Footer -->
						@include('layouts.demo9.footer')
						<!-- End of Footer -->
					</main>
					<!-- End of Content -->
				</div>
			</div>
		</div>
		<!-- End of Page -->

		@include('layouts.partials.scripts')

		@yield('scripts')
</body>

</html>