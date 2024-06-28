import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiAppearanceModule,
  TuiButtonModule,
  TuiFadeModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import {
  TuiDataListModule,
  TuiExpandModule,
  TuiHintModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tsaitech-showcases-menu',
  standalone: true,
  imports: [
    CommonModule,
    TuiAppearanceModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiExpandModule,
    RouterLink,
    TuiHintModule,
    TuiNavigationModule,
    TuiFadeModule,
    TuiButtonModule,
  ],
  templateUrl: './showcases-menu.component.html',
  styleUrl: './showcases-menu.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcasesMenuComponent {
  expanded = input.required<boolean>();

  showCaseOpen = model<boolean>(false);
  showCaseSubMenu = signal(false);

  readonly showcases = [
    { path: 'angular-runtime', name: 'Angular in-browser runtime compilation' },
    {
      path: 'apryse-webviewer',
      name: 'Apryse WebViewer PDF editor integration',
    },
  ];
}
