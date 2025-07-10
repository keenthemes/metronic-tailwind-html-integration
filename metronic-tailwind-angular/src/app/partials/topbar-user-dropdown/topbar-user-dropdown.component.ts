import { Component, inject } from '@angular/core';
import { ThemeToggleService } from '../theme-toggle/theme-toggle.service';

@Component({
  selector: 'app-topbar-user-dropdown',
  imports: [],
  templateUrl: './topbar-user-dropdown.component.html',
  styleUrl: './topbar-user-dropdown.component.scss'
})
export class TopbarUserDropdownComponent {
  themeService = inject(ThemeToggleService);
  effectiveTheme = this.themeService.effectiveTheme;
  setThemeMode = this.themeService.setThemeMode.bind(this.themeService);
}
