import { Component, HostBinding } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'body',
  imports: [RouterOutlet, ThemeToggleComponent, HeaderComponent, NavbarComponent, ToolbarComponent, FooterComponent],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {
  @HostBinding('class') bodyClass = 'flex h-full bg-background text-base text-foreground antialiased [--header-height:100px] data-[kt-sticky-header=on]:[--header-height:60px]';
}
