import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_URL, AuthService } from './auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();
  const ehNossaApi = req.url.startsWith(API_URL);

  if (!token || !ehNossaApi) {
    return next(req);
  }

  const comToken = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });

  return next(comToken);
};
