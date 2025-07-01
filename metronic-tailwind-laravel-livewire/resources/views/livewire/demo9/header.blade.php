<!-- Header -->
<header class="flex items-center transition-[height] shrink-0 bg-background h-(--header-height)" data-kt-sticky="true" data-kt-sticky-class="transition-[height] fixed z-10 top-0 left-0 right-0 shadow-xs backdrop-blur-md bg-background/70 border border-border" data-kt-sticky-name="header" data-kt-sticky-offset="100px" id="header">
	<!-- Container -->
	<div class="kt-container-fixed flex lg:justify-between items-center gap-2.5">
		<!-- Logo -->
		<div class="flex items-center gap-1 lg:w-[400px] grow lg:grow-0">
			<button class="kt-btn kt-btn-icon kt-btn-ghost -ms-2.5 lg:hidden" data-kt-drawer-toggle="#navbar">
				<i class="ki-filled ki-menu">
				</i>
			</button>
			<div class="flex items-center gap-2">
				<a class="flex items-center shrink-0" href="#">
					<img class="dark:hidden w-8 shrink-0" src="assets/media/app/mini-logo-circle.svg" />
					<img class="hidden dark:inline-block w-8 shrink-0" src="assets/media/app/mini-logo-circle-dark.svg" />
				</a>
				<h3 class="text-mono text-lg font-medium hidden md:block">
					Metronic
				</h3>
			</div>
			<!-- Navs -->
			<div class="hidden lg:flex items-center">
				<div class="border-e border-border h-5 mx-4">
				</div>
				<!-- Nav -->
				<div class="kt-menu kt-menu-default" data-kt-menu="true">
					<div class="kt-menu-item" data-kt-menu-item-offset="0,10px" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover">
						<button class="kt-menu-toggle text-mono text-sm font-medium">
							TeamRafa
							<span class="kt-menu-arrow">
								<i class="ki-filled ki-down">
								</i>
							</span>
						</button>
						<div class="kt-menu-dropdown w-48 py-2">
							<div class="kt-menu-item">
								<a class="kt-menu-link" href="#" tabindex="0">
									<span class="kt-menu-icon">
										<i class="ki-filled ki-profile-circle">
										</i>
									</span>
									<span class="kt-menu-title">
										MetronicTeam
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
										KeenTeam
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<!-- End of Nav -->
				<div class="border-e border-border h-5 mx-4">
				</div>
				<!-- Nav -->
				<div class="kt-menu kt-menu-default w-[120px]" data-kt-menu="true">
					<div class="kt-menu-item" data-kt-menu-item-offset="0, 0" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover">
						<button class="kt-menu-toggle kt-btn kt-btn-outline flex-nowrap gap-2">
							<i class="ki-filled ki-shop text-base!">
							</i>
							<span class="hidden md:inline text-nowrap">
								RafaShop
							</span>
							<span class="flex items-center">
								<i class="ki-filled ki-down text-xs!">
								</i>
							</span>
						</button>
						<div class="kt-menu-dropdown w-48 py-2 kt-scrollable-y max-h-[250px]">
							<div class="kt-menu-item">
								<a class="kt-menu-link" href="#">
									<span class="kt-menu-title">
										UrbanNest
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link" href="#">
									<span class="kt-menu-title">
										Celestial Finds
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link" href="#">
									<span class="kt-menu-title">
										BohoChic Bazaar
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<!-- End of Nav -->
			</div>
			<!-- End of Navs -->
		</div>
		<!-- End of Logo -->
		<div class="kt-input hidden lg:flex lg:w-60">
			<i class="ki-filled ki-magnifier">
			</i>
			<input class="min-w-0" placeholder="Search" type="text" value="" />
			<span class="text-xs text-secondary-foreground text-nowrap hidden lg:inline">
				cmd + /
			</span>
		</div>
		<!-- Mobile Search -->
		<div class="kt-menu kt-menu-default lg:hidden" data-kt-menu="true">
			<div class="kt-menu-item" data-kt-menu-item-offset="0, 0" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover">
				<button class="kt-menu-toggle kt-btn kt-btn-ghost kt-btn-icon">
					<i class="ki-filled ki-magnifier">
					</i>
				</button>
				<div class="kt-menu-dropdown w-48 py-2">
					<div class="kt-input">
						<i class="ki-filled ki-magnifier">
						</i>
						<input class="min-w-0" placeholder="Search" type="text" value="" />
						<span class="text-xs text-secondary-foreground text-nowrap hidden lg:inline">
							cmd + /
						</span>
					</div>
				</div>
			</div>
		</div>
		<!-- End of Mobile Search -->
		<!-- Topbar -->
		<div class="flex items-center gap-2 lg:gap-3.5 lg:w-[400px] justify-end">
			<div class="flex items-center gap-2 me-0.5">
				<!-- Notifications -->
				<!--Notifications Drawer-->
				<livewire:demo9.partials.notification />
				<!--End of Notifications Drawer-->
				<!-- End of Notifications -->
				<!-- User -->
				<livewire:demo9.partials.user-dropdown />
				<!-- End of User -->
				<div class="border-e border-border h-5">
				</div>
				<div class="flex items-center gap-2">
					<label class="flex items-center gap-2">
						<input checked="" class="kt-switch" name="check" type="checkbox" value="1">
						<span class="text-foreground text-sm font-medium">
							Pro
						</span>
					</label>
				</div>
				<div class="border-e border-border h-5">
				</div>
				<div class="kt-menu" data-kt-menu="true">
					<div class="kt-menu-item kt-menu-item-dropdown" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
						<button class="kt-menu-toggle kt-btn kt-btn-mono">
							Create
							<i class="ki-filled ki-down">
							</i>
						</button>
						<div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
							<div class="kt-menu-item">
								<a class="kt-menu-link" href="#">
									<span class="kt-menu-icon">
										<i class="ki-filled ki-setting-3">
										</i>
									</span>
									<span class="kt-menu-title">
										Settings
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link" href="#">
									<span class="kt-menu-icon">
										<i class="ki-filled ki-some-files">
										</i>
									</span>
									<span class="kt-menu-title">
										Import
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link" href="#">
									<span class="kt-menu-icon">
										<i class="ki-filled ki-cloud-change">
										</i>
									</span>
									<span class="kt-menu-title">
										Activity
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link" data-kt-modal-toggle="#report_user_modal" href="#">
									<span class="kt-menu-icon">
										<i class="ki-filled ki-dislike">
										</i>
									</span>
									<span class="kt-menu-title">
										Report
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End of Topbar -->
		</div>
	</div>
	<!-- End of Container -->
</header>
<!-- End of Header -->