import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import {
  TuiAppearanceModule,
  TuiButtonModule,
  TuiFadeModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherComponent } from './components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tsaitech-navigation',
  standalone: true,
  imports: [
    FormsModule,
    TuiNavigationModule,
    TuiIconModule,
    TuiButtonModule,
    TuiAppearanceModule,
    ThemeSwitcherComponent,
    TuiFadeModule,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  dark = model<boolean>(true);
  expanded = signal(true);
}
