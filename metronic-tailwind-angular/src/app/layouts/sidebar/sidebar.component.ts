import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	@HostBinding('class') hostClass = 'sidebar dark:bg-coal-600 bg-light border-r border-r-gray-200 dark:border-r-coal-100 fixed z-20 hidden lg:flex flex-col items-stretch shrink-0';
	@HostBinding('attr.data-drawer') drawer = 'true';
	@HostBinding('attr.data-drawer-class') drawerClass = 'drawer drawer-start top-0 bottom-0';
	@HostBinding('attr.data-drawer-enable') drawerEnable = 'true|lg:false';
	@HostBinding('attr.id') id = 'sidebar';
}