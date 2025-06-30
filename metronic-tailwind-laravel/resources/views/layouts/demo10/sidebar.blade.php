<!-- Sidebar -->

<div class="flex-col fixed top-0 bottom-0 z-20 hidden lg:flex items-stretch shrink-0 w-(--sidebar-width) dark [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" data-kt-drawer="true" data-kt-drawer-class="kt-drawer kt-drawer-start flex top-0 bottom-0" id="sidebar">
	<!-- Sidebar Header -->
	<div class="flex flex-col gap-2.5" id="sidebar_header">
		<div class="flex items-center gap-2.5 px-3.5 h-[70px]">
			<a href="html/demo10/index.html">
				<img class="size-[34px]" src="assets/media/app/mini-logo-circle-success.svg" />
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
							<a class="kt-menu-link" href="html/demo10/public-profile/profiles/default.html" tabindex="0">
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
							<a class="kt-menu-link" href="html/demo10.html" tabindex="0">
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
							<a class="kt-menu-link" href="html/demo10/network/get-started.html" tabindex="0">
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
							<a class="kt-menu-link" href="html/demo10/authentication/get-started.html" tabindex="0">
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
			<a class="kt-btn kt-btn-secondary text-white [&_i]:text-white justify-center min-w-[198px]" href="html/demo10/public-profile/projects/3-columns.html">
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
		<div class="kt-scrollable-y-auto grow" data-kt-scrollable="true" data-kt-scrollable-dependencies="#sidebar_header, #sidebar_footer" data-kt-scrollable-height="auto" data-kt-scrollable-offset="0px" data-kt-scrollable-wrappers="#sidebar_menu">
			<!-- Primary Menu -->
			<div class="mb-5">
				<h3 class="text-sm text-muted-foreground uppercase ps-5 inline-block mb-3">
					Pages
				</h3>
				<div class="kt-menu flex flex-col w-full gap-1.5 px-3.5" data-kt-menu="true" data-kt-menu-accordion-expand-all="false" id="sidebar_primary_menu">
					<div class="kt-menu-item">
						<a class="kt-menu-link gap-2.5 py-2 px-2.5 rounded-md kt-menu-item-active:bg-accent/60 kt-menu-link-hover:bg-accent/60 !menu-item-here:bg-transparent" href="html/demo10.html">
							<span class="kt-menu-icon items-start text-lg text-secondary-foreground kt-menu-item-active:text-mono kt-menu-item-here:text-mono">
								<i class="ki-filled ki-home-3">
								</i>
							</span>
							<span class="kt-menu-title text-sm text-foreground font-medium kt-menu-item-here:text-mono kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
								Overview
							</span>
						</a>
					</div>
					<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
						<div class="kt-menu-link gap-2.5 py-2 px-2.5 rounded-md kt-menu-item-hover:bg-transparent kt-menu-item-here:bg-transparent">
							<span class="kt-menu-icon items-start text-muted-foreground text-lg kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								<i class="ki-filled ki-profile-circle">
								</i>
							</span>
							<span class="kt-menu-title font-medium text-sm text-secondary-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								Public Profile
							</span>
							<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
								<span class="inline-flex kt-menu-item-show:hidden">
									<i class="ki-filled ki-down text-xs">
									</i>
								</span>
								<span class="hidden kt-menu-item-show:inline-flex">
									<i class="ki-filled ki-up text-xs">
									</i>
								</span>
							</span>
						</div>
						<div class="kt-menu-accordion gap-px ps-7">
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Profiles
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/default.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Default
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/creator.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Creator
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/company.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Company
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/nft.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												NFT
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/blogger.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Blogger
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/crm.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												CRM
											</span>
										</a>
									</div>
									<div class="kt-menu-item flex-col-reverse" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
										<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
											<span class="kt-menu-title text-sm text-secondary-foreground kt-menu-link-hover:text-mono">
												<span class="hidden kt-menu-item-show:!flex">
													Show less
												</span>
												<span class="flex kt-menu-item-show:hidden">
													Show 4 more
												</span>
											</span>
											<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
												<span class="inline-flex kt-menu-item-show:hidden">
													<i class="ki-filled ki-down text-xs">
													</i>
												</span>
												<span class="hidden kt-menu-item-show:inline-flex">
													<i class="ki-filled ki-up text-xs">
													</i>
												</span>
											</span>
										</div>
										<div class="kt-menu-accordion gap-px">
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/gamer.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Gamer
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/feeds.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Feeds
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/plain.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Plain
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/profiles/modal.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Modal
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Projects
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/projects/3-columns.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												3 Columns
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/projects/2-columns.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												2 Columns
											</span>
										</a>
									</div>
								</div>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/works.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Works
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/teams.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Teams
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/network.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Network
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/activity.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Activity
									</span>
								</a>
							</div>
							<div class="kt-menu-item flex-col-reverse" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-secondary-foreground kt-menu-link-hover:text-mono">
										<span class="hidden kt-menu-item-show:!flex">
											Show less
										</span>
										<span class="flex kt-menu-item-show:hidden">
											Show 3 more
										</span>
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/campaigns/card.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Campaigns - Card
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/campaigns/list.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Campaigns - List
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/public-profile/empty.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Empty
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
						<div class="kt-menu-link gap-2.5 py-2 px-2.5 rounded-md kt-menu-item-hover:bg-transparent kt-menu-item-here:bg-transparent">
							<span class="kt-menu-icon items-start text-muted-foreground text-lg kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								<i class="ki-filled ki-setting-2">
								</i>
							</span>
							<span class="kt-menu-title font-medium text-sm text-secondary-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								My Account
							</span>
							<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
								<span class="inline-flex kt-menu-item-show:hidden">
									<i class="ki-filled ki-down text-xs">
									</i>
								</span>
								<span class="hidden kt-menu-item-show:inline-flex">
									<i class="ki-filled ki-up text-xs">
									</i>
								</span>
							</span>
						</div>
						<div class="kt-menu-accordion gap-px ps-7">
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Account Home
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/home/get-started.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Get Started
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/home/user-profile.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												User Profile
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/home/company-profile.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Company Profile
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/home/settings-sidebar.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Settings - With Sidebar
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/home/settings-enterprise.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Settings - Enterprise
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/home/settings-plain.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Settings - Plain
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/home/settings-modal.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Settings - Modal
											</span>
										</a>
									</div>
								</div>
							</div>
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Billing
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/billing/basic.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Billing - Basic
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/billing/enterprise.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Billing - Enterprise
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/billing/plans.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Plans
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/billing/history.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Billing History
											</span>
										</a>
									</div>
								</div>
							</div>
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Security
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/security/get-started.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Get Started
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/security/overview.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Security Overview
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/security/allowed-ip-addresses.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Allowed IP Addresses
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/security/privacy-settings.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Privacy Settings
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/security/device-management.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Device Management
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/security/backup-and-recovery.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Backup & Recovery
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/security/current-sessions.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Current Sessions
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/security/security-log.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Security Log
											</span>
										</a>
									</div>
								</div>
							</div>
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Members & Roles
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/team-starter.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Teams Starter
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/teams.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Teams
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/team-info.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Team Info
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/members-starter.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Members Starter
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/team-members.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Team Members
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/import-members.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Import Members
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/roles.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Roles
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/permissions-toggle.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Permissions - Toggler
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/members/permissions-check.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Permissions - Check
											</span>
										</a>
									</div>
								</div>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/integrations.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Integrations
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/notifications.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Notifications
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/api-keys.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										API Keys
									</span>
								</a>
							</div>
							<div class="kt-menu-item flex-col-reverse" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-secondary-foreground kt-menu-link-hover:text-mono">
										<span class="hidden kt-menu-item-show:!flex">
											Show less
										</span>
										<span class="flex kt-menu-item-show:hidden">
											Show 3 more
										</span>
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/appearance.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Appearance
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/invite-a-friend.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Invite a Friend
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/account/activity.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Activity
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
						<div class="kt-menu-link gap-2.5 py-2 px-2.5 rounded-md kt-menu-item-hover:bg-transparent kt-menu-item-here:bg-transparent">
							<span class="kt-menu-icon items-start text-muted-foreground text-lg kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								<i class="ki-filled ki-users">
								</i>
							</span>
							<span class="kt-menu-title font-medium text-sm text-secondary-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								Network
							</span>
							<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
								<span class="inline-flex kt-menu-item-show:hidden">
									<i class="ki-filled ki-down text-xs">
									</i>
								</span>
								<span class="hidden kt-menu-item-show:inline-flex">
									<i class="ki-filled ki-up text-xs">
									</i>
								</span>
							</span>
						</div>
						<div class="kt-menu-accordion gap-px ps-7">
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/get-started.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Get Started
									</span>
								</a>
							</div>
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										User Cards
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-cards/mini-cards.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Mini Cards
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-cards/team-crew.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Team Crew
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-cards/author.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Author
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-cards/nft.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												NFT
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-cards/social.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Social
											</span>
										</a>
									</div>
								</div>
							</div>
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										User Table
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-table/team-crew.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Team Crew
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-table/app-roster.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												App Roster
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-table/market-authors.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Market Authors
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-table/saas-users.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												SaaS Users
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-table/store-clients.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Store Clients
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/network/user-table/visitors.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Visitors
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
						<div class="kt-menu-link gap-2.5 py-2 px-2.5 rounded-md kt-menu-item-hover:bg-transparent kt-menu-item-here:bg-transparent">
							<span class="kt-menu-icon items-start text-muted-foreground text-lg kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								<i class="ki-filled ki-security-user">
								</i>
							</span>
							<span class="kt-menu-title font-medium text-sm text-secondary-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								Authentication
							</span>
							<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
								<span class="inline-flex kt-menu-item-show:hidden">
									<i class="ki-filled ki-down text-xs">
									</i>
								</span>
								<span class="hidden kt-menu-item-show:inline-flex">
									<i class="ki-filled ki-up text-xs">
									</i>
								</span>
							</span>
						</div>
						<div class="kt-menu-accordion gap-px ps-7">
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Classic
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/classic/sign-in.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Sign In
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/classic/sign-up.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Sign Up
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/classic/2fa.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												2FA
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/classic/check-email.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Check Email
											</span>
										</a>
									</div>
									<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
										<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
												Reset Password
											</span>
											<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
												<span class="inline-flex kt-menu-item-show:hidden">
													<i class="ki-filled ki-down text-xs">
													</i>
												</span>
												<span class="hidden kt-menu-item-show:inline-flex">
													<i class="ki-filled ki-up text-xs">
													</i>
												</span>
											</span>
										</div>
										<div class="kt-menu-accordion gap-px ps-2.5">
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/classic/reset-password/enter-email.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Enter Email
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/classic/reset-password/check-email.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Check Email
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/classic/reset-password/change-password.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Change Password
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/classic/reset-password/password-changed.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Password is Changed
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Branded
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/branded/sign-in.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Sign In
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/branded/sign-up.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Sign Up
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/branded/2fa.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												2FA
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/branded/check-email.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Check Email
											</span>
										</a>
									</div>
									<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
										<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
												Reset Password
											</span>
											<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
												<span class="inline-flex kt-menu-item-show:hidden">
													<i class="ki-filled ki-down text-xs">
													</i>
												</span>
												<span class="hidden kt-menu-item-show:inline-flex">
													<i class="ki-filled ki-up text-xs">
													</i>
												</span>
											</span>
										</div>
										<div class="kt-menu-accordion gap-px ps-2.5">
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/branded/reset-password/enter-email.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Enter Email
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/branded/reset-password/check-email.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Check Email
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/branded/reset-password/change-password.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Change Password
													</span>
												</a>
											</div>
											<div class="kt-menu-item">
												<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/branded/reset-password/password-changed.html">
													<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
														Password is Changed
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/welcome-message.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Welcome Message
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/account-deactivated.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Account Deactivated
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/error-404.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Error 404
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/authentication/error-500.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Error 500
									</span>
								</a>
							</div>
						</div>
					</div>
					<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
						<div class="kt-menu-link gap-2.5 py-2 px-2.5 rounded-md kt-menu-item-hover:bg-transparent kt-menu-item-here:bg-transparent">
							<span class="kt-menu-icon items-start text-muted-foreground text-lg kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								<i class="ki-filled ki-users">
								</i>
							</span>
							<span class="kt-menu-title font-medium text-sm text-secondary-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
								Store - Client
							</span>
							<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
								<span class="inline-flex kt-menu-item-show:hidden">
									<i class="ki-filled ki-down text-xs">
									</i>
								</span>
								<span class="hidden kt-menu-item-show:inline-flex">
									<i class="ki-filled ki-up text-xs">
									</i>
								</span>
							</span>
						</div>
						<div class="kt-menu-accordion gap-px ps-7">
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/home.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Home
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/search-results-grid.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Search Results - Grid
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/search-results-list.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Search Results - List
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/product-details.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Product Details
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/shopping-cart.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Shopping Cart
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/wishlist.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Wishlist
									</span>
								</a>
							</div>
							<div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
								<div class="kt-menu-link py-2 px-2.5 rounded-md border border-transparent !menu-item-here:bg-transparent">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-here:text-mono kt-menu-item-show:text-mono kt-menu-link-hover:text-mono">
										Checkout
									</span>
									<span class="kt-menu-arrow text-muted-foreground kt-menu-item-here:text-muted-foreground kt-menu-item-show:text-foreground kt-menu-link-hover:text-foreground">
										<span class="inline-flex kt-menu-item-show:hidden">
											<i class="ki-filled ki-down text-xs">
											</i>
										</span>
										<span class="hidden kt-menu-item-show:inline-flex">
											<i class="ki-filled ki-up text-xs">
											</i>
										</span>
									</span>
								</div>
								<div class="kt-menu-accordion gap-px ps-2.5">
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/checkout/order-summary.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Order Summary
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/checkout/shipping-info.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Shipping Info
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/checkout/payment-method.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Payment Method
											</span>
										</a>
									</div>
									<div class="kt-menu-item">
										<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/checkout/order-placed.html">
											<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
												Order Placed
											</span>
										</a>
									</div>
								</div>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/my-orders.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										My Orders
									</span>
								</a>
							</div>
							<div class="kt-menu-item">
								<a class="kt-menu-link py-2 px-2.5 rounded-md kt-menu-item-active:bg-secondary kt-menu-link-hover:bg-secondary" href="html/demo10/store-client/order-receipt.html">
									<span class="kt-menu-title text-sm text-foreground kt-menu-item-active:font-medium kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
										Order Receipt
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End of Primary Menu -->
			<!-- Secondary Menu -->
			<div>
				<h3 class="text-sm text-muted-foreground uppercase ps-5 inline-block mb-3">
					Outline
				</h3>
				<div class="kt-menu flex flex-col w-full gap-1.5 px-3.5" data-kt-menu="true" data-kt-menu-accordion-expand-all="true" id="sidebar_secondary_menu">
					<div class="kt-menu-item">
						<a class="kt-menu-link py-1 px-2.5" href="https://keenthemes.com/metronic/tailwind/docs/">
							<span class="rounded-md flex items-center justify-center size-7 bg-coal-black kt-menu-link-hover:border-none me-2">
								<img alt="" class="size-3.5" src="assets/media/brand-logos/x-dark.svg" />
							</span>
							<span class="kt-menu-title text-sm text-secondary-foreground kt-menu-item-here:text-mono kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
								@keenthemes
							</span>
						</a>
					</div>
					<div class="kt-menu-item">
						<a class="kt-menu-link py-1 px-2.5" href="https://github.com/keenthemes/">
							<span class="rounded-md flex items-center justify-center size-7 bg-coal-black kt-menu-link-hover:border-none me-2">
								<img alt="" class="size-3.5" src="assets/media/brand-logos/slack.svg" />
							</span>
							<span class="kt-menu-title text-sm text-secondary-foreground kt-menu-item-here:text-mono kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
								@keenthemes_hub
							</span>
						</a>
					</div>
					<div class="kt-menu-item">
						<a class="kt-menu-link py-1 px-2.5" href="https://keenthemes.com/metronic/tailwind/docs/">
							<span class="rounded-md flex items-center justify-center size-7 bg-coal-black kt-menu-link-hover:border-none me-2">
								<img alt="" class="size-3.5" src="assets/media/brand-logos/figma.svg" />
							</span>
							<span class="kt-menu-title text-sm text-secondary-foreground kt-menu-item-here:text-mono kt-menu-item-active:text-mono kt-menu-link-hover:text-mono">
								metronic
							</span>
						</a>
					</div>
				</div>
			</div>
			<!-- Secondary Menu -->
		</div>
	</div>
	<!-- End of Sidebar kt-menu-->
	<!-- Footer -->
	<div class="flex flex-center justify-between shrink-0 ps-4 pe-3.5 mb-3.5" id="sidebar_footer">
		<!-- User -->
		<div data-kt-dropdown="true" data-kt-dropdown-offset="10px, 10px" data-kt-dropdown-offset-rtl="-20px, 10px" data-kt-dropdown-placement="bottom-start" data-kt-dropdown-placement-rtl="bottom-end" data-kt-dropdown-trigger="click">
			<div class="cursor-pointer shrink-0" data-kt-dropdown-toggle="true">
				<img alt="" class="size-9 rounded-full border-2 border-mono/25 shrink-0 cursor-pointer" src="assets/media/avatars/gray/5.png" />
			</div>
			<div class="kt-dropdown-menu w-[250px]" data-kt-dropdown-menu="true">
				<div class="flex items-center justify-between px-2.5 py-1.5 gap-1.5">
					<div class="flex items-center gap-2">
						<img alt="" class="size-9 shrink-0 rounded-full border-2 border-green-500" src="assets/media/avatars/300-2.png" />
						<div class="flex flex-col gap-1.5">
							<span class="text-sm text-foreground font-semibold leading-none">
								Cody Fisher
							</span>
							<a class="text-xs text-secondary-foreground hover:text-primary font-medium leading-none" href="html/demo10/account/home/get-started.html">
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
						<a class="kt-dropdown-menu-link" href="html/demo10/public-profile/profiles/default.html">
							<i class="ki-filled ki-badge">
							</i>
							Public Profile
						</a>
					</li>
					<li>
						<a class="kt-dropdown-menu-link" href="html/demo10/account/home/user-profile.html">
							<i class="ki-filled ki-profile-circle">
							</i>
							My Profile
						</a>
					</li>
					<li data-kt-dropdown="true" data-kt-dropdown-placement="right-start" data-kt-dropdown-trigger="hover">
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
									<a class="kt-dropdown-menu-link" href="html/demo10/account/home/get-started.html">
										<i class="ki-filled ki-coffee">
										</i>
										Get Started
									</a>
								</li>
								<li>
									<a class="kt-dropdown-menu-link" href="html/demo10/account/home/user-profile.html">
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
										<span class="ms-auto inline-flex items-center" data-kt-tooltip="true" data-kt-tooltip-placement="top">
											<i class="ki-filled ki-information-2 text-base text-muted-foreground">
											</i>
											<span class="kt-tooltip" data-kt-tooltip-content="true">
												Payment and subscription info
											</span>
										</span>
									</a>
								</li>
								<li>
									<a class="kt-dropdown-menu-link" href="html/demo10/account/security/overview.html">
										<i class="ki-filled ki-medal-star">
										</i>
										Security
									</a>
								</li>
								<li>
									<a class="kt-dropdown-menu-link" href="html/demo10/account/members/teams.html">
										<i class="ki-filled ki-setting">
										</i>
										Members & Roles
									</a>
								</li>
								<li>
									<a class="kt-dropdown-menu-link" href="html/demo10/account/integrations.html">
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
									<a class="kt-dropdown-menu-link" href="html/demo10/account/security/overview.html">
										<span class="flex items-center gap-2">
											<i class="ki-filled ki-shield-tick">
											</i>
											Notifications
										</span>
										<input checked="" class="ms-auto kt-switch" name="check" type="checkbox" value="1" />
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
					<li data-kt-dropdown="true" data-kt-dropdown-placement="right-start" data-kt-dropdown-trigger="hover">
						<button class="kt-dropdown-menu-toggle py-1" data-kt-dropdown-toggle="true">
							<span class="flex items-center gap-2">
								<i class="ki-filled ki-icon">
								</i>
								Language
							</span>
							<span class="ms-auto kt-badge kt-badge-stroke shrink-0">
								English
								<img alt="" class="inline-block size-3.5 rounded-full" src="assets/media/flags/united-states.svg" />
							</span>
						</button>
						<div class="kt-dropdown-menu w-[180px]" data-kt-dropdown-menu="true">
							<ul class="kt-dropdown-menu-sub">
								<li class="active">
									<a class="kt-dropdown-menu-link" href="?dir=ltr">
										<span class="flex items-center gap-2">
											<img alt="" class="inline-block size-4 rounded-full" src="assets/media/flags/united-states.svg" />
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
											<img alt="" class="inline-block size-4 rounded-full" src="assets/media/flags/saudi-arabia.svg" />
											<span class="kt-menu-title">
												Arabic(Saudi)
											</span>
										</span>
									</a>
								</li>
								<li class="">
									<a class="kt-dropdown-menu-link" href="?dir=ltr">
										<span class="flex items-center gap-2">
											<img alt="" class="inline-block size-4 rounded-full" src="assets/media/flags/spain.svg" />
											<span class="kt-menu-title">
												Spanish
											</span>
										</span>
									</a>
								</li>
								<li class="">
									<a class="kt-dropdown-menu-link" href="?dir=ltr">
										<span class="flex items-center gap-2">
											<img alt="" class="inline-block size-4 rounded-full" src="assets/media/flags/germany.svg" />
											<span class="kt-menu-title">
												German
											</span>
										</span>
									</a>
								</li>
								<li class="">
									<a class="kt-dropdown-menu-link" href="?dir=ltr">
										<span class="flex items-center gap-2">
											<img alt="" class="inline-block size-4 rounded-full" src="assets/media/flags/japan.svg" />
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
						<input class="kt-switch" data-kt-theme-switch-state="dark" data-kt-theme-switch-toggle="true" name="check" type="checkbox" value="1" />
					</div>
					<a class="kt-btn kt-btn-outline justify-center w-full" href="html/demo10/authentication/classic/sign-in.html">
						Log out
					</a>
				</div>
			</div>
		</div>
		<!-- End of User -->
		<div class="flex items-center gap-1.5">
			<!-- Notifications -->
			<button class="kt-btn kt-btn-ghost kt-btn-icon size-8 hover:bg-background hover:[&_i]:text-primary" data-kt-drawer-toggle="#notifications_drawer">
				<i class="ki-filled ki-notification-status text-lg">
				</i>
			</button>
			<!--Notifications Drawer-->
			<div class="hidden kt-drawer kt-drawer-end card flex-col max-w-[90%] w-[450px] top-5 bottom-5 end-5 rounded-xl border border-border" data-kt-drawer="true" data-kt-drawer-container="body" id="notifications_drawer">
				<div class="flex items-center justify-between gap-2.5 text-sm text-mono font-semibold px-5 py-2.5 border-b border-b-border" id="notifications_header">
					Notifications
					<button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-dim shrink-0" data-kt-drawer-dismiss="true">
						<i class="ki-filled ki-cross">
						</i>
					</button>
				</div>
				<div class="kt-tabs kt-tabs-line justify-between px-5 mb-2" data-kt-tabs="true" id="notifications_tabs">
					<div class="flex items-center gap-5">
						<button class="kt-tab-toggle py-3 active" data-kt-tab-toggle="#notifications_tab_all">
							All
						</button>
						<button class="kt-tab-toggle py-3 relative" data-kt-tab-toggle="#notifications_tab_inbox">
							Inbox
							<span class="rounded-full bg-green-500 size-[5px] absolute top-2 rtl:start-0 end-0 transform translate-y-1/2 translate-x-full">
							</span>
						</button>
						<button class="kt-tab-toggle py-3" data-kt-tab-toggle="#notifications_tab_team">
							Team
						</button>
						<button class="kt-tab-toggle py-3" data-kt-tab-toggle="#notifications_tab_following">
							Following
						</button>
					</div>
					<div class="kt-menu" data-kt-menu="true">
						<div class="kt-menu-item" data-kt-menu-item-offset="0,10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
							<button class="kt-menu-toggle kt-btn kt-btn-icon kt-btn-ghost">
								<i class="ki-filled ki-setting-2">
								</i>
							</button>
							<div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
								<div class="kt-menu-item">
									<a class="kt-menu-link" href="#">
										<span class="kt-menu-icon">
											<i class="ki-filled ki-document">
											</i>
										</span>
										<span class="kt-menu-title">
											View
										</span>
									</a>
								</div>
								<div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0" data-kt-menu-item-placement="right-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
									<div class="kt-menu-link">
										<span class="kt-menu-icon">
											<i class="ki-filled ki-notification-status">
											</i>
										</span>
										<span class="kt-menu-title">
											Export
										</span>
										<span class="kt-menu-arrow">
											<i class="ki-filled ki-right text-xs rtl:transform rtl:rotate-180">
											</i>
										</span>
									</div>
									<div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
										<div class="kt-menu-item">
											<a class="kt-menu-link" href="html/demo10/account/home/settings-sidebar.html">
												<span class="kt-menu-icon">
													<i class="ki-filled ki-sms">
													</i>
												</span>
												<span class="kt-menu-title">
													Email
												</span>
											</a>
										</div>
										<div class="kt-menu-item">
											<a class="kt-menu-link" href="html/demo10/account/home/settings-sidebar.html">
												<span class="kt-menu-icon">
													<i class="ki-filled ki-message-notify">
													</i>
												</span>
												<span class="kt-menu-title">
													SMS
												</span>
											</a>
										</div>
										<div class="kt-menu-item">
											<a class="kt-menu-link" href="html/demo10/account/home/settings-sidebar.html">
												<span class="kt-menu-icon">
													<i class="ki-filled ki-notification-status">
													</i>
												</span>
												<span class="kt-menu-title">
													Push
												</span>
											</a>
										</div>
									</div>
								</div>
								<div class="kt-menu-item">
									<a class="kt-menu-link" href="#">
										<span class="kt-menu-icon">
											<i class="ki-filled ki-pencil">
											</i>
										</span>
										<span class="kt-menu-title">
											Edit
										</span>
									</a>
								</div>
								<div class="kt-menu-item">
									<a class="kt-menu-link" href="#">
										<span class="kt-menu-icon">
											<i class="ki-filled ki-trash">
											</i>
										</span>
										<span class="kt-menu-title">
											Delete
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="grow flex flex-col" id="notifications_tab_all">
					<div class="grow kt-scrollable-y-auto" data-kt-scrollable="true" data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto" data-kt-scrollable-offset="150px">
						<div class="grow flex flex-col gap-5 pt-3 pb-4 divider-y divider-border">
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-4.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Joe Lincoln
											</a>
											<span class="text-secondary-foreground">
												mentioned you in
											</span>
											<a class="hover:text-primary text-primary" href="#">
												Latest Trends
											</a>
											<span class="text-secondary-foreground">
												topic
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											18 mins ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Web Design 2024
										</span>
									</div>
									<div class="kt-card shadow-none flex flex-col gap-2.5 p-3.5 rounded-lg bg-muted/70">
										<div class="text-sm font-semibold text-secondary-foreground mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												@Cody
											</a>
											<span class="text-secondary-foreground font-medium">
												For an expert opinion, check out what Mike has to say on this topic!
											</span>
										</div>
										<div class="kt-input">
											<input placeholder="Reply" type="text" value="" />
											<button class="kt-btn kt-btn-ghost kt-btn-icon size-6 -me-1.5">
												<i class="ki-filled ki-picture">
												</i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-5.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Leslie Alexander
											</a>
											<span class="text-secondary-foreground">
												added new tags to
											</span>
											<a class="hover:text-primary text-primary" href="#">
												Web Redesign 2024
											</a>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											53 mins ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											ACME
										</span>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<span class="kt-badge kt-badge-sm kt-badge-info kt-badge-outline">
											Client-Request
										</span>
										<span class="kt-badge kt-badge-sm kt-badge-warning kt-badge-outline">
											Figma
										</span>
										<span class="kt-badge kt-badge-sm kt-badge-secondary kt-badge-outline">
											Redesign
										</span>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5" id="notification_request_3">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-27.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Guy Hawkins
											</a>
											<span class="text-secondary-foreground">
												requested access to
											</span>
											<a class="hover:text-primary text-primary" href="#">
												AirSpace
											</a>
											<span class="text-secondary-foreground">
												project
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											14 hours ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Dev Team
										</span>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<button class="kt-btn kt-btn-outline kt-btn-sm" data-kt-dismiss="#notification_request_3">
											Decline
										</button>
										<button class="kt-btn kt-btn-mono kt-btn-sm" data-kt-dismiss="#notification_request_3">
											Accept
										</button>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-10.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-offline size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5 grow">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Jane Perez
											</a>
											<span class="text-secondary-foreground">
												invites you to review a file.
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											3 hours ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											742kb
										</span>
									</div>
									<div class="kt-card shadow-none flex items-center flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
										<img class="h-5" src="assets/media/file-types/pdf.svg" />
										<a class="hover:text-primary font-medium text-secondary-foreground text-xs me-1" href="#">
											Launch_nov24.pptx
										</a>
										<span class="font-medium text-muted-foreground text-xs">
											Edited 39 mins ago
										</span>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-11.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-1">
									<div class="text-sm font-medium mb-px">
										<a class="hover:text-primary text-mono font-semibold" href="#">
											Raymond Pawell
										</a>
										<span class="text-secondary-foreground">
											posted a new article
										</span>
										<a class="hover:text-primary text-primary" href="#">
											2024 Roadmap
										</a>
									</div>
									<span class="flex items-center text-xs font-medium text-muted-foreground">
										1 hour ago
										<span class="rounded-full size-1 bg-mono/30 mx-1.5">
										</span>
										Roadmap
									</span>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-14.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-offline size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5 grow">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Tyler Hero
											</a>
											<span class="text-secondary-foreground">
												wants to view your design project
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											3 day ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Metronic Launcher mockups
										</span>
									</div>
									<div class="kt-card shadow-none flex items-center flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
										<div class="flex items-center justify-center w-[26px] h-[30px] shrink-0 bg-background rounded-sm border border-border">
											<img class="h-5" src="assets/media/file-types/figma.svg" />
										</div>
										<a class="hover:text-primary font-medium text-secondary-foreground text-xs me-1" href="#">
											Launcher-UIkit.fig
										</a>
										<span class="font-medium text-muted-foreground text-xs">
											Edited 2 mins ago
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="border-b border-b-border">
					</div>
					<div class="grid grid-cols-2 p-5 gap-2.5" id="notifications_all_footer">
						<button class="kt-btn kt-btn-outline justify-center">
							Archive all
						</button>
						<button class="kt-btn kt-btn-outline justify-center">
							Mark all as read
						</button>
					</div>
				</div>
				<div class="grow flex flex-col hidden" id="notifications_tab_inbox">
					<div class="grow kt-scrollable-y-auto" data-kt-scrollable="true" data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto" data-kt-scrollable-offset="150px">
						<div class="flex flex-col gap-5 pt-3 pb-4">
							<div class="flex grow gap-2.5 px-5" id="notification_request_13">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-25.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5 grow">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Samuel Lee
											</a>
											<span class="text-secondary-foreground">
												requested to add user to
											</span>
											<a class="hover:text-primary text-primary font-semibold" href="#">
												TechSynergy
											</a>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											22 hours ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Dev Team
										</span>
									</div>
									<div class="kt-card shadow-none flex items-center flex-row justify-between gap-1.5 px-2.5 py-2 rounded-lg bg-muted/70">
										<div class="flex flex-col">
											<a class="hover:text-primary font-medium text-mono text-xs" href="#">
												Ronald Richards
											</a>
											<a class="hover:text-primary text-muted-foreground font-medium text-xs" href="#">
												ronald.richards@gmail.com
											</a>
										</div>
										<a class="hover:text-primary text-secondary-foreground font-medium text-xs" href="#">
											Go to profile
										</a>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<button class="kt-btn kt-btn-outline kt-btn-sm" data-kt-dismiss="#notification_request_13">
											Decline
										</button>
										<button class="kt-btn kt-btn-mono kt-btn-sm" data-kt-dismiss="#notification_request_13">
											Accept
										</button>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex items-center grow gap-2.5 px-5">
								<div class="flex items-center justify-center size-8 bg-green-50 rounded-full border border-green-200 dark:border-green-950">
									<i class="ki-filled ki-check text-lg text-green-500">
									</i>
								</div>
								<div class="flex flex-col gap-1">
									<span class="text-sm font-medium text-secondary-foreground">
										You have succesfully verified your account
									</span>
									<span class="font-medium text-muted-foreground text-xs">
										2 days ago
									</span>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-34.png" />
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5 grow">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Ava Peterson
											</a>
											<span class="text-secondary-foreground">
												uploaded attachment
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											3 days ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											ACME
										</span>
									</div>
									<div class="kt-card shadow-none flex items-center justify-between flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
										<div class="flex items-center gap-1.5">
											<img class="h-6" src="assets/media/file-types/xls.svg" />
											<div class="flex flex-col gap-0.5">
												<a class="hover:text-primary font-medium text-secondary-foreground text-xs" href="#">
													Redesign-2024.xls
												</a>
												<span class="font-medium text-muted-foreground text-xs">
													2.6 MB
												</span>
											</div>
										</div>
										<button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
											<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
												<path clip-rule="evenodd" d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
												<path clip-rule="evenodd" d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
												<path clip-rule="evenodd" d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-29.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3 grow">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Ethan Parker
											</a>
											<span class="text-secondary-foreground">
												created a new tasks to
											</span>
											<a class="hover:text-primary text-primary" href="#">
												Site Sculpt
											</a>
											<span class="text-secondary-foreground">
												project
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											3 days ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Web Designer
										</span>
									</div>
									<div class="kt-card shadow-none p-3.5 gap-3.5 rounded-lg bg-muted/70">
										<div class="flex items-center justify-between flex-wrap gap-2.5">
											<div class="flex flex-col gap-1">
												<span class="font-medium text-mono text-xs">
													Location history is erased after Logging In
												</span>
												<span class="font-medium text-muted-foreground text-xs">
													Due Date: 15 May, 2024
												</span>
											</div>
											<div class="flex -space-x-2">
												<div class="flex">
													<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="assets/media/avatars/300-3.png" />
												</div>
												<div class="flex">
													<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="assets/media/avatars/300-2.png" />
												</div>
											</div>
										</div>
										<div class="flex items-center gap-2.5">
											<span class="kt-badge kt-badge-sm kt-badge-success kt-badge-outline">
												Improvement
											</span>
											<span class="kt-badge kt-badge-sm kt-badge-destructive kt-badge-outline">
												Bug
											</span>
										</div>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5" id="notification_request_3">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-30.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Benjamin Harris
											</a>
											<span class="text-secondary-foreground">
												requested to upgrade plan
											</span>
											<a class="hover:text-primary text-primary" href="#">
											</a>
											<span class="text-secondary-foreground">
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											4 days ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Marketing
										</span>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<button class="kt-btn kt-btn-outline kt-btn-sm" data-kt-dismiss="#notification_request_3">
											Decline
										</button>
										<button class="kt-btn kt-btn-mono kt-btn-sm" data-kt-dismiss="#notification_request_3">
											Accept
										</button>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-24.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-1">
									<div class="text-sm font-medium mb-px">
										<a class="hover:text-primary text-mono font-semibold" href="#">
											Isaac Morgan
										</a>
										<span class="text-secondary-foreground">
											mentioned you in
										</span>
										<a class="hover:text-primary text-primary" href="#">
											Data Transmission
										</a>
										topic
									</div>
									<span class="flex items-center text-xs font-medium text-muted-foreground">
										6 days ago
										<span class="rounded-full size-1 bg-mono/30 mx-1.5">
										</span>
										Dev Team
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="border-b border-b-border">
					</div>
					<div class="grid grid-cols-2 p-5 gap-2.5" id="notifications_inbox_footer">
						<button class="kt-btn kt-btn-outline justify-center">
							Archive all
						</button>
						<button class="kt-btn kt-btn-outline justify-center">
							Mark all as read
						</button>
					</div>
				</div>
				<div class="grow flex flex-col hidden" id="notifications_tab_team">
					<div class="grow kt-scrollable-y-auto" data-kt-scrollable="true" data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto" data-kt-scrollable-offset="150px">
						<div class="flex flex-col gap-5 pt-3 pb-4">
							<div class="flex grow gap-2 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-15.png" />
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3 grow" id="notification_request_10">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Nova Hawthorne
											</a>
											<span class="text-secondary-foreground">
												sent you an meeting invation
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											2 days ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Dev Team
										</span>
									</div>
									<div class="kt-card shadow-none p-2.5 rounded-lg bg-muted/70">
										<div class="flex items-center justify-between flex-wrap gap-2.5">
											<div class="flex items-center gap-2.5">
												<div class="border border-primary/10 rounded-lg">
													<div class="flex items-center justify-center border-b border-b-primary/10 bg-primary/10 rounded-t-lg">
														<span class="text-xs text-primary fw-medium p-1.5">
															Apr
														</span>
													</div>
													<div class="flex items-center justify-center size-9">
														<span class="fw-semibold text-mono text-md tracking-tight">
															12
														</span>
													</div>
												</div>
												<div class="flex flex-col gap-1.5">
													<a class="hover:text-primary font-medium text-secondary-foreground text-xs" href="#">
														Peparation For Release
													</a>
													<span class="font-medium text-secondary-foreground text-xs">
														9:00 PM - 10:00 PM
													</span>
												</div>
											</div>
											<div class="flex -space-x-2">
												<div class="flex">
													<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="assets/media/avatars/300-4.png" />
												</div>
												<div class="flex">
													<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="assets/media/avatars/300-1.png" />
												</div>
												<div class="flex">
													<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-6" src="assets/media/avatars/300-2.png" />
												</div>
												<div class="flex">
													<span class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-6 text-white size-6 ring-background bg-green-500">
														+3
													</span>
												</div>
											</div>
										</div>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<button class="kt-btn kt-btn-outline kt-btn-sm" data-kt-dismiss="#notification_request_10">
											Decline
										</button>
										<button class="kt-btn kt-btn-mono kt-btn-sm" data-kt-dismiss="#notification_request_10">
											Accept
										</button>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-6.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-1">
									<div class="text-sm font-medium mb-px">
										<a class="hover:text-primary text-mono font-semibold" href="#">
											Adrian Vale
										</a>
										<span class="text-secondary-foreground">
											change the due date of
										</span>
										<a class="hover:text-primary text-primary" href="#">
											Marketing
										</a>
										to 13 May
									</div>
									<span class="flex items-center text-xs font-medium text-muted-foreground">
										2 days ago
										<span class="rounded-full size-1 bg-mono/30 mx-1.5">
										</span>
										Marketing
									</span>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-12.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5 grow">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Skylar Frost
											</a>
											<span class="text-secondary-foreground">
												uploaded 2 attachments
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											3 days ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Web Design
										</span>
									</div>
									<div class="kt-card shadow-none flex items-center justify-between flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
										<div class="flex items-center gap-1.5">
											<img class="h-6" src="assets/media/file-types/word.svg" />
											<div class="flex flex-col gap-0.5">
												<a class="hover:text-primary font-medium text-secondary-foreground text-xs" href="#">
													Landing-page.docx
												</a>
												<span class="font-medium text-muted-foreground text-xs">
													1.9 MB
												</span>
											</div>
										</div>
										<button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
											<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
												<path clip-rule="evenodd" d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
												<path clip-rule="evenodd" d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
												<path clip-rule="evenodd" d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
											</svg>
										</button>
									</div>
									<div class="kt-card shadow-none flex items-center justify-between flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
										<div class="flex items-center gap-1.5">
											<img class="h-6" src="assets/media/file-types/svg.svg" />
											<div class="flex flex-col gap-0.5">
												<a class="hover:text-primary font-medium text-secondary-foreground text-xs" href="#">
													New-icon.svg
												</a>
												<span class="font-medium text-muted-foreground text-xs">
													2.3 MB
												</span>
											</div>
										</div>
										<button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
											<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
												<path clip-rule="evenodd" d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
												<path clip-rule="evenodd" d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
												<path clip-rule="evenodd" d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z" fill="#99A1B7" fill-rule="evenodd">
												</path>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-21.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Selene Silverleaf
											</a>
											<span class="text-secondary-foreground">
												commented on
											</span>
											<a class="hover:text-primary text-primary" href="#">
												SiteSculpt
											</a>
											<span class="text-secondary-foreground">
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											4 days ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Manager
										</span>
									</div>
									<div class="kt-card shadow-none flex flex-col gap-2.5 p-3.5 rounded-lg bg-muted/70">
										<div class="text-sm font-semibold text-secondary-foreground mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												@Cody
											</a>
											<span class="text-secondary-foreground font-medium">
												This
												design is simply stunning! From layout to color, it's a work of art!
											</span>
										</div>
										<div class="kt-input">
											<input placeholder="Reply" type="text" value="" />
											<button class="kt-btn kt-btn-ghost kt-btn-icon size-6 -me-1.5">
												<i class="ki-filled ki-picture">
												</i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5" id="notification_request_3">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-13.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Thalia Fox
											</a>
											<span class="text-secondary-foreground">
												has invited you
												to join
											</span>
											<a class="hover:text-primary text-primary" href="#">
												Design Research
											</a>
											<span class="text-secondary-foreground">
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											4 days ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Dev
											Team
										</span>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<button class="kt-btn kt-btn-outline kt-btn-sm" data-kt-dismiss="#notification_request_3">
											Decline
										</button>
										<button class="kt-btn kt-btn-mono kt-btn-sm" data-kt-dismiss="#notification_request_3">
											Accept
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="border-b border-b-border">
					</div>
					<div class="grid grid-cols-2 p-5 gap-2.5" id="notifications_team_footer">
						<button class="kt-btn kt-btn-outline justify-center">
							Archive all
						</button>
						<button class="kt-btn kt-btn-outline justify-center">
							Mark all as read
						</button>
					</div>
				</div>
				<div class="grow flex flex-col hidden" id="notifications_tab_following">
					<div class="grow kt-scrollable-y-auto" data-kt-scrollable="true" data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto" data-kt-scrollable-offset="150px">
						<div class="flex flex-col gap-5 pt-3 pb-4">
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-1.png">
										</img>
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-2.5 grow">
									<div class="flex flex-col gap-1 mb-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Jane Perez
											</a>
											<span class="text-secondary-foreground">
												added 2 new works to
											</span>
											<a class="hover:text-primary text-primary font-semibold" href="#">
												Inspirations 2024
											</a>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											23 hours ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Craftwork Design
										</span>
									</div>
									<div class="flex items-center gap-2.5">
										<div class="kt-card shadow-none flex flex-col gap-3.5 bg-muted/70 w-40">
											<div class="bg-cover bg-no-repeat kt-card-rounded-t shrink-0 h-24" style="background-image: url('assets/media/images/600x600/6.jpg')">
											</div>
											<div class="px-2.5 pb-2">
												<a class="font-medium block text-secondary-foreground hover:text-primary text-xs leading-4 mb-0.5" href="#">
													Geometric Patterns
												</a>
												<div class="text-xs font-medium text-muted-foreground">
													Token ID:
													<span class="text-xs font-medium text-secondary-foreground">
														81023
													</span>
												</div>
											</div>
										</div>
										<div class="kt-card shadow-none flex flex-col gap-3.5 bg-muted/70 w-40">
											<div class="bg-cover bg-no-repeat kt-card-rounded-t shrink-0 h-24" style="background-image: url('assets/media/images/600x600/1.jpg')">
											</div>
											<div class="px-2.5 pb-2">
												<a class="font-medium block text-secondary-foreground hover:text-primary text-xs leading-4 mb-0.5" href="#">
													Artistic Expressions
												</a>
												<div class="text-xs font-medium text-muted-foreground">
													Token ID:
													<span class="text-xs font-medium text-secondary-foreground">
														67890
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5" id="notification_request_17">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-19.png" />
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-2.5 grow">
									<div class="flex flex-col gap-1 mb-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Natalie Wood
											</a>
											<span class="text-secondary-foreground">
												wants to edit marketing project
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											1 day ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Designer
										</span>
									</div>
									<div class="kt-card shadow-none flex items-center flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
										<div class="flex items-center justify-center w-[26px] h-[30px] shrink-0 bg-white rounded-sm border border-border">
											<img class="h-5" src="assets/media/brand-logos/jira.svg" />
										</div>
										<a class="hover:text-primary font-medium text-secondary-foreground text-xs me-1" href="#">
											User-feedback.jira
										</a>
										<span class="font-medium text-muted-foreground text-xs">
											Edited 1 hour ago
										</span>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<button class="kt-btn kt-btn-outline kt-btn-sm" data-kt-dismiss="#notification_request_17">
											Decline
										</button>
										<button class="kt-btn kt-btn-mono kt-btn-sm" data-kt-dismiss="#notification_request_17">
											Accept
										</button>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-17.png" />
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-2.5 grow">
									<div class="flex flex-col gap-1 mb-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Aaron Foster
											</a>
											<span class="text-secondary-foreground">
												requested to view
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											3 day ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Larsen Ltd
										</span>
									</div>
									<div class="kt-card shadow-none flex items-center flex-row gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/70">
										<i class="ki-filled ki-user-tick text-green-500 text-base">
										</i>
										<span class="font-medium text-green-500 text-sm">
											You allowed Aaron to view
										</span>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-34.png" />
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-1">
									<div class="text-sm font-medium mb-px">
										<a class="hover:text-primary text-mono font-semibold" href="#">
											Chloe Morgan
										</a>
										<span class="text-secondary-foreground">
											posted a new
											article
										</span>
										<a class="hover:text-primary text-primary" href="#">
											User Experience
										</a>
									</div>
									<span class="flex items-center text-xs font-medium text-muted-foreground">
										1 day ago
										<span class="rounded-full size-1 bg-mono/30 mx-1.5">
										</span>
										Nexus
									</span>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-9.png" />
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-2.5 grow">
									<div class="flex flex-col gap-1 mb-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Gabriel Bennett
											</a>
											<span class="text-secondary-foreground">
												started connect you
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											3 day ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Development
										</span>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<button class="kt-btn kt-btn-sm kt-btn-outline">
											<i class="ki-filled ki-check-circle">
											</i>
											Connected
										</button>
										<button class="kt-btn kt-btn-mono kt-btn-sm">
											Go to profile
										</button>
									</div>
								</div>
							</div>
							<div class="border-b border-b-border">
							</div>
							<div class="flex grow gap-2.5 px-5" id="notification_request_3">
								<div class="kt-avatar size-8">
									<div class="kt-avatar-image">
										<img alt="avatar" src="assets/media/avatars/300-13.png" />
									</div>
									<div class="kt-avatar-indicator -end-2 -bottom-2">
										<div class="kt-avatar-status kt-avatar-status-online size-2.5">
										</div>
									</div>
								</div>
								<div class="flex flex-col gap-3.5">
									<div class="flex flex-col gap-1">
										<div class="text-sm font-medium mb-px">
											<a class="hover:text-primary text-mono font-semibold" href="#">
												Thalia Fox
											</a>
											<span class="text-secondary-foreground">
												has invited you
												to join
											</span>
											<a class="hover:text-primary text-primary" href="#">
												Design Research
											</a>
											<span class="text-secondary-foreground">
											</span>
										</div>
										<span class="flex items-center text-xs font-medium text-muted-foreground">
											4 days ago
											<span class="rounded-full size-1 bg-mono/30 mx-1.5">
											</span>
											Dev
											Team
										</span>
									</div>
									<div class="flex flex-wrap gap-2.5">
										<button class="kt-btn kt-btn-outline kt-btn-sm" data-kt-dismiss="#notification_request_3">
											Decline
										</button>
										<button class="kt-btn kt-btn-mono kt-btn-sm" data-kt-dismiss="#notification_request_3">
											Accept
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="border-b border-b-border">
					</div>
					<div class="grid grid-cols-2 p-5 gap-2.5" id="notifications_following_footer">
						<button class="kt-btn kt-btn-outline justify-center">
							Archive all
						</button>
						<button class="kt-btn kt-btn-outline justify-center">
							Mark all as read
						</button>
					</div>
				</div>
			</div>
			<!--End of Notifications Drawer-->
			<!-- End of Notifications -->
			<a class="kt-btn kt-btn-ghost kt-btn-icon size-8 hover:bg-background hover:[&_i]:text-primary" href="html/demo10/authentication/classic/sign-in.html">
				<i class="ki-filled ki-exit-right">
				</i>
			</a>
		</div>
	</div>
	<!-- End of Footer -->
</div>
<!-- End of Sidebar -->