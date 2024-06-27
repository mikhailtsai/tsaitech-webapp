import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiNavigationModule, TuiToggleModule } from '@taiga-ui/experimental';

@Component({
  selector: 'tsaitech-theme-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiToggleModule, TuiNavigationModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  dark = model<boolean>(true);
}
