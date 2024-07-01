import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tsaitech-nestjs-architecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nestjs-architecture.component.html',
  styleUrl: './nestjs-architecture.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestjsArchitectureComponent {}
