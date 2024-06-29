import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@tsaitech/homepage').then((module) => module.HomepageComponent),
  },
  {
    path: 'showcases',
    loadChildren: () =>
      import('@tsaitech/showcases').then((module) => module.showcasesRoutes),
  },
];
