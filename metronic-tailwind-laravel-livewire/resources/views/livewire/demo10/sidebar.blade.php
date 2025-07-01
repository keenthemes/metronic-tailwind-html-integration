<!-- Sidebar -->

<div class="flex-col fixed top-0 bottom-0 z-20 hidden lg:flex items-stretch shrink-0 w-(--sidebar-width) dark [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start flex top-0 bottom-0" id="sidebar">
	<!-- Sidebar Header -->
	<div class="flex flex-col gap-2.5" id="sidebar_header">
		<div class="flex items-center gap-2.5 px-3.5 h-[70px]">
			<a href="#">
				<img class="size-[34px]" src="{{ asset('assets/media/app/mini-logo-circle-success.svg') }}" />
			</a>
			<div class="kt-menu kt-menu-default grow" data-kt-menu="true">
				<div class="kt-menu-item grow" data-kt-menu-item-offset="0, 15px" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover">
					<div class="kt-menu-label cursor-pointer text-mono font-medium grow justify-between">
						<span class="text-lg font-medium text-inverse grow">
							Metronic
						</span>
						<div class="flex flex-col text-mono font-medium">
							<span class="kt-menu-arrow">
								<i class="ki-filled ki-up">
								</i>
							</span>
							<span class="kt-menu-arrow">
								<i class="ki-filled ki-down">
								</i>
							</span>
						</div>
					</div>
					<div class="kt-menu-dropdown w-48 py-2">
						<div class="kt-menu-item">
							<a class="kt-menu-link" href="#" tabindex="0">
								<span class="kt-menu-icon">
									<i class="ki-filled ki-profile-circle">
									</i>
								</span>
								<span class="kt-menu-title">
									Public Profile
								</span>
							</a>
						</div>
						<div class="kt-menu-item">
							<a class="kt-menu-link" href="#" tabindex="0">
								<span class="kt-menu-icon">
									<i class="ki-filled ki-setting-2">
									</i>
								</span>
								<span class="kt-menu-title">
									Account
								</span>
							</a>
						</div>
						<div class="kt-menu-item">
							<a class="kt-menu-link" href="#" tabindex="0">
								<span class="kt-menu-icon">
									<i class="ki-filled ki-users">
									</i>
								</span>
								<span class="kt-menu-title">
									Network
								</span>
							</a>
						</div>
						<div class="kt-menu-item">
							<a class="kt-menu-link" href="#" tabindex="0">
								<span class="kt-menu-icon">
									<i class="ki-filled ki-security-user">
									</i>
								</span>
								<span class="kt-menu-title">
									Authentication
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex items-center gap-2.5 px-3.5">
			<!-- Input -->
			<a class="kt-btn kt-btn-secondary text-white [&_i]:text-white justify-center min-w-[198px]" href="#">
				<i class="ki-filled ki-plus">
				</i>
				Add New
			</a>
			<!-- End of Input -->
			<button class="kt-btn kt-btn-icon kt-btn-secondary [&_i]:text-white" data-kt-modal-toggle="#search_modal">
				<i class="ki-filled ki-magnifier">
				</i>
			</button>
		</div>
	</div>
	<!-- End of Sidebar Header -->
	<!-- Sidebar menu -->
	<div class="flex items-stretch grow shrink-0 justify-center my-5" id="sidebar_menu">
		<livewire:demo10.partials.sidebar-menu />
	</div>
	<!-- End of Sidebar kt-menu-->
	<!-- Footer -->
	<div class="flex flex-center justify-between shrink-0 ps-4 pe-3.5 mb-3.5" id="sidebar_footer">
		<!-- User -->
		<livewire:demo10.partials.user-dropdown />
		<!-- End of User -->
		 <livewire:demo10.partials.notification />
	</div>
	<!-- End of Footer -->
</div>
<!-- End of Sidebar -->