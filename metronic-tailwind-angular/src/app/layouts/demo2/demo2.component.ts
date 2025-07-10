import { Component, HostBinding, inject } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MetronicInitService } from '../../core/services/metronic-init.service';

@Component({
	selector: 'app-demo2',
	imports: [RouterOutlet, ThemeToggleComponent, HeaderComponent, NavbarComponent, ToolbarComponent, FooterComponent],
	templateUrl: './demo2.component.html',
	styleUrl: './demo2.component.scss'
})
export class Demo2Component {
	@HostBinding('class') class = 'flex grow flex-col in-data-kt-[sticky-header=on]:pt-(--header-height-default)';
	private metronicInitService = inject(MetronicInitService);

	ngAfterViewInit(): void {
		this.metronicInitService.init();
	}
}
