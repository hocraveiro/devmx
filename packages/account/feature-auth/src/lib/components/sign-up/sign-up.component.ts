import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUp } from '@devmx/shared-api-interfaces';
import { SignUpForm } from '@devmx/shared-ui-forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'account-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
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
export class SignUpComponent {
  form = new SignUpForm();

  onSignUp = output<SignUp>();

  onSubmit() {
    if (this.form.valid) {
      this.onSignUp.emit(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }
}
