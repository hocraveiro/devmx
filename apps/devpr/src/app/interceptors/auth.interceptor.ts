import { HttpInterceptorFn } from '@angular/common/http';
import { getStorage } from '@devmx/shared-data-access';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = getStorage();
  const router = inject(Router);

  const userToken = storage.getItem('accessToken');

  if (!userToken) {
    router.navigateByUrl('/account/auth');
  }

  const clonedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${userToken}`),
  });

  return next(clonedReq);
};
