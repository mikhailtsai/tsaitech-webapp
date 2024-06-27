import { Routes } from '@angular/router';

import { ShowcasesComponent, AngularRuntimeComponent } from './components';

export const showcasesRoutes: Routes = [
  {
    path: '',
    component: ShowcasesComponent,
  },
  {
    path: 'angular-runtime',
    component: AngularRuntimeComponent,
  },
];
