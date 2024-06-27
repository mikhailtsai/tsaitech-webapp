import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiThemeNightModule,
  TuiModeModule,
} from '@taiga-ui/core';

import { NavigationComponent } from '@tsaitech/navigation';

const ANGULAR_MODULES = [RouterModule, FormsModule];

const TUI_MODULES = [
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiThemeNightModule,
  TuiModeModule,
];

@Component({
  standalone: true,
  imports: [...ANGULAR_MODULES, ...TUI_MODULES, NavigationComponent],
  selector: 'tsaitech-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent {
  dark = model<boolean>(true);
}
