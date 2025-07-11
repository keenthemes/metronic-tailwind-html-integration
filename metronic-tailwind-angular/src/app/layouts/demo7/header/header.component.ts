import { Component } from '@angular/core';
import { TopbarUserDropdownComponent } from '../../../partials/topbar-user-dropdown/topbar-user-dropdown.component';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';

@Component({
  selector: '[app-header]',
  imports: [TopbarUserDropdownComponent, MegaMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
