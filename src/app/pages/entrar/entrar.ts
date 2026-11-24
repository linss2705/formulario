import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth-service';

@Component({
  selector: 'app-entrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entrar.html',
  styleUrl: './entrar.css',
})
export class Entrar {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  usuario = signal('emilys');
  senha = signal('emilyspass');
  erro = signal('');
  carregando = signal(false);

  entrar(): void {
    this.erro.set('');
    this.carregando.set(true);

    this.auth.entrar(this.usuario(), this.senha()).subscribe({
      next: () => {
        this.carregando.set(false);
        void this.router.navigate(['/perfil']);
      },
      error: () => {
        this.carregando.set(false);
        this.erro.set('Usuário ou senha inválidos.');
      },
    });
  }
}
