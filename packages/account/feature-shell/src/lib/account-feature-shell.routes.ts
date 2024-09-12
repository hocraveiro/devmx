import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { dataAccessAccountProviders } from '@devmx/account-data-access';
import { Route } from '@angular/router';

export const accountFeatureShellRoutes: Route[] = [
  {
    path: 'auth',
    providers: [...dataAccessAccountProviders],
    loadChildren: () =>
      import('@devmx/account-feature-auth').then(
        (m) => m.accountFeatureAuthRoutes
      ),
  },
  {
    path: '',
    component: AccountFeatureShellComponent,
    providers: [...dataAccessAccountProviders]
  },
];
