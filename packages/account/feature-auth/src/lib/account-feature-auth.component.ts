import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SignInComponent, SignUpComponent } from './components';
import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { AuthFacade } from '@devmx/account-data-access';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'account-feature-auth',
  templateUrl: './account-feature-auth.component.html',
  styleUrl: './account-feature-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    SignInComponent,
    SignUpComponent,
  ],
  standalone: true,
})
export class AccountFeatureAuthComponent implements OnInit {
  authFacade = inject(AuthFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  ngOnInit() {
    this.authFacade.authenticated$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((authenticated) => {
        if (authenticated) {
          this.router.navigateByUrl('/account');
        }
      });
  }

  onSignIn(value: SignIn) {
    this.authFacade.signIn(value);
  }

  onSignUp(value: SignUp) {
    this.authFacade.signUp(value);
  }
}
