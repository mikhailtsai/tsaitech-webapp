import { Routes } from '@angular/router';

import {
  ShowcasesComponent,
  AngularRuntimeComponent,
  ApryseWebViewerComponent,
} from './components';

export const showcasesRoutes: Routes = [
  {
    path: '',
    component: ApryseWebViewerComponent,
  },
  {
    path: 'angular-runtime',
    component: AngularRuntimeComponent,
  },
];
