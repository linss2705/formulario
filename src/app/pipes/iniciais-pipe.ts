import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniciais',
})
export class IniciaisPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value || value.trim() === '') return '';

    const preposicoes = new Set(['de', 'da', 'do', 'das', 'dos', 'e']);
    const partes = value
      .trim()
      .split(/\s+/)
      .filter((parte) => parte.length > 0 && !preposicoes.has(parte.toLocaleLowerCase('pt-BR')));

    if (partes.length === 0) return '';

    const primeira = partes[0][0];
    const ultima = partes.length > 1 ? partes[partes.length - 1][0] : '';
    return `${primeira}${ultima}`.toUpperCase();
  }
}
