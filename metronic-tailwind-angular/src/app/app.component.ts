import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import KTComponents from '../metronic/core/index';
import KTLayout from '../metronic/app/layouts/demo1';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent, SearchModalComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
	title = 'metronic-tailwind-angular';

	ngAfterViewInit(): void {
		KTComponents.init();
		KTLayout.init();
	}

	ngOnInit(): void {
	}
}

