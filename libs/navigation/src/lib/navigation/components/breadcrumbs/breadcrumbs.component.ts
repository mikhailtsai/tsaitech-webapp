import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { TuiLinkModule } from '@taiga-ui/core';

@Component({
  selector: 'tsaitech-breadcrumbs',
  standalone: true,
  imports: [CommonModule, TuiBreadcrumbsModule, RouterLink, TuiLinkModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly #router = inject(Router);

  routes = toSignal(
    this.#router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => {
        return this.#getRouteSegments(event.urlAfterRedirects);
      })
    ),
    {
      initialValue: [],
    }
  );

  #getRouteSegments(url: string) {
    const segments = url.split('/').filter((segment) => segment);

    return segments.reduce(
      (acc, segment) => {
        const lastPath = acc[acc.length - 1]?.route || '';

        return [
          ...acc,
          {
            route: `${lastPath}/${segment}`,
            name: `${segment[0].toUpperCase()}${segment
              .substring(1)
              .split('-')
              .join(' ')}`,
          },
        ];
      },
      [{ route: '/', name: 'Home' }]
    );
  }
}
