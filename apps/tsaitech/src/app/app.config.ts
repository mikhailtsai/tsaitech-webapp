import { provideAnimations } from '@angular/platform-browser/animations';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { TuiRootModule } from '@taiga-ui/core';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    importProvidersFrom(MonacoEditorModule.forRoot(), TuiRootModule),
  ],
};
