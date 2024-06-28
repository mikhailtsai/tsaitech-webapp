import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTitleModule } from '@taiga-ui/experimental';

@Component({
  selector: 'ui-page-title',
  standalone: true,
  imports: [CommonModule, TuiTitleModule],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {
  subTitle = input<string>();
  description = input<string>();
}
