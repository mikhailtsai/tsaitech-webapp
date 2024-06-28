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

  onClick() {
    this.message = 'Button clicked!';

    this.alertService
        .open(
            'Dynamic component is using <strong>TuiAlertService</strong>',
            {label: 'Injectable service!'}
        )
        .subscribe();
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
      this.code(), // js or typescript code
      this.template(),
      this.styles(), // only css without preprocessing (no less/scss)
      [TuiAlertService]
    );
  }
}
