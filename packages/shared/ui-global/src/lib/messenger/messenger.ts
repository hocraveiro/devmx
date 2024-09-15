import { MatSnackBar } from '@angular/material/snack-bar';
import { MessengerComponent } from './messenger.component';

export class Messenger {
  constructor(private readonly snackBar: MatSnackBar) {}

  open(data: string, duration = 3000, ...panelClass: string[]) {
    const options = { data, duration, panelClass };
    this.snackBar.openFromComponent(MessengerComponent, options);
  }
}
