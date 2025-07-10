import { Injectable, Renderer2, RendererFactory2, effect } from '@angular/core';
import { signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeToggleService {
  themeMode = signal<ThemeMode>('system');
  effectiveTheme = signal<'light' | 'dark'>('light');

  private storageKey = 'kt-theme';
  private systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  private systemListener: (() => void) | null = null;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    // Read theme mode from localStorage
    const stored = localStorage.getItem(this.storageKey) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      this.themeMode.set(stored);
    } else {
      this.themeMode.set('system');
    }
    this.updateEffectiveTheme();
    // React to themeMode changes
    effect(() => {
      this.updateEffectiveTheme();
      this.applyThemeToHtml();
      this.setupSystemListener();
    });
  }

  // Compute effective theme
  private updateEffectiveTheme() {
    if (this.themeMode() === 'system') {
      this.effectiveTheme.set(this.systemMediaQuery.matches ? 'dark' : 'light');
    } else {
      this.effectiveTheme.set(this.themeMode() as 'light' | 'dark');
    }
  }

  // Apply theme to <html>
  private applyThemeToHtml() {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.setAttribute('data-theme', this.effectiveTheme());
    html.classList.add(this.effectiveTheme());
  }

  // Listen for system theme changes if in system mode
  private setupSystemListener() {
    this.removeSystemListener();
    if (this.themeMode() === 'system') {
      const handler = (e: MediaQueryListEvent) => {
        this.updateEffectiveTheme();
        this.applyThemeToHtml();
      };
      this.systemMediaQuery.addEventListener('change', handler);
      this.systemListener = () => this.systemMediaQuery.removeEventListener('change', handler);
    }
  }

  private removeSystemListener() {
    if (this.systemListener) {
      this.systemListener();
      this.systemListener = null;
    }
  }

  setThemeMode(mode: ThemeMode) {
    this.themeMode.set(mode);
    localStorage.setItem(this.storageKey, mode);
    this.updateEffectiveTheme();
    this.applyThemeToHtml();
    this.setupSystemListener();
  }
}