import { Routes } from '@angular/router';

import {
  AngularRuntimeComponent,
  ApryseWebViewerComponent,
} from './components';

export const showcasesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
  {
    path: 'angular-runtime',
    component: AngularRuntimeComponent,
  },
  {
    path: 'apryse-webviewer',
    component: ApryseWebViewerComponent,
  },
];
