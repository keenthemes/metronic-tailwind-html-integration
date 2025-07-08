import { Component } from '@angular/core';
import { TopbarUserDropdownComponent } from '../../../partials/topbar-user-dropdown/topbar-user-dropdown.component';
import { TopbarNotificationDropdownComponent } from '../../../partials/topbar-notification-dropdown/topbar-notification-dropdown.component';
import { TopbarAppsComponent } from '../../../partials/topbar-apps/topbar-apps.component';

@Component({
  selector: 'app-header',
  imports: [TopbarUserDropdownComponent, TopbarNotificationDropdownComponent, TopbarAppsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
