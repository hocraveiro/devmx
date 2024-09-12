import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SignInComponent, SignUpComponent } from './components';
import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { AuthFacade } from '@devmx/account-data-access';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

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
export class AccountFeatureAuthComponent {
  authFacade = inject(AuthFacade);

  onSignIn(value: SignIn) {
    this.authFacade.signIn(value);
  }

  onSignUp(value: SignUp) {
    this.authFacade.signUp(value);
  }
}
