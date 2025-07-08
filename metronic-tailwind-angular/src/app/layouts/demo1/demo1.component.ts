import { Component, HostBinding } from '@angular/core';
import { ThemeToggleComponent } from '../partials/theme-toggle/theme-toggle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'body',
  imports: [ThemeToggleComponent, SidebarComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  @HostBinding('class') bodyClass = 'demo1 kt-sidebar-fixed kt-header-fixed flex h-full bg-background text-base text-foreground antialiased';
}
