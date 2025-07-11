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

  /**
   * Handles the change event for the theme toggle switch.
   * Safely extracts the checked value from the event target and sets the theme mode accordingly.
   * @param event The change event from the checkbox input.
   */
  onThemeToggle(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    if (input && typeof input.checked === 'boolean') {
      this.setThemeMode(input.checked ? 'dark' : 'light');
    }
    // If input is null or checked is not boolean, do nothing (fail gracefully)
  }
}
