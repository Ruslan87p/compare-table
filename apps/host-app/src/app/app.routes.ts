import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
// import { AuthGuard } from '@code-compare/auth'
import { AutenticationGuardGuard } from './guards/autentication-guard.guard'

export const appRoutes: Route[] = [
  {
    path: '',
    // pathMatch: 'full',
    // redirectTo: 'login'
    component: NxWelcomeComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
    import('@code-compare/login').then((m) => m.LoginModule),
  },
  {
    path: 'remote-app',
    loadChildren: () =>
      import('remote-app/Module').then((m) => m.RemoteEntryModule),
      canActivate:[AutenticationGuardGuard]

  },
];
