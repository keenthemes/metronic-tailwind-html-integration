import { Component } from '@angular/core';
import { TopbarUserDropdownComponent } from '../../../partials/topbar-user-dropdown/topbar-user-dropdown.component';
import { TopbarChatComponent } from '../../../partials/topbar-chat/topbar-chat.component';
import { TopbarNotificationDropdownComponent } from '../../../partials/topbar-notification-dropdown/topbar-notification-dropdown.component';
import { LogoComponent } from '../../../partials/logo/logo.component';

@Component({
  selector: '[app-header]',
  imports: [TopbarUserDropdownComponent, TopbarChatComponent, TopbarNotificationDropdownComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
