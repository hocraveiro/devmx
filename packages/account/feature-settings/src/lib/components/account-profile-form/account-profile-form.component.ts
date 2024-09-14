import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AccountProfile } from '@devmx/shared-api-interfaces';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountProfileForm } from '../../forms';
import { CommonModule } from '@angular/common';
import {
  inject,
  OnInit,
  output,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
  viewChild,
  afterNextRender,
  Injector,
} from '@angular/core';

@Component({
  selector: 'account-profile-form',
  templateUrl: './account-profile-form.component.html',
  styleUrl: './account-profile-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
  ],
  standalone: true,
})
export class AccountProfileFormComponent implements OnInit {
  form = new AccountProfileForm();

  private _injector = inject(Injector);

  autosize = viewChild<CdkTextareaAutosize>('autosize');

  destroyRef = inject(DestroyRef);

  valueChange = output<Partial<AccountProfile>>();

  valueSubmitted = output<AccountProfile>();

  ngOnInit() {
    this.form.disable();

    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.valueChange.emit(value));
  }

  triggerResize() {
    // Wait for content to render, then trigger textarea resize.
    afterNextRender(
      () => {
        this.autosize()?.resizeToFitContent(true);
      },
      {
        injector: this._injector,
      }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      this.valueSubmitted.emit(value);
      this.form.disable();
    }
  }
}
