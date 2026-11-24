import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

interface ViaCepDTO {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export interface Endereco {
  rua: string;
  bairro: string;
  cidade: string;
  uf: string;
}

@Injectable({ providedIn: 'root' })
export class CepService {
  private readonly http = inject(HttpClient);

  buscar(cep: string) {
    const digitos = cep.replace(/\D/g, '');

    return this.http
      .get<ViaCepDTO>(`https://viacep.com.br/ws/${digitos}/json/`)
      .pipe(map((dto) => dto.erro
        ? null
        : {
            rua: dto.logradouro,
            bairro: dto.bairro,
            cidade: dto.localidade,
            uf: dto.uf,
          }));
  }
}
