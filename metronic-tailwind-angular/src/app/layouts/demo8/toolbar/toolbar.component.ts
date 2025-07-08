import { Component } from '@angular/core';
import { NotificationDrawerComponent } from '../../../partials/notification-drawer/notification-drawer.component';

@Component({
  selector: 'app-toolbar',
  imports: [RouterOutlet, NotificationDrawerComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
