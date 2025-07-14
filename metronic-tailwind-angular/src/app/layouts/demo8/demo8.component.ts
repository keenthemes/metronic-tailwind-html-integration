import { Component, HostBinding, inject } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MetronicInitService } from '../../core/services/metronic-init.service';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
	selector: 'app-demo8',
	imports: [RouterOutlet, ThemeToggleComponent, FooterComponent, HeaderComponent, SidebarComponent, ToolbarComponent],
	templateUrl: './demo8.component.html',
	styleUrl: './demo8.component.scss'
})
export class Demo8Component {
	@HostBinding('class') bodyClass = 'flex grow';
	private metronicInitService = inject(MetronicInitService);

	ngAfterViewInit(): void {
		this.metronicInitService.init();
	}
}
