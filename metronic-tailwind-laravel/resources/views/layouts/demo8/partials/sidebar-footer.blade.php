<div class="flex flex-col gap-5 items-center shrink-0 pb-4" id="sidebar_footer">
	<div class="flex flex-col gap-1.5">
		<!-- Chat -->
		<button class="kt-btn kt-btn-ghost kt-btn-icon size-9 hover:bg-background hover:[&amp;_i]:text-primary" data-kt-drawer-toggle="#chat_drawer">
			<i class="ki-filled ki-messages text-lg">
			</i>
		</button>
		<!--Chat Drawer-->

		<!--End of Chat Drawer-->
		<!-- End of Chat -->
		<!-- Apps -->
		<div data-kt-dropdown="true" data-kt-dropdown-offset="10px, 10px" data-kt-dropdown-offset-rtl="-10px, 10px" data-kt-dropdown-placement="bottom-start" data-kt-dropdown-placement-rtl="bottom-end" data-kt-dropdown-initialized="true">
			<button class="kt-btn kt-btn-ghost kt-btn-icon size-9 hover:bg-background hover:[&amp;_i]:text-primary kt-dropdown-open:bg-background kt-dropdown-open:[&amp;_i]:text-primary" data-kt-dropdown-toggle="true">
				<i class="ki-filled ki-element-11 text-lg">
				</i>
			</button>
			<div class="kt-dropdown-menu p-0 w-screen max-w-[320px]" data-kt-dropdown-menu="true">
				<div class="flex items-center justify-between gap-2.5 text-xs text-secondary-foreground font-medium px-5 py-3 border-b border-b-border">
					<span>
						Apps
					</span>
					<span>
						Enabled
					</span>
				</div>
				<div class="flex flex-col kt-scrollable-y-auto max-h-[400px] divide-y divide-border">
					<div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
						<div class="flex items-center flex-wrap gap-2">
							<div class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
								<img alt="" class="size-6" src="{{ asset('assets/media/brand-logos/jira.svg') }}">

							</div>
							<div class="flex flex-col">
								<a class="text-sm font-semibold text-mono hover:text-primary" href="#">
									Jira
								</a>
								<span class="text-xs font-medium text-secondary-foreground">
									Project management
								</span>
							</div>
						</div>
						<div class="flex items-center gap-2 lg:gap-5">
							<input class="kt-switch" type="checkbox" value="1">
						</div>
					</div>
					<div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
						<div class="flex items-center flex-wrap gap-2">
							<div class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
								<img alt="" class="size-6" src="{{ asset('assets/media/brand-logos/inferno.svg') }}">

							</div>
							<div class="flex flex-col">
								<a class="text-sm font-semibold text-mono hover:text-primary" href="#">
									Inferno
								</a>
								<span class="text-xs font-medium text-secondary-foreground">
									Ensures healthcare app
								</span>
							</div>
						</div>
						<div class="flex items-center gap-2 lg:gap-5">
							<input checked="" class="kt-switch" type="checkbox" value="1">
						</div>
					</div>
					<div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
						<div class="flex items-center flex-wrap gap-2">
							<div class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
								<img alt="" class="size-6" src="{{ asset('assets/media/brand-logos/evernote.svg') }}">

							</div>
							<div class="flex flex-col">
								<a class="text-sm font-semibold text-mono hover:text-primary" href="#">
									Evernote
								</a>
								<span class="text-xs font-medium text-secondary-foreground">
									Notes management app
								</span>
							</div>
						</div>
						<div class="flex items-center gap-2 lg:gap-5">
							<input checked="" class="kt-switch" type="checkbox" value="1">
						</div>
					</div>
					<div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
						<div class="flex items-center flex-wrap gap-2">
							<div class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
								<img alt="" class="size-6" src="{{ asset('assets/media/brand-logos/gitlab.svg') }}">
							</div>
							<div class="flex flex-col">
								<a class="text-sm font-semibold text-mono hover:text-primary" href="#">
									Gitlab
								</a>
								<span class="text-xs font-medium text-secondary-foreground">
									DevOps platform
								</span>
							</div>
						</div>
						<div class="flex items-center gap-2 lg:gap-5">
							<input class="kt-switch" type="checkbox" value="1">
						</div>
					</div>
					<div class="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
						<div class="flex items-center flex-wrap gap-2">
							<div class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-10">
								<img alt="" class="size-6" src="{{ asset('assets/media/brand-logos/google-webdev.svg') }}">
							</div>
							<div class="flex flex-col">
								<a class="text-sm font-semibold text-mono hover:text-primary" href="#">
									Google webdev
								</a>
								<span class="text-xs font-medium text-secondary-foreground">
									Building web expierences
								</span>
							</div>
						</div>
						<div class="flex items-center gap-2 lg:gap-5">
							<input checked="" class="kt-switch" type="checkbox" value="1">
						</div>
					</div>
				</div>
				<div class="grid p-5 border-t border-t-border">
					<a class="kt-btn kt-btn-outline justify-center" href="#">
						Go to Apps
					</a>
				</div>
			</div>
		</div>
		<!-- End of Apps -->
	</div>
	<!-- User -->
	<div data-kt-dropdown="true" data-kt-dropdown-offset="10px, 10px" data-kt-dropdown-offset-rtl="-20px, 10px" data-kt-dropdown-placement="bottom-start" data-kt-dropdown-placement-rtl="bottom-end" data-kt-dropdown-trigger="click" data-kt-dropdown-initialized="true">
		<div class="cursor-pointer shrink-0" data-kt-dropdown-toggle="true">
			<img alt="" class="size-9 rounded-lg shrink-0" src="{{ asset('assets/media/avatars/300-2.png') }}">
		</div>
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
</div>