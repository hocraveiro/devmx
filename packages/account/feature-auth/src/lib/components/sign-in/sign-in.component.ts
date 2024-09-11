import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { SignIn } from '@devmx/shared-api-interfaces';
import { SignInForm } from '@devmx/shared-ui-forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'account-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class SignInComponent {
  form = new SignInForm();

  onSignIn = output<SignIn>();

  onSubmit() {
    if (this.form.valid) {
      this.onSignIn.emit(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }
}
