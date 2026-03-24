import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-button-toogle',
  imports: [],
  templateUrl: './button-toogle.html',
  styleUrl: './button-toogle.css',
})
export class ButtonToogle {
  themeService = inject(ThemeService);
}
