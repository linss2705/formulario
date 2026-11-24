import { IniciaisPipe } from './iniciais-pipe';

describe('IniciaisPipe', () => {
  const pipe = new IniciaisPipe();

  it('cria uma instância', () => {
    expect(pipe).toBeTruthy();
  });

  it('usa o primeiro e o último nome', () => {
    expect(pipe.transform('Maria da Silva Santos')).toBe('MS');
  });

  it('remove espaços e preposições e converte para maiúsculas', () => {
    expect(pipe.transform(' joão guedes de brito ')).toBe('JB');
  });

  it('usa uma inicial para nome único', () => {
    expect(pipe.transform('Ana')).toBe('A');
  });

  it('retorna vazio para string vazia', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('retorna vazio para null', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('retorna vazio para undefined', () => {
    expect(pipe.transform(undefined)).toBe('');
  });
});
