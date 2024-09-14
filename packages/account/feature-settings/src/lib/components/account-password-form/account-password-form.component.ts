import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AccountPassword } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountPasswordForm } from '../../forms';
import { CommonModule } from '@angular/common';
import {
  inject,
  OnInit,
  output,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'account-password-form',
  templateUrl: './account-password-form.component.html',
  styleUrl: './account-password-form.component.scss',
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
export class AccountPasswordFormComponent implements OnInit {
  form = new AccountPasswordForm();

  destroyRef = inject(DestroyRef);

  valueChange = output<Partial<AccountPassword>>();

  valueSubmitted = output<AccountPassword>();

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
