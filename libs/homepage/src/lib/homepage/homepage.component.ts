import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiAppearanceModule,
  TuiAvatarModule,
  TuiCardModule,
  TuiCellModule,
  TuiChipModule,
  TuiFadeModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { TuiHintModule } from '@taiga-ui/core';

@Component({
  selector: 'lib-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiCardModule,
    TuiCellModule,
    TuiSurfaceModule,
    TuiAvatarModule,
    TuiTitleModule,
    TuiAppearanceModule,
    TuiChipModule,
    TuiFadeModule,
    TuiHintModule,
  ],
})
export class HomepageComponent {}
