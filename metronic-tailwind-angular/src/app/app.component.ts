import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SearchModalComponent } from './partials/search-modal/search-modal.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent, SearchModalComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
	title = 'metronic-tailwind-angular';
	@HostBinding('class') hostClass = 'flex grow';

	ngAfterViewInit(): void {
	}

	ngOnInit(): void {
	}
}

