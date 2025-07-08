import { Component, HostBinding } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo4',
  imports: [RouterOutlet, ThemeToggleComponent, HeaderComponent, SidebarComponent, ToolbarComponent, FooterComponent],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss'
})
export class Demo4Component {
  @HostBinding('class') bodyClass = 'antialiased flex h-full text-base text-foreground bg-background [--header-height:60px] [--sidebar-width:290px] bg-muted! lg:overflow-hidden';
}
