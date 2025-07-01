<div class="pb-5">
	<!-- Container -->
	<div class="kt-container-fixed flex items-center justify-between flex-wrap gap-3">
		<div class="flex items-center flex-wrap gap-1 lg:gap-5">
			<h1 class="font-medium text-base text-mono">
				Team Settings
			</h1>
			<div class="flex items-center flex-wrap gap-1 text-sm">
				<a class="text-secondary-foreground hover:text-primary" href="#">
					Home
				</a>
				<span class="text-muted-foreground text-sm">
					/
				</span>
				<a class="text-secondary-foreground hover:text-primary" href="#">
					Client API
				</a>
				<span class="text-muted-foreground text-sm">
					/
				</span>
				<span class="text-secondary-foreground">
					Configuration
				</span>
				<span class="text-muted-foreground text-sm">
					/
				</span>
				<span class="text-mono">
					Team Settings
				</span>
			</div>
		</div>
		<div class="flex items-center flex-wrap gap-1.5 lg:gap-2.5">
			<!-- Search -->
			<button class="group kt-btn kt-btn-ghost kt-btn-icon size-9 hover:bg-primary/10 hover:[&amp;_i]:text-primary" data-kt-modal-toggle="#search_modal">
				<i class="ki-filled ki-magnifier text-lg group-hover:text-primary">
				</i>
			</button>
			<!-- End of Search -->
			<livewire:shared.topbar-search-modal />
			<!-- Notifications -->
			<button class="kt-btn kt-btn-ghost kt-btn-icon size-9 hover:bg-primary/10 hover:[&amp;_i]:text-primary" data-kt-drawer-toggle="#notifications_drawer">
				<i class="ki-filled ki-notification-status text-lg">
				</i>
			</button>
			<!--Notifications Drawer-->
			<!--End of Notifications Drawer-->
			<!-- End of Notifications -->
			<a class="kt-btn kt-btn-sm kt-btn-outline" href="#">
				<i class="ki-filled ki-exit-down text-base!">
				</i>
				Export
			</a>
		</div>
	</div>
	<!-- End of Container -->
</div>