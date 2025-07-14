import { Component } from '@angular/core';
import { SidebarFooterComponent } from '../partials/sidebar-footer/sidebar-footer.component';
import { SidebarMenuComponent } from '../partials/sidebar-menu/sidebar-menu.component';

@Component({
  selector: '[app-sidebar]',
  imports: [SidebarFooterComponent, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
