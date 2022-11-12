import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'remote-app',
    loadChildren: () =>
      import('remote-app/Module').then((m) => m.RemoteEntryModule),
  },
];
