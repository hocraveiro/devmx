import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignInComponent, SignUpComponent } from './components';
import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'account-feature-auth',
  templateUrl: './account-feature-auth.component.html',
  styleUrl: './account-feature-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    SignInComponent,
    SignUpComponent,
  ],
  standalone: true,
})
export class AccountFeatureAuthComponent {
  onSignIn(value: SignIn) {
    console.log(value);
  }

  onSignUp(value: SignUp) {
    console.log(value);
  }
}
