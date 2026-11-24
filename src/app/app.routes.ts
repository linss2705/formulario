import { Routes } from '@angular/router';
import { Pessoa } from './pessoa/pessoa';
import { CadastroEvento } from './pages/cadastro-evento/cadastro-evento';
import { Formulario } from './pages/formulario/formulario';
import { Entrar } from './pages/entrar/entrar';
import { Perfil } from './pages/perfil/perfil';
import { authGuard } from './core/auth.guard';

import { Home } from './home/home';
import { Empresa } from './empresa/empresa';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pessoa', component: Pessoa },
  { path: 'empresa', component: Empresa },
  { path: 'eventos', component: CadastroEvento },
  { path: 'eventos/novo', component: CadastroEvento },
  { path: 'formulario', component: Formulario },
  { path: 'entrar', component: Entrar },
  { path: 'perfil', component: Perfil, canActivate: [authGuard] },
  { path: '**', component: Home } //coringa
];