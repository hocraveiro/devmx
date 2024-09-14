import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AccountAuthn } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountAuthnForm } from '../../forms';
import {
  inject,
  OnInit,
  output,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'account-authn-form',
  templateUrl: './account-authn-form.component.html',
  styleUrl: './account-authn-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  standalone: true,
})
export class AccountAuthnFormComponent implements OnInit {
  form = new AccountAuthnForm();

  destroyRef = inject(DestroyRef);

  valueChange = output<Partial<AccountAuthn>>();

  valueSubmitted = output<AccountAuthn>();

  ngOnInit() {
    this.form.disable();

    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.valueChange.emit(value));
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      this.valueSubmitted.emit(value);
      this.form.disable();
    }
  }
}
