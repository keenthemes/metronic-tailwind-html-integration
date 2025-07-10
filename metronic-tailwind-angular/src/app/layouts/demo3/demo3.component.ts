import { Component, HostBinding, inject } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MetronicInitService } from '../../core/services/metronic-init.service';

@Component({
	selector: 'app-demo3',
	imports: [RouterOutlet, ThemeToggleComponent, HeaderComponent, SidebarComponent, NavbarComponent, FooterComponent],
	templateUrl: './demo3.component.html',
	styleUrl: './demo3.component.scss'
})
export class Demo3Component {
	@HostBinding('class') class = 'flex grow';
	private metronicInitService = inject(MetronicInitService);

	ngAfterViewInit(): void {
		this.metronicInitService.init();
	}
}
