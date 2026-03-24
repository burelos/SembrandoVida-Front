import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private platformId = inject(PLATFORM_ID);
  private isDark = false;

  constructor() {
    // Al iniciar, leer preferencia guardada en localStorage
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      this.isDark = saved === 'dark';
      this.applyTheme();
    }
  }

  toggle(): void {
    this.isDark = !this.isDark;
    this.applyTheme();

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }
  }

  get darkMode(): boolean {
    return this.isDark;
  }

  private applyTheme(): void {
    const html = document.documentElement;
    if (this.isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}