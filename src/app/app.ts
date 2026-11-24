import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  temaEscuro = (localStorage.getItem('tema-agenda') ?? 'claro') === 'escuro';

  constructor() {
    document.documentElement.dataset['theme'] = this.temaEscuro ? 'escuro' : 'claro';
  }

  alternarTema(): void {
    this.temaEscuro = !this.temaEscuro;
    const tema = this.temaEscuro ? 'escuro' : 'claro';
    document.documentElement.dataset['theme'] = tema;
    localStorage.setItem('tema-agenda', tema);
  }
}

