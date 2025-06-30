<!-- Header -->
<header class="flex items-center shrink-0 bg-background h-(--header-height)" data-kt-sticky="true" data-kt-sticky-class="transition-[height] fixed z-10 top-0 left-0 right-0 shadow-xs backdrop-blur-md bg-white/70 dark:bg-coal-500/70 dark:border-b dark:border-b-light" data-kt-sticky-name="header" data-kt-sticky-offset="100px" id="header" data-kt-sticky-initialized="true">
	<!-- Container -->
	<div class="kt-container-fixed flex lg:justify-between items-center gap-2.5">
		<!-- Logo -->
		<div class="flex items-center gap-1 lg:w-[400px] grow lg:grow-0">
			<button class="kt-btn kt-btn-icon kt-btn-ghost -ms-2.5 lg:hidden" data-kt-drawer-toggle="#navbar">
				<i class="ki-filled ki-menu">
				</i>
			</button>
			<div class="flex items-center gap-2">
				<a href="#">
					<img class="dark:hidden min-h-[34px]" src="{{ asset('assets/media/app/mini-logo-circle.svg') }}">
					<img class="hidden dark:inline-block min-h-[34px]" src="{{ asset('assets/media/app/mini-logo-circle-dark.svg') }}">
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
					<div class="kt-menu-item kt-menu-item-dropdown" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover">
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
					<div class="kt-menu-item kt-menu-item-dropdown" data-kt-menu-item-offset="0, 0" data-kt-menu-item-placement="bottom-start" data-kt-menu-item-placement-rtl="bottom-end" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="hover">
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
		<div class="kt-input w-[36px] lg:w-60">
			<i class="ki-filled ki-magnifier">
			</i>
			<input class="min-w-0" placeholder="Search" type="text" value="">
			<span class="text-xs text-secondary-foreground text-nowrap hidden lg:inline">
				cmd + /
			</span>
		</div>
		<!-- Topbar -->
		<div class="flex items-center gap-2 lg:gap-3.5 lg:w-[400px] justify-end">
			<div class="flex items-center gap-2 me-0.5">
				<!-- Notifications -->
				<button class="kt-btn kt-btn-ghost kt-btn-icon size-9 rounded-full hover:bg-transparent hover:[&amp;_i]:text-primary" data-kt-drawer-toggle="#notifications_drawer">
					<i class="ki-filled ki-notification-status text-lg">
					</i>
				</button>
				<!--Notifications Drawer-->

				<!--End of Notifications Drawer-->
				<!-- End of Notifications -->
				<!-- User -->
				<div data-kt-dropdown="true" data-kt-dropdown-offset="10px, 10px" data-kt-dropdown-offset-rtl="-20px, 10px" data-kt-dropdown-placement="bottom-end" data-kt-dropdown-placement-rtl="bottom-start" data-kt-dropdown-trigger="click" data-kt-dropdown-initialized="true">
					<button class="kt-btn kt-btn-ghost kt-btn-icon size-9 rounded-full hover:bg-transparent hover:[&amp;_i]:text-primary" data-kt-dropdown-toggle="true">
						<i class="ki-filled ki-profile-circle text-lg">
						</i>
					</button>
					<div class="kt-dropdown-menu w-[250px]" data-kt-dropdown-menu="true">
						<div class="flex items-center justify-between px-2.5 py-1.5 gap-1.5">
							<div class="flex items-center gap-2">
								<img alt="" class="size-9 shrink-0 rounded-full border-2 border-green-500" src="{{ asset('assets/media/avatars/300-2.png') }}">
								<div class="flex flex-col gap-1.5">
									<span class="text-sm text-foreground font-semibold leading-none">
										Cody Fisher
									</span>
									<a class="text-xs text-secondary-foreground hover:text-primary font-medium leading-none" href="#">
										c.fisher@gmail.com
									</a>
								</div>
							</div>
							<span class="kt-badge kt-badge-sm kt-badge-primary kt-badge-outline">
								Pro
							</span>
						</div>
						<ul class="kt-dropdown-menu-sub">
							<li>
								<div class="kt-dropdown-menu-separator">
								</div>
							</li>
							<li>
								<a class="kt-dropdown-menu-link" href="#">
									<i class="ki-filled ki-badge">
									</i>
									Public Profile
								</a>
							</li>
							<li>
								<a class="kt-dropdown-menu-link" href="#">
									<i class="ki-filled ki-profile-circle">
									</i>
									My Profile
								</a>
							</li>
							<li data-kt-dropdown="true" data-kt-dropdown-placement="right-start" data-kt-dropdown-trigger="hover" data-kt-dropdown-initialized="true">
								<button class="kt-dropdown-menu-toggle" data-kt-dropdown-toggle="true">
									<i class="ki-filled ki-setting-2">
									</i>
									My Account
									<span class="kt-dropdown-menu-indicator">
										<i class="ki-filled ki-right text-xs">
										</i>
									</span>
								</button>
								<div class="kt-dropdown-menu w-[220px]" data-kt-dropdown-menu="true">
									<ul class="kt-dropdown-menu-sub">
										<li>
											<a class="kt-dropdown-menu-link" href="#">
												<i class="ki-filled ki-coffee">
												</i>
												Get Started
											</a>
										</li>
										<li>
											<a class="kt-dropdown-menu-link" href="#">
												<i class="ki-filled ki-some-files">
												</i>
												My Profile
											</a>
										</li>
										<li>
											<a class="kt-dropdown-menu-link" href="#">
												<span class="flex items-center gap-2">
													<i class="ki-filled ki-icon">
													</i>
													Billing
												</span>
												<span class="ms-auto inline-flex items-center" data-kt-tooltip="true" data-kt-tooltip-placement="top" data-kt-tooltip-initialized="true">
													<i class="ki-filled ki-information-2 text-base text-muted-foreground">
													</i>
													<span class="kt-tooltip" data-kt-tooltip-content="true">
														Payment and subscription info
													</span>
												</span>
											</a>
										</li>
										<li>
											<a class="kt-dropdown-menu-link" href="#">
												<i class="ki-filled ki-medal-star">
												</i>
												Security
											</a>
										</li>
										<li>
											<a class="kt-dropdown-menu-link" href="#">
												<i class="ki-filled ki-setting">
												</i>
												Members &amp; Roles
											</a>
										</li>
										<li>
											<a class="kt-dropdown-menu-link" href="#">
												<i class="ki-filled ki-switch">
												</i>
												Integrations
											</a>
										</li>
										<li>
											<div class="kt-dropdown-menu-separator">
											</div>
										</li>
										<li>
											<a class="kt-dropdown-menu-link" href="#">
												<span class="flex items-center gap-2">
													<i class="ki-filled ki-shield-tick">
													</i>
													Notifications
												</span>
												<input checked="" class="ms-auto kt-switch" name="check" type="checkbox" value="1">
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<a class="kt-dropdown-menu-link" href="https://devs.keenthemes.com">
									<i class="ki-filled ki-message-programming">
									</i>
									Dev Forum
								</a>
							</li>
							<li data-kt-dropdown="true" data-kt-dropdown-placement="right-start" data-kt-dropdown-trigger="hover" data-kt-dropdown-initialized="true">
								<button class="kt-dropdown-menu-toggle py-1" data-kt-dropdown-toggle="true">
									<span class="flex items-center gap-2">
										<i class="ki-filled ki-icon">
										</i>
										Language
									</span>
									<span class="ms-auto kt-badge kt-badge-stroke shrink-0">
										English
										<img alt="" class="inline-block size-3.5 rounded-full" src="{{ asset('assets/media/flags/united-states.svg') }}">
									</span>
								</button>
								<div class="kt-dropdown-menu w-[180px]" data-kt-dropdown-menu="true">
									<ul class="kt-dropdown-menu-sub">
										<li class="active">
											<a class="kt-dropdown-menu-link" href="?dir=ltr">
												<span class="flex items-center gap-2">
													<img alt="" class="inline-block size-4 rounded-full" src="{{ asset('assets/media/flags/united-states.svg') }}">
													<span class="kt-menu-title">
														English
													</span>
												</span>
												<i class="ki-solid ki-check-circle ms-auto text-green-500 text-base">
												</i>
											</a>
										</li>
										<li class="">
											<a class="kt-dropdown-menu-link" href="?dir=rtl">
												<span class="flex items-center gap-2">
													<img alt="" class="inline-block size-4 rounded-full" src="{{ asset('assets/media/flags/saudi-arabia.svg') }}">
													<span class="kt-menu-title">
														Arabic(Saudi)
													</span>
												</span>
											</a>
										</li>
										<li class="">
											<a class="kt-dropdown-menu-link" href="?dir=ltr">
												<span class="flex items-center gap-2">
													<img alt="" class="inline-block size-4 rounded-full" src="{{ asset('assets/media/flags/spain.svg') }}">
													<span class="kt-menu-title">
														Spanish
													</span>
												</span>
											</a>
										</li>
										<li class="">
											<a class="kt-dropdown-menu-link" href="?dir=ltr">
												<span class="flex items-center gap-2">
													<img alt="" class="inline-block size-4 rounded-full" src="{{ asset('assets/media/flags/germany.svg') }}">
													<span class="kt-menu-title">
														German
													</span>
												</span>
											</a>
										</li>
										<li class="">
											<a class="kt-dropdown-menu-link" href="?dir=ltr">
												<span class="flex items-center gap-2">
													<img alt="" class="inline-block size-4 rounded-full" src="{{ asset('assets/media/flags/japan.svg') }}">
													<span class="kt-menu-title">
														Japanese
													</span>
												</span>
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div class="kt-dropdown-menu-separator">
								</div>
							</li>
						</ul>
						<div class="px-2.5 pt-1.5 mb-2.5 flex flex-col gap-3.5">
							<div class="flex items-center gap-2 justify-between">
								<span class="flex items-center gap-2">
									<i class="ki-filled ki-moon text-base text-muted-foreground">
									</i>
									<span class="font-medium text-2sm">
										Dark Mode
									</span>
								</span>
								<input class="kt-switch" data-kt-theme-switch-state="dark" data-kt-theme-switch-toggle="true" name="check" type="checkbox" value="1">
							</div>
							<a class="kt-btn kt-btn-outline justify-center w-full" href="#">
								Log out
							</a>
						</div>
					</div>
				</div>
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
		<!-- End of Container -->
	</div>
</header>
<!-- End of Header -->