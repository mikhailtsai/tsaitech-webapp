import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TuiAlertService } from '@taiga-ui/core';

import { DynamicComponent } from '@tsaitech/common/tools';
import { CodeEditorComponent, PageTitleComponent } from '@tsaitech/common/ui';
import { TuiButtonModule, TuiTitleModule } from '@taiga-ui/experimental';

@Component({
  selector: 'tsaitech-angular-runtime',
  standalone: true,
  imports: [
    TuiButtonModule,
    CodeEditorComponent,
    DynamicComponent,
    PageTitleComponent,
    TuiTitleModule,
  ],
  templateUrl: './angular-runtime.component.html',
  styleUrl: './angular-runtime.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularRuntimeComponent {
  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  @ViewChild('refToTheComponent') dynamicComponent!: DynamicComponent;

  title = 'tsaitech';

  code = signal(`class SomeDynamicComponent {
  private readonly alertService: TuiAlertService = inject(TuiAlertService);

  message: string = 'Hello, dynamic world!';

  /**
  * This function will be called outside when component initialized
  */
  initialize() {
    this.alertService
    .open(
        'Dynamic component is using <strong>TuiAlertService</strong>',
        {label: 'Dynamic component is running successfully!'}
    )
    .subscribe();
  }

  onClick() {
    this.message = 'Button clicked!';
  }
}
`);

  template = signal(
    `<div>
  <h1>{{ message }}</h1>

  <button (click)="onClick()">Click me</button>
</div>`
  );

  styles = signal(`h1 {
  color: blue;
}

button {
  background-color: lightgreen;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: green;
  color: white;
}
`);

  compileAndRun() {
    this.dynamicComponent.compileAndRun(
      this.code(),
      this.template(),
      this.styles(),
      [{ name: 'TuiAlertService', provide: TuiAlertService }],
      (component: any) => component.initialize()
    );
  }
}
