import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@tsaitech/homepage').then((module) => module.HomepageComponent),
  },
  {
    path: 'showcases',
    title: 'Mikhail Tsai — showcases',
    loadChildren: () =>
      import('@tsaitech/showcases').then((module) => module.showcasesRoutes),
  },
  {
    path: 'angular-architecture',
    title: 'Mikhail Tsai — Angular webapp architecture',
    loadChildren: () =>
      import('@tsaitech/angular-architecture').then(
        (module) => module.angularArchitectureRoutes
      ),
  },
  {
    path: 'nestjs-architecture',
    title: 'Mikhail Tsai — Nest.js backend architecture',
    loadChildren: () =>
      import('@tsaitech/nestjs-architecture').then(
        (module) => module.nestjsArchitectureRoutes
      ),
  },
];
