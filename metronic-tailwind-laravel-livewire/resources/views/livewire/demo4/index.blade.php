<!-- Container -->
<div class="kt-container-fluid">
	<div class="grid gap-5 lg:gap-7.5">
		<!-- begin: grid -->
		<div class="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
			<div class="lg:col-span-2">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
					<style>
						.channel-stats-bg {
							background-image: url('assets/media/images/2600x1600/bg-3.png');
						}

						.dark .channel-stats-bg {
							background-image: url('assets/media/images/2600x1600/bg-3-dark.png');
						}
					</style>
					<div class="kt-card px-5 lg:px-7.5 h-full bg-no-repeat bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] channel-stats-bg">
						<div class="flex flex-col gap-4 pt-6">
							<i class="ki-filled ki-badge text-2xl text-muted-foreground">
							</i>
							<div class="flex flex-col gap-2.5 mb-2">
								<a class="text-base font-semibold leading-none text-mono hover:text-primary" href="#">
									Seats
								</a>
								<span class="text-sm font-medium text-secondary-foreground leading-5">
									Central hub for users: view data, change settings, see activity logs
								</span>
							</div>
						</div>
						<div class="flex mb-4 items-center gap-1 cursor-pointer">
							<a class="kt-link" href="#">
								View page
								<i class="ki-filled ki-right text-primary text-xs">
								</i>
							</a>
						</div>
					</div>
					<div class="kt-card px-5 lg:px-7.5 h-full bg-no-repeat bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] channel-stats-bg">
						<div class="flex flex-col gap-4 pt-6">
							<i class="ki-filled ki-security-user text-2xl text-muted-foreground">
							</i>
							<div class="flex flex-col gap-2.5 mb-2">
								<a class="text-base font-semibold leading-none text-mono hover:text-primary" href="#">
									Login & Security
								</a>
								<span class="text-sm font-medium text-secondary-foreground leading-5">
									Set passwords, enable 2FA, view login logs, update security questions
								</span>
							</div>
						</div>
						<div class="flex mb-4 items-center gap-1 cursor-pointer">
							<a class="kt-link" href="#">
								View page
								<i class="ki-filled ki-right text-primary text-xs">
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
							Block List
						</h3>
					</div>
					<div class="kt-card-content flex flex-col gap-5">
						<div class="text-sm text-foreground">
							Users on the block list are unable to send chat requests or messages to you anymore, ever, or again
						</div>
						<div class="kt-input-group">
							<input class="kt-input" placeholder="Block new user" type="text" value="" />
							<span class="kt-btn kt-btn-primary">
								Add
							</span>
						</div>
						<div class="flex flex-col gap-5">
							<div class="flex items-center justify-between gap-2.5">
								<div class="flex items-center gap-2.5">
									<div class="">
										<img class="h-9 rounded-full" src="assets/media/avatars/gray/1.png" />
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
										<img class="h-9 rounded-full" src="assets/media/avatars/gray/2.png" />
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
										<img class="h-9 rounded-full" src="assets/media/avatars/gray/3.png" />
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
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-4.png" />
														</div>
														<div class="flex">
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-1.png" />
														</div>
														<div class="flex">
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-2.png" />
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
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-4.png" />
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
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-4.png" />
														</div>
														<div class="flex">
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-1.png" />
														</div>
														<div class="flex">
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-2.png" />
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
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-24.png" />
														</div>
														<div class="flex">
															<img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-background size-[30px]" src="assets/media/avatars/300-7.png" />
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
			</div>
		</div>
		<!-- end: grid -->
	</div>
</div>
<!-- End of Container -->