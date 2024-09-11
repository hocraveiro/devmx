import { Route } from '@angular/router';
import { AccountFeatureShellComponent } from './account-feature-shell.component';

export const accountFeatureShellRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@devmx/account-feature-auth').then(
        (m) => m.accountFeatureAuthRoutes
      ),
  },
  { path: '', component: AccountFeatureShellComponent },
];
