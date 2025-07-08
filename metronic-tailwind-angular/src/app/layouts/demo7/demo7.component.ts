import { Component, HostBinding } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'body',
  imports: [ThemeToggleComponent, HeaderComponent, ToolbarComponent, FooterComponent],
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.scss'
})
export class Demo7Component {
  @HostBinding('class') bodyClass = 'antialiased flex h-full text-base text-foreground bg-background [--header-height-default:95px] data-kt-[sticky-header=on]:[--header-height:60px] [--header-height:var(--header-height-default)] [--header-height-mobile:70px]';
}
