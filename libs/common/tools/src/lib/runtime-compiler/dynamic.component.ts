import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Provider,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { RuntimeCompilerService } from './runtime-compiler.service';

@Component({
  selector: 'tool-dynamic-component',
  standalone: true,
  styles: `div {
    padding: 40px;
    background: rgba(255, 255, 255, 0.025);
  }`,
  template: `<div #dynamicRoot>Dynamic component renders here.</div>`,
  providers: [RuntimeCompilerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponent {
  readonly #dynamicComponentService = inject(RuntimeCompilerService);

  @ViewChild('dynamicRoot', { read: ViewContainerRef })
  dynamicRootRef!: ViewContainerRef;

  compileAndRun(
    code: string,
    template: string,
    styles: string,
    providers: { name: string; provide: Provider }[]
  ) {
    if (!code || !template) return;

    this.#dynamicComponentService.createComponent(
      code,
      template,
      styles,
      this.dynamicRootRef,
      providers
    );
  }
}
