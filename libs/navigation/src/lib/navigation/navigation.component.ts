import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  TuiAppearanceModule,
  TuiAvatarModule,
  TuiButtonModule,
  TuiFadeModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import {
  TuiBreakpointService,
  TuiHintModule,
  TuiLinkModule,
} from '@taiga-ui/core';

import {
  BreadcrumbsComponent,
  ShowcasesMenuComponent,
  ThemeSwitcherComponent,
} from './components';
import { NgOptimizedImage } from '@angular/common';

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
    TuiLinkModule,
    TuiAvatarModule,
    NgOptimizedImage,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  readonly #breakpoints = toSignal(inject(TuiBreakpointService));

  dark = model<boolean>(true);
  expanded = signal(this.#breakpoints() !== 'mobile');
}
