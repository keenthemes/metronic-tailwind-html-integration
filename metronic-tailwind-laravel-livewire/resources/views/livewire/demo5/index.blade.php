<!-- Container -->
<div class="kt-container-fluid">
	<div class="grid gap-5 lg:gap-7.5">
		<!-- begin: grid -->
		<div class="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
			<div class="lg:col-span-2">
				<div class="grid grid-cols-1 gap-5 lg:gap-7.5 h-full items-stretch">
					<div class="kt-card min-w-full">
						<div class="kt-card-header">
							<h3 class="kt-card-title">
								Team Info
							</h3>
							<label class="kt-label">
								Visible to all
								<input class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1" />
							</label>
						</div>
						<div class="kt-card-table kt-scrollable-x-auto pb-3">
							<table class="kt-table align-middle text-sm">
								<tr>
									<td class="py-2 min-w-32 text-secondary-foreground font-normal">
										Thumbnail
									</td>
									<td class="py-2 text-secondary-foreground font-normal min-w-32 text-sm">
										150x150px JPEG, PNG Image
									</td>
									<td class="py-2 text-center min-w-16">
										<div class="kt-image-input size-16" data-kt-image-input="true">
											<input accept=".png, .jpg, .jpeg" name="avatar" type="file">
											<input name="avatar_remove" type="hidden" />
											<button class="kt-image-input-remove" data-kt-image-input-remove="true" data-kt-tooltip="true" data-kt-tooltip-placement="right" data-kt-tooltip-trigger="hover" type="button">
												<i class="ki-filled ki-cross">
												</i>
												<span class="kt-tooltip" data-kt-tooltip-content="true">
													Click to remove or revert
												</span>
											</button>
											<div class="kt-image-input-placeholder border-2 border-green-500 kt-image-input-empty:border-input" data-kt-image-input-placeholder="true" style="background-image:url({{ asset('assets/media/avatars/blank.png') }})">
												<div class="kt-image-input-preview" data-kt-image-input-preview="true" style="background-image:url('/media/avatars/300-2.png')">
												</div>
												<div class="flex items-center justify-center cursor-pointer h-5 left-0 right-0 bottom-0 bg-black/25 absolute">
													<svg class="fill-border opacity-80" height="12" viewbox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.6665 2.64585H11.2232C11.0873 2.64749 10.9538 2.61053 10.8382 2.53928C10.7225 2.46803 10.6295 2.36541 10.5698 2.24335L10.0448 1.19918C9.91266 0.931853 9.70808 0.707007 9.45438 0.550249C9.20068 0.393491 8.90806 0.311121 8.60984 0.312517H5.38984C5.09162 0.311121 4.799 0.393491 4.5453 0.550249C4.2916 0.707007 4.08701 0.931853 3.95484 1.19918L3.42984 2.24335C3.37021 2.36541 3.27716 2.46803 3.1615 2.53928C3.04584 2.61053 2.91234 2.64749 2.7765 2.64585H2.33317C1.90772 2.64585 1.49969 2.81486 1.19885 3.1157C0.898014 3.41654 0.729004 3.82457 0.729004 4.25002V10.0834C0.729004 10.5088 0.898014 10.9168 1.19885 11.2177C1.49969 11.5185 1.90772 11.6875 2.33317 11.6875H11.6665C12.092 11.6875 12.5 11.5185 12.8008 11.2177C13.1017 10.9168 13.2707 10.5088 13.2707 10.0834V4.25002C13.2707 3.82457 13.1017 3.41654 12.8008 3.1157C12.5 2.81486 12.092 2.64585 11.6665 2.64585ZM6.99984 9.64585C6.39413 9.64585 5.80203 9.46624 5.2984 9.12973C4.79478 8.79321 4.40225 8.31492 4.17046 7.75532C3.93866 7.19572 3.87802 6.57995 3.99618 5.98589C4.11435 5.39182 4.40602 4.84613 4.83432 4.41784C5.26262 3.98954 5.80831 3.69786 6.40237 3.5797C6.99644 3.46153 7.61221 3.52218 8.1718 3.75397C8.7314 3.98576 9.2097 4.37829 9.54621 4.88192C9.88272 5.38554 10.0623 5.97765 10.0623 6.58335C10.0608 7.3951 9.73765 8.17317 9.16365 8.74716C8.58965 9.32116 7.81159 9.64431 7 9.64585Z">
														</path>
														<path d="M7 8.77087C8.20812 8.77087 9.1875 7.7915 9.1875 6.58337C9.1875 5.37525 8.20812 4.39587 7 4.39587C5.79188 4.39587 4.8125 5.37525 4.8125 6.58337C4.8125 7.7915 5.79188 8.77087 7 8.77087Z">
														</path>
													</svg>
												</div>
											</div>
											</input>
										</div>
									</td>
								</tr>
								<tr>
									<td class="py-2 text-secondary-foreground font-normal">
										Team Name
									</td>
									<td class="py-2 text-secondary-foreground font-normal">
										Product Management
									</td>
									<td class="py-2 text-center">
										<a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
											<i class="ki-filled ki-notepad-edit">
											</i>
										</a>
									</td>
								</tr>
								<tr>
									<td class="py-2 text-secondary-foreground font-normal">
										Description
									</td>
									<td class="py-2 text-secondary-foreground font-normal">
										We're open to partnerships, guest posts, and more. Join us to share your insights and grow your audience.
									</td>
									<td class="py-2 text-center">
										<a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
											<i class="ki-filled ki-notepad-edit">
											</i>
										</a>
									</td>
								</tr>
								<tr>
									<td class="py-3 text-secondary-foreground font-normal">
										View as
									</td>
									<td class="py-3 text-secondary-foreground">
										<span class="kt-badge kt-badge-sm kt-badge-outline kt-badge-success">
											Public
										</span>
									</td>
									<td class="py-3 text-center">
										<a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
											<i class="ki-filled ki-notepad-edit">
											</i>
										</a>
									</td>
								</tr>
								<tr>
									<td class="py-3 text-secondary-foreground font-normal">
										Skills
									</td>
									<td class="py-3 text-secondary-foreground">
										<div class="flex flex-wrap gap-2.5">
											<span class="kt-badge kt-badge-outline">
												Management
											</span>
											<span class="kt-badge kt-badge-outline">
												Web Design
											</span>
											<span class="kt-badge kt-badge-outline">
												Code Review
											</span>
											<span class="kt-badge kt-badge-outline">
												No-code
											</span>
											<span class="kt-badge kt-badge-outline">
												Webflow
											</span>
											<span class="kt-badge kt-badge-outline">
												AI
											</span>
										</div>
									</td>
									<td class="py-3 text-center">
										<a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
											<i class="ki-filled ki-notepad-edit">
											</i>
										</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="lg:col-span-1">
				<div class="grid grid-cols-1 gap-5 lg:gap-7.5 h-full items-stretch">
					<style>
						.channel-stats-bg {
							background-image: url('{{ asset("assets/media/images/2600x1600/bg-3.png") }}');
						}

						.dark .channel-stats-bg {
							background-image: url('{{ asset("assets/media/images/2600x1600/bg-3-dark.png") }}');
						}
					</style>
					<div class="kt-card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:7.5rem_-3.5rem] rtl:[background-position:-3rem_-3.5rem] bg-no-repeat channel-stats-bg">
						<div class="flex flex-col gap-4 pt-6">
							<i class="ki-filled ki-badge text-2xl text-muted-foreground">
							</i>
							<div class="flex flex-col gap-2.5 mb-2">
								<a class="text-base font-semibold leading-none text-mono hover:text-primary" href="{{ url('demo5/account/members/team-info') }}">
									Seats
								</a>
								<span class="text-sm font-medium text-secondary-foreground leading-5">
									Central hub for users: view data, change settings, see activity logs
								</span>
							</div>
						</div>
						<div class="flex mb-4 items-center gap-1 cursor-pointer">
							<a class="kt-link" href="{{ url('demo5/public-profile/network') }}">
								View page
								<i class="ki-filled ki-right text-primary text-xs">
								</i>
							</a>
						</div>
					</div>
					<div class="kt-card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:7.5rem_-3.5rem] rtl:[background-position:-3rem_-3.5rem] bg-no-repeat channel-stats-bg">
						<div class="flex flex-col gap-4 pt-6">
							<i class="ki-filled ki-security-user text-2xl text-muted-foreground">
							</i>
							<div class="flex flex-col gap-2.5 mb-2">
								<a class="text-base font-semibold leading-none text-mono hover:text-primary" href="{{ url('demo5/account/security/security-log') }}">
									Login & Security
								</a>
								<span class="text-sm font-medium text-secondary-foreground leading-5">
									Set passwords, enable 2FA, view login logs, update security questions
								</span>
							</div>
						</div>
						<div class="flex mb-4 items-center gap-1 cursor-pointer">
							<a class="kt-link" href="{{ url('demo5/public-profile/network') }}">
								View page
								<i class="ki-filled ki-right text-primary text-xs">
								</i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end: grid -->
		<!-- begin: grid -->
		<div class="grid lg:grid-cols-1 gap-5 lg:gap-7.5 items-stretch">
			<div class="grid">
				<div class="kt-card kt-card-grid h-full min-w-full">
					<div class="kt-card-header">
						<h3 class="kt-card-title">
							Teams
						</h3>
						<div class="kt-input max-w-48">
							<i class="ki-filled ki-magnifier">
							</i>
							<input data-kt-datatable-search="#kt_datatable_1" placeholder="Search Teams" type="text" />
						</div>
					</div>
					<div class="kt-card-table">
						<div class="grid" data-kt-datatable="true" data-kt-datatable-page-size="5" id="teams_datatable">
							<div class="kt-scrollable-x-auto">
								<table class="kt-table kt-table-border table-fixed" data-kt-datatable-table="true" id="kt_datatable_1">
									<thead>
										<tr>
											<th class="w-[50px]">
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-check="true" type="checkbox" />
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
									<tbody>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="1" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Product Management
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Product development & lifecycle
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
											<td>
												21 Oct, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-4.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-1.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-2.png') }}" />
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
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="2" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Marketing Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Campaigns & market analysis
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
											<td>
												15 Oct, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-4.png') }}" />
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
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="3" />
											</td>
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
											<td>
												10 Oct, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-4.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-1.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-2.png') }}" />
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
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="4" />
											</td>
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
											<td>
												05 Oct, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-24.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-7.png') }}" />
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="5" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Development Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Software development
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
													<div class="kt-rating-label indeterminate">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none" style="width: 50.0%">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>
												01 Oct, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-3.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-8.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-9.png') }}" />
													</div>
													<div class="flex">
														<span class="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-[30px] text-white ring-background bg-destructive">
															+5
														</span>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="6" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Quality Assurance
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Product testing
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
											<td>
												25 Sep, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-6.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-5.png') }}" />
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="7" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Finance Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Financial planning
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
													<div class="kt-rating-label">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>
												20 Sep, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-10.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-11.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-12.png') }}" />
													</div>
													<div class="flex">
														<span class="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-[30px] text-primary-foreground ring-background bg-primary">
															+8
														</span>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="8" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Customer Support
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Customer service
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
											<td>
												15 Sep, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-13.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-14.png') }}" />
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="9" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														R&D Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Research & development
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
											<td>
												10 Sep, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-15.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-16.png') }}" />
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="10" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Operations Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Operations management
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
													<div class="kt-rating-label">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>
												05 Sep, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-17.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-18.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-19.png') }}" />
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="11" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														IT Support
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Technical support
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
											<td>
												01 Sep, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-20.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-21.png') }}" />
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="12" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Legal Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Legal support
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
													<div class="kt-rating-label">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>
												25 Aug, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-22.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-23.png') }}" />
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="13" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Logistics Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Supply chain
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
											<td>
												20 Aug, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-24.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-25.png') }}" />
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="14" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Procurement Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Supplier management
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
											<td>
												15 Aug, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-26.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-27.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-28.png') }}" />
													</div>
													<div class="flex">
														<span class="relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-[30px] text-white ring-background bg-violet-500">
															+3
														</span>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<input class="kt-checkbox kt-checkbox-sm" data-kt-datatable-row-check="true" type="checkbox" value="15" />
											</td>
											<td>
												<div class="flex flex-col gap-2">
													<a class="leading-none font-medium text-sm text-mono hover:text-primary" href="#">
														Training Team
													</a>
													<span class="text-2sm text-secondary-foreground font-normal leading-3">
														Employee training
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
													<div class="kt-rating-label">
														<i class="kt-rating-on ki-solid ki-star text-base leading-none">
														</i>
														<i class="kt-rating-off ki-outline ki-star text-base leading-none">
														</i>
													</div>
												</div>
											</td>
											<td>
												10 Aug, 2024
											</td>
											<td>
												<div class="flex -space-x-2">
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-29.png') }}" />
													</div>
													<div class="flex">
														<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="{{ asset('assets/media/avatars/300-30.png') }}" />
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
									<select class="kt-select w-16" data-kt-datatable-size="true" data-kt-select="" name="perpage">
									</select>
									per page
								</div>
								<div class="flex items-center gap-4 order-1 md:order-2">
									<span data-kt-datatable-info="true">
									</span>
									<div class="kt-datatable-pagination" data-kt-datatable-pagination="true">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="kt-card">
				<div class="kt-card-header">
					<h3 class="kt-card-title">
						FAQ
					</h3>
				</div>
				<div class="kt-card-content py-3">
					<div data-kt-accordion="true" data-kt-accordion-expand-all="true">
						<div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
							<button aria-controls="faq_1_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_1_content">
								<span class="text-base text-mono">
									How is pricing determined for each plan?
								</span>
								<span class="kt-accordion-active:hidden inline-flex">
									<i class="ki-filled ki-plus text-muted-foreground text-sm">
									</i>
								</span>
								<span class="kt-accordion-active:inline-flex hidden">
									<i class="ki-filled ki-minus text-muted-foreground text-sm">
									</i>
								</span>
							</button>
							<div class="kt-accordion-content hidden" id="faq_1_content">
								<div class="text-secondary-foreground text-base pb-4">
									Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision. Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision. Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
								</div>
							</div>
						</div>
						<div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
							<button aria-controls="faq_2_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_2_content">
								<span class="text-base text-mono">
									What payment methods are accepted for subscriptions?
								</span>
								<span class="kt-accordion-active:hidden inline-flex">
									<i class="ki-filled ki-plus text-muted-foreground text-sm">
									</i>
								</span>
								<span class="kt-accordion-active:inline-flex hidden">
									<i class="ki-filled ki-minus text-muted-foreground text-sm">
									</i>
								</span>
							</button>
							<div class="kt-accordion-content hidden" id="faq_2_content">
								<div class="text-secondary-foreground text-base pb-4">
									Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
								</div>
							</div>
						</div>
						<div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
							<button aria-controls="faq_3_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_3_content">
								<span class="text-base text-mono">
									Are there any hidden fees in the pricing?
								</span>
								<span class="kt-accordion-active:hidden inline-flex">
									<i class="ki-filled ki-plus text-muted-foreground text-sm">
									</i>
								</span>
								<span class="kt-accordion-active:inline-flex hidden">
									<i class="ki-filled ki-minus text-muted-foreground text-sm">
									</i>
								</span>
							</button>
							<div class="kt-accordion-content hidden" id="faq_3_content">
								<div class="text-secondary-foreground text-base pb-4">
									Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
								</div>
							</div>
						</div>
						<div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
							<button aria-controls="faq_4_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_4_content">
								<span class="text-base text-mono">
									Is there a discount for annual subscriptions?
								</span>
								<span class="kt-accordion-active:hidden inline-flex">
									<i class="ki-filled ki-plus text-muted-foreground text-sm">
									</i>
								</span>
								<span class="kt-accordion-active:inline-flex hidden">
									<i class="ki-filled ki-minus text-muted-foreground text-sm">
									</i>
								</span>
							</button>
							<div class="kt-accordion-content hidden" id="faq_4_content">
								<div class="text-secondary-foreground text-base pb-4">
									Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
								</div>
							</div>
						</div>
						<div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
							<button aria-controls="faq_5_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_5_content">
								<span class="text-base text-mono">
									Do you offer refunds on subscription cancellations?
								</span>
								<span class="kt-accordion-active:hidden inline-flex">
									<i class="ki-filled ki-plus text-muted-foreground text-sm">
									</i>
								</span>
								<span class="kt-accordion-active:inline-flex hidden">
									<i class="ki-filled ki-minus text-muted-foreground text-sm">
									</i>
								</span>
							</button>
							<div class="kt-accordion-content hidden" id="faq_5_content">
								<div class="text-secondary-foreground text-base pb-4">
									Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
								</div>
							</div>
						</div>
						<div class="kt-accordion-item not-last:border-b border-b-border" data-kt-accordion-item="true">
							<button aria-controls="faq_6_content" class="kt-accordion-toggle py-4" data-kt-accordion-toggle="#faq_6_content">
								<span class="text-base text-mono">
									Can I add extra features to my current plan?
								</span>
								<span class="kt-accordion-active:hidden inline-flex">
									<i class="ki-filled ki-plus text-muted-foreground text-sm">
									</i>
								</span>
								<span class="kt-accordion-active:inline-flex hidden">
									<i class="ki-filled ki-minus text-muted-foreground text-sm">
									</i>
								</span>
							</button>
							<div class="kt-accordion-content hidden" id="faq_6_content">
								<div class="text-secondary-foreground text-base pb-4">
									Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end: grid -->
	</div>
</div>
<!-- End of Container -->