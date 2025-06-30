<!-- Chat -->
<button class="kt-btn kt-btn-ghost kt-btn-icon size-9 hover:bg-background hover:[&_i]:text-primary" data-kt-drawer-toggle="#chat_drawer">
	<i class="ki-filled ki-messages text-lg">
	</i>
</button>
<!--Chat Drawer-->
<div class="hidden kt-drawer kt-drawer-end card flex-col max-w-[90%] w-[450px] top-5 bottom-5 end-5 rounded-xl border border-border" data-kt-drawer="true" data-kt-drawer-container="body" id="chat_drawer">
	<div>
		<div class="flex items-center justify-between gap-2.5 text-sm text-mono font-semibold px-5 py-3.5">
			Chat
			<button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-dim shrink-0" data-kt-drawer-dismiss="true">
				<i class="ki-filled ki-cross">
				</i>
			</button>
		</div>
		<div class="border-b border-b-border">
		</div>
		<div class="border-b border-border py-2.5">
			<div class="flex items-center justify-between flex-wrap gap-2 px-5">
				<div class="flex items-center flex-wrap gap-2">
					<div class="flex items-center justify-center shrink-0 rounded-full bg-accent/60 border border-border size-11">
						<img alt="" class="size-7" src="assets/media/brand-logos/gitlab.svg">
						</img>
					</div>
					<div class="flex flex-col">
						<a class="text-sm font-semibold text-mono hover:text-primary" href="#">
							HR Team
						</a>
						<span class="text-xs font-medium italic text-muted-foreground">
							Jessy is typing..
						</span>
					</div>
				</div>
				<div class="flex items-center gap-2.5">
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
							<span class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-2xs size-[30px] text-white size-6 ring-background bg-green-500">
								+10
							</span>
						</div>
					</div>
					<div class="kt-menu" data-kt-menu="true">
						<div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
							<button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
								<i class="ki-filled ki-dots-vertical text-lg">
								</i>
							</button>
							<div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
								<div class="kt-menu-item">
									<a class="kt-menu-link" href="#">
										<span class="kt-menu-icon">
											<i class="ki-filled ki-users">
											</i>
										</span>
										<span class="kt-menu-title">
											Invite Users
										</span>
									</a>
								</div>
								<div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0" data-kt-menu-item-placement="right-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
									<div class="kt-menu-link">
										<span class="kt-menu-icon">
											<i class="ki-filled ki-people">
											</i>
										</span>
										<span class="kt-menu-title">
											Team
										</span>
										<span class="kt-menu-arrow">
											<i class="ki-filled ki-right text-xs rtl:transform rtl:rotate-180">
											</i>
										</span>
									</div>
									<div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
										<div class="kt-menu-item">
											<a class="kt-menu-link" href="#">
												<span class="kt-menu-icon">
													<i class="ki-filled ki-shield-search">
													</i>
												</span>
												<span class="kt-menu-title">
													Find Members
												</span>
											</a>
										</div>
										<div class="kt-menu-item">
											<a class="kt-menu-link" href="#">
												<span class="kt-menu-icon">
													<i class="ki-filled ki-calendar">
													</i>
												</span>
												<span class="kt-menu-title">
													Meetings
												</span>
											</a>
										</div>
										<div class="kt-menu-item">
											<a class="kt-menu-link" href="#">
												<span class="kt-menu-icon">
													<i class="ki-filled ki-filter-edit">
													</i>
												</span>
												<span class="kt-menu-title">
													Group Settings
												</span>
											</a>
										</div>
									</div>
								</div>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="kt-scrollable-y-auto grow" data-kt-scrollable="true" data-kt-scrollable-dependencies="#header" data-kt-scrollable-max-height="auto" data-kt-scrollable-offset="230px">
		<div class="flex flex-col gap-5 py-5">
			<div class="flex items-end gap-3.5 px-5">
				<img alt="" class="rounded-full size-9" src="assets/media/avatars/300-5.png" />
				<div class="flex flex-col gap-1.5">
					<div class="kt-card shadow-none flex flex-col bg-accent/60 gap-2.5 p-3 rounded-bs-none text-2sm">
						Next week we are closing the project. Do You have questions?
					</div>
					<span class="text-xs font-medium text-muted-foreground">
						14:04
					</span>
				</div>
			</div>
			<div class="flex items-end justify-end gap-3.5 px-5">
				<div class="flex flex-col gap-1.5">
					<div class="kt-card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-be-none">
						<p class="text-2sm font-medium text-primary-foreground">
							This is excellent news!
						</p>
					</div>
					<div class="flex items-center justify-end gap-2 relative">
						<span class="text-xs font-medium text-secondary-foreground">
							14:08
						</span>
						<i class="ki-filled ki-double-check text-lg absolute text-green-500">
						</i>
					</div>
				</div>
				<div class="relative shrink-0">
					<div class="kt-avatar size-9">
						<div class="kt-avatar-image">
							<img alt="avatar" src="assets/media/avatars/300-2.png">
							</img>
						</div>
						<div class="kt-avatar-indicator -end-2 -bottom-2">
							<div class="kt-avatar-status kt-avatar-status-online size-2.5">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex items-end gap-3.5 px-5">
				<img alt="" class="rounded-full size-9" src="assets/media/avatars/300-4.png" />
				<div class="flex flex-col gap-1.5">
					<div class="kt-card shadow-none flex flex-col bg-accent/60 gap-2.5 p-3 rounded-bs-none text-2sm">
						I have checked the features, can not wait to demo them!
					</div>
					<span class="text-xs font-medium text-muted-foreground">
						14:26
					</span>
				</div>
			</div>
			<div class="flex items-end gap-3.5 px-5">
				<img alt="" class="rounded-full size-9" src="assets/media/avatars/300-1.png" />
				<div class="flex flex-col gap-1.5">
					<div class="kt-card shadow-none flex flex-col bg-accent/60 gap-2.5 p-3 rounded-bs-none text-2sm">
						I have looked over the rollout plan, and everything seems spot on.
					</div>
					<span class="text-xs font-medium text-muted-foreground">
						15:09
					</span>
				</div>
			</div>
			<div class="flex items-end justify-end gap-3.5 px-5">
				<div class="flex flex-col gap-1.5">
					<div class="kt-card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-be-none">
						<p class="text-2sm font-medium text-primary-foreground">
							Haven't seen the build yet, I'll look now.
						</p>
					</div>
					<div class="flex items-center justify-end gap-2 relative">
						<span class="text-xs font-medium text-secondary-foreground">
							15:52
						</span>
						<i class="ki-filled ki-double-check text-lg absolute text-muted-foreground">
						</i>
					</div>
				</div>
				<div class="relative shrink-0">
					<div class="kt-avatar size-9">
						<div class="kt-avatar-image">
							<img alt="avatar" src="assets/media/avatars/300-2.png">
							</img>
						</div>
						<div class="kt-avatar-indicator -end-2 -bottom-2">
							<div class="kt-avatar-status kt-avatar-status-online size-2.5">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex items-end justify-end gap-3.5 px-5">
				<div class="flex flex-col gap-1.5">
					<div class="kt-card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-be-none">
						<p class="text-2sm font-medium text-primary-foreground">
							Checking the build now
						</p>
					</div>
					<div class="flex items-center justify-end gap-2 relative">
						<span class="text-xs font-medium text-secondary-foreground">
							15:52
						</span>
						<i class="ki-filled ki-double-check text-lg absolute text-muted-foreground">
						</i>
					</div>
				</div>
				<div class="relative shrink-0">
					<div class="kt-avatar size-9">
						<div class="kt-avatar-image">
							<img alt="avatar" src="assets/media/avatars/300-2.png">
							</img>
						</div>
						<div class="kt-avatar-indicator -end-2 -bottom-2">
							<div class="kt-avatar-status kt-avatar-status-online size-2.5">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex items-end gap-3.5 px-5">
				<img alt="" class="rounded-full size-9" src="assets/media/avatars/300-4.png" />
				<div class="flex flex-col gap-1.5">
					<div class="kt-card shadow-none flex flex-col bg-accent/60 gap-2.5 p-3 rounded-bs-none text-2sm">
						Tomorrow, I will send the link for the meeting
					</div>
					<span class="text-xs font-medium text-muted-foreground">
						17:40
					</span>
				</div>
			</div>
		</div>
	</div>
	<!--Chat Footer-->
	<div class="mb-2.5">
		<div class="flex grow gap-2 px-5 py-3.5 bg-accent/60 mb-2.5 border-y border-border" id="join_request">
			<div class="kt-avatar size-9">
				<div class="kt-avatar-image">
					<img alt="avatar" src="assets/media/avatars/300-14.png">
					</img>
				</div>
				<div class="kt-avatar-indicator -end-2 -bottom-2">
					<div class="kt-avatar-status kt-avatar-status-online size-2.5">
					</div>
				</div>
			</div>
			<div class="flex items-center justify-between gap-3 grow">
				<div class="flex flex-col">
					<div class="text-sm mb-px">
						<a class="hover:text-primary font-semibold text-mono" href="#">
							Jane Perez
						</a>
						<span class="text-secondary-foreground">
							wants to join chat
						</span>
					</div>
					<span class="flex items-center text-xs font-medium text-muted-foreground">
						1 day ago
						<span class="rounded-full size-1 bg-mono/30 mx-1.5">
						</span>
						Design Team
					</span>
				</div>
				<div class="flex gap-2.5">
					<button class="kt-btn kt-btn-sm kt-btn-outline kt-btn-sm" data-kt-dismiss="#join_request">
						Decline
					</button>
					<button class="kt-btn kt-btn-sm kt-btn-mono kt-btn-sm">
						Accept
					</button>
				</div>
			</div>
		</div>
		<div class="relative grow mx-5">
			<img alt="" class="rounded-full size-[30px] absolute start-0 top-2/4 -translate-y-2/4 ms-2.5" src="assets/media/avatars/300-2.png">
			<input class="kt-input h-auto py-4 ps-12 bg-transparent" placeholder="Write a message..." type="text" value="" />
			<div class="flex items-center gap-2.5 absolute end-3 top-1/2 -translate-y-1/2">
				<button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
					<i class="ki-filled ki-exit-up">
					</i>
				</button>
				<a class="kt-btn kt-btn-mono kt-btn-sm" href="#">
					Send
				</a>
			</div>
			</img>
		</div>
	</div>
	<!--End of Chat Footer-->
</div>
<!--End of Chat Drawer-->
<!-- End of Chat -->