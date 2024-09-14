import { AccountFacade, AuthFacade } from '@devmx/account-data-access';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { take, tap, timer } from 'rxjs';
import {
  AccountAuthn,
  AccountProfile,
  AccountPassword,
} from '@devmx/shared-api-interfaces';
import {
  inject,
  signal,
  viewChild,
  Component,
  AfterViewInit,
  WritableSignal,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MatExpansionPanel,
  MatExpansionModule,
} from '@angular/material/expansion';
import {
  AccountAuthnFormComponent,
  AccountProfileFormComponent,
  AccountPasswordFormComponent,
} from './components';

@Component({
  selector: 'account-feature-settings',
  templateUrl: './account-feature-settings.component.html',
  styleUrl: './account-feature-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AccountProfileFormComponent,
    AccountPasswordFormComponent,
    AccountAuthnFormComponent,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    CommonModule,
  ],
  standalone: true,
})
export class AccountFeatureSettingsComponent implements AfterViewInit {
  password = viewChild(AccountPasswordFormComponent);
  profile = viewChild(AccountProfileFormComponent);
  authn = viewChild(AccountAuthnFormComponent);

  authFacade = inject(AuthFacade);
  accountFacade = inject(AccountFacade);

  loader = {
    profile: signal(false),
    authn: signal(false),
    password: signal(false),
  };

  ngAfterViewInit() {
    this.accountFacade.selected$.subscribe((account) => {
      const passwordCmp = this.password();
      const profileCmp = this.profile();
      const authnCmp = this.authn();

      if (account && passwordCmp && profileCmp && authnCmp) {
        passwordCmp.form.patchValue({ id: account.id });
        profileCmp.form.patchValue(account);
        authnCmp.form.patchValue(account);
      }
    });

    const findOne$ = this.authFacade.user$.pipe(
      tap((auth) => (auth ? this.accountFacade.findOne(auth) : null))
    );

    findOne$.subscribe();
  }

  onProfileSubmitted(value: AccountProfile, panel: MatExpansionPanel) {
    panel.close();

    this.setLoader(this.loader.profile);

    this.accountFacade.update(value);
  }

  onAuthnSubmitted(value: AccountAuthn, panel: MatExpansionPanel) {
    panel.close();

    this.setLoader(this.loader.authn);

    this.accountFacade.update(value);
  }

  onPasswordSubmitted(value: AccountPassword, panel: MatExpansionPanel) {
    panel.close();

    this.setLoader(this.loader.password);

    // this.accountFacade.update(value);
  }

  setLoader(writableSignal: WritableSignal<boolean>) {
    writableSignal.set(true);

    const timer$ = timer(800).pipe(take(1));
    timer$.subscribe(() => writableSignal.set(false));
  }
}
