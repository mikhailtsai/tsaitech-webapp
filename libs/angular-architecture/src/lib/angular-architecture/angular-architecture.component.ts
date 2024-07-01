import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiAppearanceModule,
  TuiAvatarStackModule,
  TuiCardModule,
  TuiCellModule,
  TuiChipModule,
  TuiFadeModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { TuiHintModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiTreeModule } from '@taiga-ui/kit';

@Component({
  selector: 'tsaitech-angular-architecture',
  standalone: true,
  imports: [
    CommonModule,
    TuiAppearanceModule,
    TuiAvatarStackModule,
    TuiCardModule,
    TuiSurfaceModule,
    TuiCellModule,
    TuiTitleModule,
    TuiChipModule,
    TuiFadeModule,
    TuiHintModule,
    TuiLinkModule,
    TuiTreeModule,
  ],
  templateUrl: './angular-architecture.component.html',
  styleUrl: './angular-architecture.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularArchitectureComponent {
  oneFeatureOneLibRoutes = `import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@example-app/some-feature').then((module) => module.someFeatureRoutes),
  },
];`;

  oneFeatureOneLibComponent = `import { SomeFeatureWidgetComponent } from '@example-app/some-feature';

@Component({
  selector: 'app-some-another-feature',
  standalone: true,
  imports: [
    SomeFeatureComponent,
  ],
  template: \`<app-some-feature-widget />\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomeAnotherFeatureComponent {}`;
}
