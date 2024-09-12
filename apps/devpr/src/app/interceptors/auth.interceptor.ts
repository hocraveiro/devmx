import { HttpInterceptorFn } from '@angular/common/http';
import { getStorage } from '@devmx/shared-data-access';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = getStorage();

  const userToken =  storage.getItem('accessToken');

  const clonedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${userToken}`),
  });

  return next(clonedReq);
};
