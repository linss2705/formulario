import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Perfil as PerfilUsuario } from '../../core/auth-service';
import { CepService, Endereco } from '../../core/cep-service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  private readonly auth = inject(AuthService);
  private readonly cepService = inject(CepService);
  private readonly router = inject(Router);

  perfil = signal<PerfilUsuario | null>(null);
  cep = signal('40140-110');
  endereco = signal<Endereco | null>(null);
  erroCep = signal('');

  constructor() {
    this.auth.perfil().subscribe({
      next: (dados) => this.perfil.set(dados),
    });
  }

  sair(): void {
    this.auth.sair();
    void this.router.navigate(['/entrar']);
  }

  buscarCep(): void {
    this.erroCep.set('');
    this.endereco.set(null);

    this.cepService.buscar(this.cep()).subscribe({
      next: (dados) => {
        if (dados) this.endereco.set(dados);
        else this.erroCep.set('CEP não encontrado.');
      },
      error: () => this.erroCep.set('Não foi possível consultar o CEP.'),
    });
  }
}
