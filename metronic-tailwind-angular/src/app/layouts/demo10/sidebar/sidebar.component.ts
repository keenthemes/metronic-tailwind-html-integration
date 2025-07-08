import { Component } from '@angular/core';
import { NotificationComponent } from '../partials/notification/notification.component';

@Component({
  selector: 'app-sidebar',
  imports: [NotificationComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
