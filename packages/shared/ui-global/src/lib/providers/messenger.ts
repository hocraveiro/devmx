import { MatSnackBar } from '@angular/material/snack-bar';
import { Messenger } from '../messenger';

export function provideMessenger() {
  return {
    provide: Messenger,
    deps: [MatSnackBar],
  };
}
