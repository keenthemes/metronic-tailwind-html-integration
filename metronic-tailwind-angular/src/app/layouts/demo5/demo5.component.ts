import { Component, HostBinding, inject } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ModalsSearchComponent } from '../../partials/modals-search/modals-search.component';
import { MetronicInitService } from '../../core/services/metronic-init.service';

@Component({
  selector: 'app-demo5',
  imports: [RouterOutlet, ThemeToggleComponent, HeaderComponent, NavbarComponent, SidebarComponent, ToolbarComponent, FooterComponent, ModalsSearchComponent],
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.scss'
})
export class Demo5Component {
  @HostBinding('class') bodyClass = 'flex grow flex-col in-data-kt-[sticky-header=on]:pt-(--header-height)';
  private metronicInitService = inject(MetronicInitService);

  ngAfterViewInit(): void {
    this.metronicInitService.init();
  }
}
