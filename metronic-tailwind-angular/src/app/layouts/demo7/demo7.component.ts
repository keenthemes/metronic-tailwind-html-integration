import { Component, HostBinding, inject } from '@angular/core';
import { ThemeToggleComponent } from '../../partials/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MetronicInitService } from '../../core/services/metronic-init.service';

@Component({
	selector: 'app-demo7',
	imports: [RouterOutlet, ThemeToggleComponent, HeaderComponent, ToolbarComponent, FooterComponent],
	templateUrl: './demo7.component.html',
	styleUrl: './demo7.component.scss'
})
export class Demo7Component {
	@HostBinding('class') bodyClass = 'flex grow flex-col in-data-kt-[sticky-header=on]:pt-(--header-height-default)';
	private metronicInitService = inject(MetronicInitService);

	ngAfterViewInit(): void {
		this.metronicInitService.init();
	}
}
