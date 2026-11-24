import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth-service';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((erro: HttpErrorResponse) => {
      if (erro.status === 401) {
        auth.sair();
        void router.navigate(['/entrar']);
      }
      return throwError(() => erro);
    }),
  );
};
