import { Component, HostBinding } from '@angular/core';
import { ThemeToggleComponent } from '../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'body',
  imports: [ThemeToggleComponent, HeaderComponent, SidebarComponent, ToolbarComponent, FooterComponent],
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.scss'
})
export class Demo6Component {
  @HostBinding('class') bodyClass = 'antialiased flex h-full text-base text-foreground bg-background [--header-height:60px] [--sidebar-width:270px] lg:overflow-hidden bg-muted';
}
