import { Component, HostBinding } from '@angular/core';
import { ThemeToggleComponent } from '../partials/theme-toggle/theme-toggle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'body',
  imports: [ThemeToggleComponent, SidebarComponent, ToolbarComponent, FooterComponent],
  templateUrl: './demo8.component.html',
  styleUrl: './demo8.component.scss'
})
export class Demo8Component {
  @HostBinding('class') bodyClass = 'antialiased flex h-full text-base text-foreground bg-background [--header-height:60px] [--sidebar-width:90px] bg-muted';
}
