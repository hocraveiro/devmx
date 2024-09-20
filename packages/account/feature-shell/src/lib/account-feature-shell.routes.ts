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
    providers: [...dataAccessAccountProviders],
    children: [
      {
        path: 'presentations',
        loadChildren: () =>
          import('@devmx/account-feature-presentations').then(
            (m) => m.accountFeaturePresentationsRoutes
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('@devmx/feature-events').then(
            (m) => m.accountFeatureSettingsRoutes
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@devmx/account-feature-settings').then(
            (m) => m.accountFeatureSettingsRoutes
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'settings',
      },
    ],
  },
];
