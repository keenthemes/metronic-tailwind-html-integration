
<!-- Header -->
<header class="kt-header fixed top-0 z-10 start-0 end-0 flex items-stretch shrink-0 bg-background" data-kt-sticky="true" data-kt-sticky-class="border-b border-border" data-kt-sticky-name="header" id="header">
    <!-- Container -->
    <div class="kt-container-fixed flex justify-between items-stretch lg:gap-4" id="headerContainer">
        <!-- Mobile Logo -->
        <div class="flex gap-2.5 lg:hidden items-center -ms-1">
		  <a class="shrink-0" href="{{ url(\'html/demo1.html\') }}">
		   <img class="max-h-[25px] w-full" src="{{ asset(\'assets/media/app/mini-logo.svg\') }}"/>
            </a>
            <div class="flex items-center">
                <button class="kt-btn kt-btn-icon kt-btn-ghost" data-kt-drawer-toggle="#sidebar">
			<i class="ki-filled ki-menu">
			</i>
                </button>
                <button class="kt-btn kt-btn-icon kt-btn-ghost" data-kt-drawer-toggle="#mega_menu_wrapper">
			<i class="ki-filled ki-burger-menu-2">
			</i>
                </button>
            </div>
        </div>
        <!-- End of Mobile Logo -->
		  @include('demo1/partials/_mega-menu')
		  @include('demo1/partials/_topbar')
    </div>
    <!-- End of Container -->
</header>
<!-- End of Header -->