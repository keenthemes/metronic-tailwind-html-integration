import { Component } from '@angular/core';
import { NotificationComponent } from '../partials/notification/notification.component';
import { UserDropdownComponent } from '../partials/user-dropdown/user-dropdown.component';
import { SidebarMenuComponent } from '../partials/sidebar-menu/sidebar-menu.component';

@Component({
  selector: '[app-sidebar]',
  imports: [NotificationComponent, UserDropdownComponent, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
