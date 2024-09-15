import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatExpansionModule } from '@angular/material/expansion';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthFacade } from '@devmx/account-data-access';
import { ToolbarComponent } from './components';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  inject,
  OnInit,
  Component,
  OnDestroy,
  DestroyRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'account-feature-shell',
  templateUrl: './account-feature-shell.component.html',
  styleUrl: './account-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatSidenavModule,
    ToolbarComponent,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    RouterModule,
  ],
  standalone: true,
})
export class AccountFeatureShellComponent implements OnInit, OnDestroy {
  authFacade = inject(AuthFacade);

  destroyRef = inject(DestroyRef);

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  navigation = [
    {
      icon: 'account_circle',
      text: 'Conta',
    },
    {
      path: ['/', 'account'],
      text: 'Configurações',
    },
    {
      path: ['/', 'account', 'presentations'],
      text: 'Apresentações',
    },
  ];

  constructor() {
    const media = inject(MediaMatcher);
    const changeDetectorRef = inject(ChangeDetectorRef);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit() {
    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(console.log);

    this.authFacade.getAuthUser();
  }

  getOut() {
    this.authFacade.getOut();
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
