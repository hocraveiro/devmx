import {
  Self,
  Optional,
  Renderer2,
  Component,
  ElementRef,
} from '@angular/core';
import {
  NgControl,
  FormControl,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'devmx-auto-assignable',
  template: `
    <mat-selection-list [formControl]="control">
      <mat-list-option value="member">Membro</mat-list-option>
      <mat-list-option value="speaker">Palestrante</mat-list-option>
    </mat-selection-list>
  `,
  imports: [ReactiveFormsModule, MatListModule],
  standalone: true,
})
export class AutoAssignableRoleControl extends DefaultValueAccessor {
  get control() {
    return this.ngControl.control as FormControl;
  }

  constructor(
    _renderer: Renderer2,
    _elementRef: ElementRef,
    @Self() @Optional() private ngControl: NgControl
  ) {
    super(_renderer, _elementRef, true);

    this.ngControl.valueAccessor = this;
  }
}
