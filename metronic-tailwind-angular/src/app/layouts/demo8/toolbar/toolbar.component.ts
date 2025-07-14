import { Component } from '@angular/core';
import { NotificationDrawerComponent } from '../../../partials/notification-drawer/notification-drawer.component';
import { ModalsSearchComponent } from '../../../partials/modals-search/modals-search.component';

@Component({
  selector: '[app-toolbar]',
  imports: [NotificationDrawerComponent, ModalsSearchComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
