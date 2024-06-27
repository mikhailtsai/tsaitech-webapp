import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { TuiMapperPipeModule } from '@taiga-ui/cdk';

import { DEFAULT_EDITOR_OPTIONS } from './consts';

@Component({
  selector: 'ui-code-editor',
  standalone: true,
  imports: [EditorComponent, FormsModule, TuiMapperPipeModule],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorComponent {
  editorOptions = input<unknown>(DEFAULT_EDITOR_OPTIONS);
  language = input<string>(DEFAULT_EDITOR_OPTIONS.language);

  code = model<string>();

  getEditorOptions(options: any, language?: string): unknown {
    return {
      ...options,
      language,
    };
  }
}
