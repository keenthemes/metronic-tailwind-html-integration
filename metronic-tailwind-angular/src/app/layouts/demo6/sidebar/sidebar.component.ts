import { Component } from '@angular/core';
import { TopbarUserDropdownComponent } from '../../../partials/topbar-user-dropdown/topbar-user-dropdown.component';

@Component({
  selector: 'app-sidebar',
  imports: [TopbarUserDropdownComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
