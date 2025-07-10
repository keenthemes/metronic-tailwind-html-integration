import { Component, inject } from '@angular/core';
import { ThemeToggleService, ThemeMode } from './theme-toggle.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  themeService = inject(ThemeToggleService);
  themeMode = this.themeService.themeMode;
  effectiveTheme = this.themeService.effectiveTheme;

  setThemeMode(mode: ThemeMode) {
    this.themeService.setThemeMode(mode);
  }
}
