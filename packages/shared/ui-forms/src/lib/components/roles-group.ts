import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {
  Self,
  Optional,
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';
import {
  FormGroup,
  ControlContainer,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'devmx-roles-group',
  template: `
    <section [formGroup]="control">
      <mat-card>
        <mat-checkbox>
          <h3>Direção</h3>
        </mat-checkbox>

        <mat-card-content>
          <mat-checkbox formControlName="director">Diretor</mat-checkbox>
          <mat-checkbox formControlName="manager">Gerente</mat-checkbox>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-checkbox>
          <h3>Contribuição</h3>
        </mat-checkbox>

        <mat-card-content>
          <mat-checkbox formControlName="neighbor">Parceiro</mat-checkbox>
          <mat-checkbox formControlName="donor">Contribuidor</mat-checkbox>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-checkbox>
          <h3>Reconhecimento</h3>
        </mat-checkbox>

        <mat-card-content>
          <mat-checkbox formControlName="heroe">Herói</mat-checkbox>
          <mat-checkbox formControlName="staff">Organizador</mat-checkbox>
          <mat-checkbox formControlName="leader">Líder</mat-checkbox>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-checkbox>
          <h3>Participação</h3>
        </mat-checkbox>

        <mat-card-content>
          <mat-checkbox formControlName="speaker">Palestrante</mat-checkbox>
          <mat-checkbox formControlName="member">Membro</mat-checkbox>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  imports: [ReactiveFormsModule, MatCardModule, MatCheckboxModule],
  standalone: true,
})
export class RolesGroup extends DefaultValueAccessor {
  get control() {
    return this.ngControl.control as FormGroup;
  }

  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    @Self() @Optional() private ngControl: ControlContainer
  ) {
    super(renderer, elementRef, true);

    console.log();

    // this.ngControl.valueAccessor = this.control.controls;
  }
}
