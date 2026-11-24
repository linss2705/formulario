import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { tap } from 'rxjs';

export const API_URL = 'https://dummyjson.com';

export interface RespostaLogin {
  accessToken: string;
  refreshToken?: string;
}

export interface Perfil {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  readonly token = signal<string | null>(localStorage.getItem('token'));

  entrar(usuario: string, senha: string) {
    return this.http.post<RespostaLogin>(`${API_URL}/auth/login`, {
      username: usuario,
      password: senha,
    }).pipe(
      tap((resposta) => {
        localStorage.setItem('token', resposta.accessToken);
        this.token.set(resposta.accessToken);
      }),
    );
  }

  perfil() {
    return this.http.get<Perfil>(`${API_URL}/auth/me`);
  }

  sair(): void {
    localStorage.removeItem('token');
    this.token.set(null);
  }
}
