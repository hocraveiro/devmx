import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devmx-messenger',
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
  standalone: true,
})
export class MessengerComponent {
  ref = inject(MatSnackBarRef<MessengerComponent>);

  data = inject<string>(MAT_SNACK_BAR_DATA);
}
