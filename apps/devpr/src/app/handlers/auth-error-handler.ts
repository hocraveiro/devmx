import { HttpErrorResponse } from '@angular/common/http';
import { getStorage } from '@devmx/shared-data-access';
import { ErrorHandler, inject } from '@angular/core';
import { Router } from '@angular/router';

export class AuthErrorHandler implements ErrorHandler {
  router;

  constructor() {
    this.router = inject(Router);
  }

  handleError(error: Error): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        const storage = getStorage();
        storage.removeItem('accessToken');
        this.router.navigateByUrl('/account/auth');
      }
    }
  }
}
