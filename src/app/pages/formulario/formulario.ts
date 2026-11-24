import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  dados = {
    nomeCompleto: '',
    dataNascimento: '',
    genero: '',
    email: '',
    telefone: '',
    cep: '',
    vinculoAcademico: '',
    curso: '',
    senha: '',
    repetirSenha: '',
    receberEmails: false,
    observacoes: '',
  };

  enviado = false;
  senhasDiferentes = false;

  verificarSenhas(): void {
    this.senhasDiferentes = !!this.dados.senha
      && !!this.dados.repetirSenha
      && this.dados.senha !== this.dados.repetirSenha;
  }

  enviar(form: NgForm): void {
    this.verificarSenhas();

    if (form.invalid || this.senhasDiferentes) {
      form.control.markAllAsTouched();
      return;
    }

    this.enviado = true;
    form.resetForm({ receberEmails: false });
    this.dados = {
      nomeCompleto: '',
      dataNascimento: '',
      genero: '',
      email: '',
      telefone: '',
      cep: '',
      vinculoAcademico: '',
      curso: '',
      senha: '',
      repetirSenha: '',
      receberEmails: false,
      observacoes: '',
    };
  }
}
