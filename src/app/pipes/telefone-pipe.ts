import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value || value.trim() === '') return '';

    const digitos = value.replace(/\D/g, '');
    if (digitos.length === 11) {
      return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
    }
    if (digitos.length === 10) {
      return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
    }
    return value;
  }
}
