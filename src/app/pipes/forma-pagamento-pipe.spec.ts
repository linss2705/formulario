import { FormaPagamentoPipe } from './forma-pagamento-pipe';

describe('FormaPagamentoPipe', () => {
  const pipe = new FormaPagamentoPipe();

  it('formata pix', () => {
    expect(pipe.transform('pix')).toBe('Pix');
  });

  it('formata cartão', () => {
    expect(pipe.transform('cartao')).toBe('Cartão de crédito');
  });

  it('formata boleto', () => {
    expect(pipe.transform('boleto')).toBe('Boleto');
  });

  it('formata dinheiro', () => {
    expect(pipe.transform('dinheiro')).toBe('Dinheiro');
  });

  it('retorna Não informado para string vazia', () => {
    expect(pipe.transform('')).toBe('Não informado');
  });

  it('retorna Não informado para null', () => {
    expect(pipe.transform(null)).toBe('Não informado');
  });

  it('retorna Não informado para undefined', () => {
    expect(pipe.transform(undefined)).toBe('Não informado');
  });
});
