<div class="grid gap-5 lg:gap-7.5">
	<!-- begin: grid -->
	<div class="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
		<div class="lg:col-span-2">
			<div class="grid md:grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
				<style>
					.channel-stats-bg {
						background-image: url('{{ asset("assets/media/images/2600x1600/bg-3.png") }}');
					}

					.dark .channel-stats-bg {
						background-image: url('{{ asset("assets/media/images/2600x1600/bg-3-dark.png") }}');
					}
				</style>
				<div class="kt-card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg">
					<div class="flex flex-col gap-4 pt-6">
						<i class="ki-filled ki-badge text-2xl text-muted-foreground">
						</i>
						<div class="flex flex-col gap-2.5 mb-2">
							<h3 class="text-base font-medium leading-none text-mono">
								Personal info
							</h3>
							<span class="text-sm text-secondary-foreground leading-5">
								Central hub for users: view data, change settings, see activity logs, manage tasks, read notes, get alerts, and more
							</span>
						</div>
					</div>
					<div class="mb-4">
						<a class="kt-link" href="#">
							View page
							<i class="ki-filled ki-right text-xs">
							</i>
						</a>
					</div>
				</div>
				<div class="kt-card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg">
					<div class="flex flex-col gap-4 pt-6">
						<i class="ki-filled ki-security-user text-2xl text-muted-foreground">
						</i>
						<div class="flex flex-col gap-2.5 mb-2">
							<h3 class="text-base font-medium leading-none text-mono">
								Login &amp; Security
							</h3>
							<span class="text-sm text-secondary-foreground leading-5">
								Set passwords, enable 2FA, view login logs, update security questions, track account activity for better safety
							</span>
						</div>
					</div>
					<div class="mb-4">
						<a class="kt-link" href="#">
							View page
							<i class="ki-filled ki-right text-xs">
							</i>
						</a>
					</div>
				</div>
				<div class="kt-card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg">
					<div class="flex flex-col gap-4 pt-6">
						<i class="ki-filled ki-cheque text-2xl text-muted-foreground">
						</i>
						<div class="flex flex-col gap-2.5 mb-2">
							<h3 class="text-base font-medium leading-none text-mono">
								Billing &amp; Payments
							</h3>
							<span class="text-sm text-secondary-foreground leading-5">
								Manage billing info, update payment methods, view transaction history, set up autopay, and track expenses easily
							</span>
						</div>
					</div>
					<div class="mb-4">
						<a class="kt-link" href="#">
							View page
							<i class="ki-filled ki-right text-xs">
							</i>
						</a>
					</div>
				</div>
				<div class="kt-card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg">
					<div class="flex flex-col gap-4 pt-6">
						<i class="ki-filled ki-users text-2xl text-muted-foreground">
						</i>
						<div class="flex flex-col gap-2.5 mb-2">
							<h3 class="text-base font-medium leading-none text-mono">
								Members, Teams &amp; Roles
							</h3>
							<span class="text-sm text-secondary-foreground leading-5">
								Manage members, assign roles, create teams, update permissions, view activity logs, and streamline team collaboration
							</span>
						</div>
					</div>
					<div class="mb-4">
						<a class="kt-link" href="#">
							View page
							<i class="ki-filled ki-right text-xs">
							</i>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="lg:col-span-1">
			<div class="kt-card h-full">
				<div class="kt-card-header">
					<h3 class="kt-card-title">
						My Balance
					</h3>
					<div class="kt-menu" data-kt-menu="true">
						<div class="kt-menu-item kt-menu-item-dropdown" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
							<button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
								<i class="ki-filled ki-dots-vertical text-lg">
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
				<div class="kt-card-content flex flex-col gap-2 px-5 lg:px-7.5 pt-5">
					<span class="text-sm font-normal text-foreground">
						Available balance
					</span>
					<span class="text-3xl font-semibold text-mono mb-3">
						$9,395.72
					</span>
					<div class="kt-toggle-group flex">
						<label class="kt-btn" data-kt-chart="my_balance_chart1">
							Today
							<input name="date-range" type="radio" value="today">
						</label>
						<label class="kt-btn" data-kt-chart="my_balance_chart2">
							Week
							<input name="date-range" type="radio" value="week">
						</label>
						<label class="kt-btn" data-kt-chart="my_balance_chart3">
							Month
							<input checked="" name="date-range" type="radio" value="month">
						</label>
						<label class="kt-btn" data-kt-chart="my_balance_chart4">
							Year
							<input name="date-range" type="radio" value="year">
						</label>
					</div>
				</div>
				<div class="px-3" id="my_balance_chart">
				</div>
			</div>
		</div>
	</div>
	<!-- end: grid -->
	<!-- begin: grid -->
	<div class="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
		<div class="lg:col-span-2">
			<style>
				.entry-callout-bg {
					background-image: url('{{ asset("assets/media/images/2600x1600/2.png") }}');
				}

				.dark .entry-callout-bg {
					background-image: url('{{ asset("assets/media/images/2600x1600/2-dark.png") }}');
				}
			</style>
			<div class="kt-card h-full h-full">
				<div class="kt-card-content p-10 bg-[length:80%] rtl:[background-position:-70%_25%] [background-position:175%_25%] bg-no-repeat entry-callout-bg">
					<div class="flex flex-col justify-center gap-4">
						<div class="flex -space-x-2">
							<div class="flex">
								<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-10" src="{{ asset('assets/media/avatars/300-4.png') }}">
							</div>
							<div class="flex">
								<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-10" src="{{ asset('assets/media/avatars/300-1.png') }}">
							</div>
							<div class="flex">
								<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-10" src="{{ asset('assets/media/avatars/300-2.png') }}">
							</div>
							<div class="flex">
								<span class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-10 text-white text-xs ring-background bg-green-500">
									S
								</span>
							</div>
						</div>
						<h2 class="text-xl font-semibold text-mono">
							Connect Today &amp; Join
							<br>
							the
							<a class="kt-link" href="#">
								KeenThemes Network
							</a>
						</h2>
						<p class="text-sm font-normal text-secondary-foreground leading-5.5">
							Enhance your projects with premium themes and
							<br>
							templates. Join the KeenThemes community today
							<br>
							for top-quality designs and resources.
						</p>
					</div>
				</div>
				<div class="kt-card-footer justify-center">
					<a class="kt-link kt-link-underlined kt-link-dashed" href="#">
						Get Started
					</a>
				</div>
			</div>
		</div>
		<div class="lg:col-span-1">
			<div class="kt-card h-full">
				<div class="kt-card-header">
					<h3 class="kt-card-title">
						Report Sharing Settings
					</h3>
				</div>
				<label class="kt-card-group flex items-center justify-between py-4 gap-2.5">
					<div class="flex flex-col justify-center gap-1.5">
						<span class="leading-none font-medium text-sm text-mono">
							Ony invited People
						</span>
						<span class="text-sm text-secondary-foreground">
							Invite selected people via email.
						</span>
					</div>
					<input checked="" class="kt-radio" name="sharing-setting" type="radio" value="1">
				</label>
				<label class="kt-card-group flex items-center justify-between py-4 gap-2.5">
					<div class="flex flex-col justify-center gap-1.5">
						<span class="leading-none font-medium text-sm text-mono">
							People with the link
						</span>
						<span class="text-sm text-secondary-foreground">
							Create a pubic link for your report.
						</span>
					</div>
					<input class="kt-radio" name="sharing-setting" type="radio" value="2">
				</label>
				<label class="kt-card-group flex items-center justify-between py-4 gap-2.5">
					<div class="flex flex-col justify-center gap-1.5">
						<span class="leading-none font-medium text-sm text-mono">
							Everyone
						</span>
						<span class="text-sm text-secondary-foreground">
							Reports will be visible only for everyone.
						</span>
					</div>
					<input class="kt-radio" name="sharing-setting" type="radio" value="3">
				</label>
				<label class="kt-card-group flex items-center justify-between py-4 gap-2.5">
					<div class="flex flex-col justify-center gap-1.5">
						<span class="leading-none font-medium text-sm text-mono">
							No one
						</span>
						<span class="text-sm text-secondary-foreground">
							Reports will be visible only for you.
						</span>
					</div>
					<input class="kt-radio" name="sharing-setting" type="radio" value="4">
				</label>
			</div>
		</div>
	</div>
	<!-- end: grid -->
	<!-- begin: grid -->
	<div class="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
		<div class="lg:col-span-2">
			<div class="kt-card">
				<div class="kt-card-header" id="external_services_integrations">
					<h3 class="kt-card-title">
						Integrations
					</h3>
				</div>
				<div class="kt-card-content grid gap-5 lg:gap-7.5 lg:py-7.5 py-5">
					<div class="grid gap-5">
						<div class="flex items-center justify-between flex-wrap border border-border dark:bg-secondary-transparent rounded-xl gap-2 p-3.5">
							<div class="flex items-center flex-wrap gap-3.5">
								<img alt="" class="size-8 shrink-0" src="{{ asset('assets/media/brand-logos/google-webdev.svg') }}">
								<div class="flex flex-col">
									<div class="flex items-center gap-1.5">
										<a class="text-sm font-medium text-mono hover:text-primary" href="#">
											Google web.dev
										</a>
										<a class="text-sm text-muted-foreground hover:text-primary" href="#">
											webdev@webdevmail.com
										</a>
									</div>
									<span class="text-sm font-medium text-secondary-foreground">
										Integrate for enhanced collaboration in web development.
									</span>
								</div>
							</div>
							<div class="flex items-center gap-2 lg:gap-5">
								<input checked="" class="kt-switch kt-switch-sm" type="checkbox" value="1">
								<div class="kt-btn kt-btn-icon kt-btn-ghost">
									<i class="ki-filled ki-setting-2">
									</i>
								</div>
							</div>
						</div>
						<div class="flex items-center justify-between flex-wrap border border-border dark:bg-secondary-transparent rounded-xl gap-2 p-3.5">
							<div class="flex items-center flex-wrap gap-3.5">
								<img alt="" class="size-8 shrink-0" src="{{ asset('assets/media/brand-logos/equacoin.svg') }}">
								<div class="flex flex-col">
									<div class="flex items-center gap-1.5">
										<a class="text-sm font-medium text-mono hover:text-primary" href="#">
											Equacoin
										</a>
										<a class="text-sm text-muted-foreground hover:text-primary" href="#">
											equacoin@cryptoemail.com
										</a>
									</div>
									<span class="text-sm font-medium text-secondary-foreground">
										Streamline cryptocurrency transactions securely and efficiently.
									</span>
								</div>
							</div>
							<div class="flex items-center gap-2 lg:gap-5">
								<input class="kt-switch kt-switch-sm" type="checkbox" value="2">
								<div class="kt-btn kt-btn-icon kt-btn-ghost">
									<i class="ki-filled ki-setting-2">
									</i>
								</div>
							</div>
						</div>
						<div class="flex items-center justify-between flex-wrap border border-border dark:bg-secondary-transparent rounded-xl gap-2 p-3.5">
							<div class="flex items-center flex-wrap gap-3.5">
								<img alt="" class="size-8 shrink-0" src="{{ asset('assets/media/brand-logos/evernote.svg') }}">
								<div class="flex flex-col">
									<div class="flex items-center gap-1.5">
										<a class="text-sm font-medium text-mono hover:text-primary" href="#">
											Evernote
										</a>
										<a class="text-sm text-muted-foreground hover:text-primary" href="#">
											evernote@noteexample.com
										</a>
									</div>
									<span class="text-sm font-medium text-secondary-foreground">
										Streamline cryptocurrency transactions securely and efficiently.
									</span>
								</div>
							</div>
							<div class="flex items-center gap-2 lg:gap-5">
								<input checked="" class="kt-switch kt-switch-sm" type="checkbox" value="1">
								<div class="kt-btn kt-btn-icon kt-btn-ghost">
									<i class="ki-filled ki-setting-2">
									</i>
								</div>
							</div>
						</div>
						<div class="flex items-center justify-between flex-wrap border border-border dark:bg-secondary-transparent rounded-xl gap-2 p-3.5">
							<div class="flex items-center flex-wrap gap-3.5">
								<img alt="" class="size-8 shrink-0" src="{{ asset('assets/media/brand-logos/inferno.svg') }}">
								<div class="flex flex-col">
									<div class="flex items-center gap-1.5">
										<a class="text-sm font-medium text-mono hover:text-primary" href="#">
											Inferno
										</a>
										<a class="text-sm text-muted-foreground hover:text-primary" href="#">
											inferno@dataexample.com
										</a>
									</div>
									<span class="text-sm font-medium text-secondary-foreground">
										Robust email integration for data management.
									</span>
								</div>
							</div>
							<div class="flex items-center gap-2 lg:gap-5">
								<input checked="" class="kt-switch kt-switch-sm" type="checkbox" value="1">
								<div class="kt-btn kt-btn-icon kt-btn-ghost">
									<i class="ki-filled ki-setting-2">
									</i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="lg:col-span-1">
			<div class="kt-card h-full">
				<div class="kt-card-header">
					<h3 class="kt-card-title">
						Block List
					</h3>
				</div>
				<div class="kt-card-content flex flex-col gap-5">
					<div class="text-sm text-foreground">
						Users on the block list are unable to send chat requests or messages to you anymore, ever, or again
					</div>
					<div class="kt-input-group">
						<input class="kt-input" placeholder="Block new user" type="text" value="">
						<span class="kt-btn kt-btn-primary">
							Add
						</span>

					</div>
					<div class="flex flex-col gap-5">
						<div class="flex items-center justify-between gap-2.5">
							<div class="flex items-center gap-2.5">
								<div class="">
									<img class="h-9 rounded-full" src="{{ asset('assets/media/avatars/gray/1.png') }}">
								</div>
								<div class="flex flex-col gap-0.5">
									<a class="flex items-center gap-1.5 leading-none font-medium text-sm text-mono hover:text-primary" href="#">
										Esther Howard
									</a>
									<span class="text-sm text-secondary-foreground">
										6 commits
									</span>
								</div>
							</div>
							<div class="flex items-center gap-2.5">
								<a class="kt-btn kt-btn-icon kt-btn-ghost" href="#">
									<i class="ki-filled ki-trash">
									</i>
								</a>
							</div>
						</div>
						<div class="flex items-center justify-between gap-2.5">
							<div class="flex items-center gap-2.5">
								<div class="">
									<img class="h-9 rounded-full" src="{{ asset('assets/media/avatars/gray/2.png') }}">
								</div>
								<div class="flex flex-col gap-0.5">
									<a class="flex items-center gap-1.5 leading-none font-medium text-sm text-mono hover:text-primary" href="#">
										Tyler Hero
									</a>
									<span class="text-sm text-secondary-foreground">
										29 commits
									</span>
								</div>
							</div>
							<div class="flex items-center gap-2.5">
								<a class="kt-btn kt-btn-icon kt-btn-ghost" href="#">
									<i class="ki-filled ki-trash">
									</i>
								</a>
							</div>
						</div>
						<div class="flex items-center justify-between gap-2.5">
							<div class="flex items-center gap-2.5">
								<div class="">
									<img class="h-9 rounded-full" src="{{ asset('assets/media/avatars/gray/3.png') }}">
								</div>
								<div class="flex flex-col gap-0.5">
									<a class="flex items-center gap-1.5 leading-none font-medium text-sm text-mono hover:text-primary" href="#">
										Arlene McCoy
									</a>
									<span class="text-sm text-secondary-foreground">
										34 commits
									</span>
								</div>
							</div>
							<div class="flex items-center gap-2.5">
								<a class="kt-btn kt-btn-icon kt-btn-ghost" href="#">
									<i class="ki-filled ki-trash">
									</i>
								</a>
							</div>
						</div>
						<div class="flex items-center justify-between gap-2.5">
							<div class="flex items-center gap-2.5">
								<div class="">
									<img class="h-9 rounded-full" src="{{ asset('assets/media/avatars/gray/4.png') }}">
								</div>
								<div class="flex flex-col gap-0.5">
									<a class="flex items-center gap-1.5 leading-none font-medium text-sm text-mono hover:text-primary" href="#">
										Cody Fisher
									</a>
									<span class="text-sm text-secondary-foreground">
										1 commit
									</span>
								</div>
							</div>
							<div class="flex items-center gap-2.5">
								<a class="kt-btn kt-btn-icon kt-btn-ghost" href="#">
									<i class="ki-filled ki-trash">
									</i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end: grid -->
	<!-- begin: grid -->
	<div class="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
		<div class="lg:col-span-2">
			<div class="grid">
				<div class="kt-card kt-card-grid h-full min-w-full">
					<div class="kt-card-header">
						<h3 class="kt-card-title">
							Teams
						</h3>
						<div class="kt-input max-w-48">
							<i class="ki-filled ki-magnifier">
							</i>
							<input data-kt-datatable-search="#kt_datatable_1" placeholder="Search Teams" type="text">

						</div>
					</div>
					<div class="kt-card-table">
						<div class="grid datatable-initialized" data-kt-datatable="true" data-kt-datatable-page-size="5" id="teams_datatable" data-kt-datatable-initialized="true">
							<div class="kt-scrollable-x-auto">
								<table class="kt-table kt-table-border table-fixed" data-kt-datatable-table="true" id="kt_datatable_1">
									<thead>
										<tr>
											<th class="w-[50px]">
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-check="true" type="checkbox">

											</th>
											<th class="w-[280px]">
												<span class="kt-table-col">
													<span class="kt-table-col-label">
														Team
													</span>
													<span class="kt-table-col-sort">
													</span>
												</span>
											</th>
											<th class="w-[125px]">
												<span class="kt-table-col">
													<span class="kt-table-col-label">
														Rating
													</span>
													<span class="kt-table-col-sort">
													</span>
												</span>
											</th>
											<th class="w-[135px]">
												<span class="kt-table-col">
													<span class="kt-table-col-label">
														Last Modified
													</span>
													<span class="kt-table-col-sort">
													</span>
												</span>
											</th>
											<th class="w-[125px]">
												<span class="kt-table-col">
													<span class="kt-table-col-label">
														Members
													</span>
													<span class="kt-table-col-sort">
													</span>
												</span>
											</th>
										</tr>
									</thead>

									<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" data-kt-datatable-spinner="true" style="display: none;">
										<div class="kt-datatable-loading">
											<svg class="animate-spin -ml-1 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
												<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
											Loading...
										</div>
									</div>
									<tbody>
										<tr>
											<td><input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="1"></td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Product Management
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Product development &amp; lifecycle
													</span>
												</div>
											</td>
											<td>
												<div class="kt-rating">
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>21 Oct, 2024</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-4.png') }}">
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-1.png') }}">
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-2.png') }}">
													</div>
													<div class="flex">
														<span class="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-[30px] text-white ring-background bg-green-500">
															+10
														</span>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td><input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="2"></td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Marketing Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Campaigns &amp; market analysis
													</span>
												</div>
											</td>
											<td>
												<div class="kt-rating">
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label indeterminate">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none" style="width: 50.0%">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>15 Oct, 2024</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-4.png') }}">
													</div>
													<div class="flex">
														<span class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-[30px] uppercase text-white ring-background bg-yellow-500">
															g
														</span>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td><input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="3"></td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														HR Department
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Talent acquisition, employee welfare
													</span>
												</div>
											</td>
											<td>
												<div class="kt-rating">
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>10 Oct, 2024</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-4.png') }}">
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-1.png') }}">
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-2.png') }}">
													</div>
													<div class="flex">
														<span class="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-[30px] text-white ring-background bg-violet-500">
															+A
														</span>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td><input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="4"></td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Sales Division
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Customer relations, sales strategy
													</span>
												</div>
											</td>
											<td>
												<div class="kt-rating">
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
													<div class="kt-rating-label checked">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>05 Oct, 2024</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-24.png') }}">
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-7.png') }}">
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="kt-card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-secondary-foreground text-sm font-medium">
								<div class="flex items-center gap-2 order-2 md:order-1">
									Show
									<select class="hidden" data-kt-datatable-size="true" data-kt-select="" name="perpage" data-kt-select-initialized="true">
										<option value="5" data-kt-select-option-initialized="true">5</option>
										<option value="10" data-kt-select-option-initialized="true">10</option>
										<option value="20" data-kt-select-option-initialized="true">20</option>
										<option value="30" data-kt-select-option-initialized="true">30</option>
										<option value="50" data-kt-select-option-initialized="true">50</option>
									</select>
									<div data-kt-select-wrapper="" class="kt-select-wrapper w-16">
										<div data-kt-select-display="" class="kt-select-display kt-select" tabindex="0" role="button" data-selected="0" aria-haspopup="listbox" aria-expanded="false" aria-label="Select an option">5</div>
										<div data-kt-select-dropdown="" class="kt-select-dropdown hidden " style="z-index: 105;">
											<ul role="listbox" aria-label="Select an option" class="kt-select-options " data-kt-select-options="true">
												<li data-kt-select-option="" data-value="5" data-text="5" class="kt-select-option selected" role="option" aria-selected="true">
													<div class="kt-select-option-text" data-kt-text-container="true">5</div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5 ms-auto hidden text-primary kt-select-option-selected:block">
														<path d="M20 6 9 17l-5-5"></path>
													</svg>
												</li>
												<li data-kt-select-option="" data-value="10" data-text="10" class="kt-select-option" role="option" aria-selected="false">
													<div class="kt-select-option-text" data-kt-text-container="true">10</div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5 ms-auto hidden text-primary kt-select-option-selected:block">
														<path d="M20 6 9 17l-5-5"></path>
													</svg>
												</li>
												<li data-kt-select-option="" data-value="20" data-text="20" class="kt-select-option" role="option" aria-selected="false">
													<div class="kt-select-option-text" data-kt-text-container="true">20</div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5 ms-auto hidden text-primary kt-select-option-selected:block">
														<path d="M20 6 9 17l-5-5"></path>
													</svg>
												</li>
												<li data-kt-select-option="" data-value="30" data-text="30" class="kt-select-option" role="option" aria-selected="false">
													<div class="kt-select-option-text" data-kt-text-container="true">30</div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5 ms-auto hidden text-primary kt-select-option-selected:block">
														<path d="M20 6 9 17l-5-5"></path>
													</svg>
												</li>
												<li data-kt-select-option="" data-value="50" data-text="50" class="kt-select-option" role="option" aria-selected="false">
													<div class="kt-select-option-text" data-kt-text-container="true">50</div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5 ms-auto hidden text-primary kt-select-option-selected:block">
														<path d="M20 6 9 17l-5-5"></path>
													</svg>
												</li>
											</ul>
										</div>
									</div>
									per page
								</div>
								<div class="flex items-center gap-4 order-1 md:order-2">
									<span data-kt-datatable-info="true">1-4 of 4</span>
									<div class="kt-datatable-pagination" data-kt-datatable-pagination="true"><button class="kt-datatable-pagination-button kt-datatable-pagination-prev disabled" disabled="">
											<svg class="rtl:transform rtl:rotate-180 size-3.5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.86501 16.7882V12.8481H21.1459C21.3724 12.8481 21.5897 12.7581 21.7498 12.5979C21.91 12.4378 22 12.2205 22 11.994C22 11.7675 21.91 11.5503 21.7498 11.3901C21.5897 11.2299 21.3724 11.1399 21.1459 11.1399H8.86501V7.2112C8.86628 7.10375 8.83517 6.9984 8.77573 6.90887C8.7163 6.81934 8.63129 6.74978 8.53177 6.70923C8.43225 6.66869 8.32283 6.65904 8.21775 6.68155C8.11267 6.70405 8.0168 6.75766 7.94262 6.83541L2.15981 11.6182C2.1092 11.668 2.06901 11.7274 2.04157 11.7929C2.01413 11.8584 2 11.9287 2 11.9997C2 12.0707 2.01413 12.141 2.04157 12.2065C2.06901 12.272 2.1092 12.3314 2.15981 12.3812L7.94262 17.164C8.0168 17.2417 8.11267 17.2953 8.21775 17.3178C8.32283 17.3403 8.43225 17.3307 8.53177 17.2902C8.63129 17.2496 8.7163 17.18 8.77573 17.0905C8.83517 17.001 8.86628 16.8956 8.86501 16.7882Z" fill="currentColor"></path>
											</svg>
										</button><button class="kt-datatable-pagination-button active disabled" disabled="">1</button><button class="kt-datatable-pagination-button kt-datatable-pagination-next disabled" disabled="">
											<svg class="rtl:transform rtl:rotate-180 size-3.5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15.135 7.21144V11.1516H2.85407C2.62756 11.1516 2.41032 11.2415 2.25015 11.4017C2.08998 11.5619 2 11.7791 2 12.0056C2 12.2321 2.08998 12.4494 2.25015 12.6096C2.41032 12.7697 2.62756 12.8597 2.85407 12.8597H15.135V16.7884C15.1337 16.8959 15.1648 17.0012 15.2243 17.0908C15.2837 17.1803 15.3687 17.2499 15.4682 17.2904C15.5677 17.3309 15.6772 17.3406 15.7822 17.3181C15.8873 17.2956 15.9832 17.242 16.0574 17.1642L21.8402 12.3814C21.8908 12.3316 21.931 12.2722 21.9584 12.2067C21.9859 12.1412 22 12.0709 22 11.9999C22 11.9289 21.9859 11.8586 21.9584 11.7931C21.931 11.7276 21.8908 11.6683 21.8402 11.6185L16.0574 6.83565C15.9832 6.75791 15.8873 6.70429 15.7822 6.68179C15.6772 6.65929 15.5677 6.66893 15.4682 6.70948C15.3687 6.75002 15.2837 6.81959 15.2243 6.90911C15.1648 6.99864 15.1337 7.10399 15.135 7.21144Z" fill="currentColor"></path>
											</svg>
										</button></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="lg:col-span-1">
			<div class="kt-card h-full">
				<div class="kt-card-header">
					<h3 class="kt-card-title">
						Manage your Data
					</h3>
				</div>
				<div class="kt-card-group flex items-center justify-between py-4 gap-2.5">
					<div class="flex flex-col justify-center gap-1.5">
						<span class="leading-none font-medium text-sm text-mono">
							Download your data
						</span>
						<span class="text-sm text-secondary-foreground">
							Add an extra layer of security.
						</span>
					</div>
					<a class="kt-btn kt-btn-sm kt-btn-outline" href="#">
						Start
					</a>
				</div>
				<div class="kt-card-group flex items-center justify-between py-4 gap-2.5">
					<div class="flex flex-col justify-center gap-1.5">
						<span class="leading-none font-medium text-sm text-mono">
							Delete all of your data
						</span>
						<span class="text-sm text-secondary-foreground">
							Instantly sign out all services.
						</span>
					</div>
					<a class="kt-btn kt-btn-sm kt-btn-outline" href="#">
						Delete
					</a>
				</div>
				<div class="kt-card-group flex items-center justify-between py-4 gap-2.5">
					<div class="flex flex-col justify-center gap-1.5">
						<span class="leading-none font-medium text-sm text-mono">
							Auto Data Purge
						</span>
						<span class="text-sm text-secondary-foreground">
							Toggle automatic deletion of old data.
						</span>
					</div>
					<input class="kt-switch kt-switch-sm" name="param" type="checkbox" value="1">

				</div>
				<div class="kt-card-group flex items-center justify-between py-4 gap-2.5">
					<div class="flex flex-col justify-center gap-1.5">
						<span class="leading-none font-medium text-sm text-mono">
							Export your data
						</span>
						<span class="text-sm text-secondary-foreground">
							Download a copy of your data
						</span>
					</div>
					<button class="kt-btn kt-btn-icon kt-btn-ghost">
						<i class="ki-filled ki-exit-down">
						</i>
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- end: grid -->
</div>