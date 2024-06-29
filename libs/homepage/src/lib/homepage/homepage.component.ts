import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {}
