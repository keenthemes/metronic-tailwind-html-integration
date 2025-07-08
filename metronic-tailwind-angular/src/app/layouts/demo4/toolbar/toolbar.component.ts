import { Component } from '@angular/core';
import { TopbarNotificationDropdownComponent } from '../../../partials/topbar-notification-dropdown/topbar-notification-dropdown.component';
import { TopbarSearchModalComponent } from '../../../partials/topbar-search-modal/topbar-search-modal.component';

@Component({
  selector: 'app-toolbar',
  imports: [TopbarSearchModalComponent, TopbarNotificationDropdownComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
