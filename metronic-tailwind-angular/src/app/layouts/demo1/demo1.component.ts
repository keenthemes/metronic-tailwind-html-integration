import { Component, HostBinding } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo1',
  imports: [SidebarComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  @HostBinding('class') className = 'flex grow';
}
