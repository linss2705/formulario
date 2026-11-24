import { Pipe, PipeTransform } from '@angular/core';

export type FormaPagamento = 'pix' | 'cartao' | 'boleto' | 'dinheiro' | '';

@Pipe({
  name: 'formaPagamento',
})
export class FormaPagamentoPipe implements PipeTransform {
  transform(value: FormaPagamento | null | undefined): string {
    if (!value) return 'Não informado';

    const formas: Record<FormaPagamento, string> = {
      pix: 'Pix',
      cartao: 'Cartão de crédito',
      boleto: 'Boleto',
      dinheiro: 'Dinheiro',
      '': 'Não informado',
    };

    return formas[value];
  }
}
