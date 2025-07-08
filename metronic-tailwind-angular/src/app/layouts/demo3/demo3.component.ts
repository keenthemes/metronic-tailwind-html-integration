import { Component, HostBinding } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-demo3',
  imports: [ThemeToggleComponent, HeaderComponent, SidebarComponent, NavbarComponent, FooterComponent],
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component {
  @HostBinding('class') bodyClass = 'antialiased flex h-full text-base text-foreground bg-background [--header-height:58px] [--sidebar-width:58px] [--navbar-height:56px] lg:overflow-hidden bg-muted';
}
