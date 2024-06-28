import { Route } from '@angular/router';

import { showcasesRoutes } from '@tsaitech/showcases';

export const appRoutes: Route[] = [
  {
    path: 'showcases',
    children: showcasesRoutes,
  },
];
