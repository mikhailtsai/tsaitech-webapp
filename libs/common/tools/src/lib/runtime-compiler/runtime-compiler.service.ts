import {
  Injectable,
  Component,
  ViewEncapsulation,
  ViewContainerRef,
  EnvironmentInjector,
  createComponent,
  inject,
  Provider,
  ComponentRef,
} from '@angular/core';

@Injectable()
export class RuntimeCompilerService {
  constructor(private environmentInjector: EnvironmentInjector) {}

  createComponent<C>(
    componentCode: string,
    template: string,
    styles: string,
    viewContainerRef: ViewContainerRef,
    providers: { name: string; provide: Provider }[] = [],
    onLoad?: (component: C) => void
  ) {
    const componentType = this.createComponentType(
      componentCode,
      template,
      styles,
      providers
    );

    viewContainerRef.clear();
    viewContainerRef.element.nativeElement.innerHTML = '';

    const componentRef: ComponentRef<any> = createComponent(componentType, {
      environmentInjector: this.environmentInjector,
      hostElement: viewContainerRef.element.nativeElement,
    });

    if (componentRef.instance) {
      viewContainerRef.insert(componentRef.hostView);

      if (onLoad) {
        onLoad(componentRef.instance);
      }
    }
  }

  private createComponentType(
    componentCode: string,
    template: string,
    styles: string,
    providers: { name: string; provide: Provider }[]
  ): any {
    const result = (window as any).ts.transpileModule(componentCode, {
      compilerOptions: { module: (window as any).ts.ModuleKind.ESNext },
    });

    const code = result.outputText;
    const providersMap: Record<string, Provider> = providers.reduce(
      (acc, provider) => ({
        ...acc,
        [provider.name]: provider.provide,
      }),
      {}
    );
    const providersConsts = providers.map(
      (provider) =>
        `const ${provider.name} = providersMap['${provider.name}'];\n`
    );

    const componentClass = new Function(
      'inject',
      'providersMap',
      `${providersConsts}

return ${code.substring(code.indexOf('= ') + 2)};`
    )(inject, providersMap);

    return Component({
      selector: `dynamic-component-${Math.random()}`,
      template,
      styles,
      encapsulation: ViewEncapsulation.Emulated,
    })(componentClass);
  }
}
