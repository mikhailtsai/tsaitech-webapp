import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tsaitech-showcases',
  standalone: true,
  templateUrl: './showcases.component.html',
  styleUrl: './showcases.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcasesComponent {}
