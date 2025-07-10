import { Component, HostBinding, AfterViewInit, inject } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MetronicInitService } from '../../core/services/metronic-init.service';

@Component({
	selector: 'app-demo1',
	imports: [RouterOutlet, ThemeToggleComponent, SidebarComponent, HeaderComponent, FooterComponent],
	templateUrl: './demo1.component.html',
	styleUrl: './demo1.component.scss'
})
export class Demo1Component implements AfterViewInit {
	@HostBinding('class') class = 'flex grow';
	private metronicInitService = inject(MetronicInitService);

	ngAfterViewInit(): void {
		this.metronicInitService.init();
	}
}
