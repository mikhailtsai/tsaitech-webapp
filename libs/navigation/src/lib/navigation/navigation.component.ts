import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import {
  TuiAppearanceModule,
  TuiButtonModule,
  TuiFadeModule,
  TuiIconModule,
  TuiNavigationModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import { TuiHintModule, TuiLinkModule } from '@taiga-ui/core';

import {
  BreadcrumbsComponent,
  ShowcasesMenuComponent,
  ThemeSwitcherComponent,
} from './components';

@Component({
  selector: 'tsaitech-navigation',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    TuiNavigationModule,
    TuiIconModule,
    TuiButtonModule,
    TuiAppearanceModule,
    TuiFadeModule,
    ThemeSwitcherComponent,
    ShowcasesMenuComponent,
    BreadcrumbsComponent,
    TuiHintModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  dark = model<boolean>(true);
  expanded = signal(true);
}
