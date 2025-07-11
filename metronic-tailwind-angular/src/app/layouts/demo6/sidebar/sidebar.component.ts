import { Component } from '@angular/core';
import { TopbarUserDropdownComponent } from '../../../partials/topbar-user-dropdown/topbar-user-dropdown.component';
import { TopbarNotificationDropdownComponent } from '../../../partials/topbar-notification-dropdown/topbar-notification-dropdown.component';
import { SidebarMenuComponent } from '../partials/sidebar-menu/sidebar-menu.component';

@Component({
  selector: '[app-sidebar]',
  imports: [TopbarUserDropdownComponent, TopbarNotificationDropdownComponent, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
