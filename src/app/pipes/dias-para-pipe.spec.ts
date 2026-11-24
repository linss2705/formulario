import { DiasParaPipe } from './dias-para-pipe';

describe('DiasParaPipe', () => {
  const pipe = new DiasParaPipe();
  const hoje = new Date(2026, 10, 10);

  it('cria uma instância', () => {
    expect(pipe).toBeTruthy();
  });

  it('retorna Hoje para a data atual', () => {
    expect(pipe.transform('2026-11-10', hoje)).toBe('Hoje');
  });

  it('retorna Amanhã para o dia seguinte', () => {
    expect(pipe.transform('2026-11-11', hoje)).toBe('Amanhã');
  });

  it('retorna Faltam 10 dias', () => {
    expect(pipe.transform('2026-11-20', hoje)).toBe('Faltam 10 dias');
  });

  it('retorna Faltam 21 dias', () => {
    expect(pipe.transform('2026-12-01', hoje)).toBe('Faltam 21 dias');
  });

  it('retorna Encerrado para uma data anterior', () => {
    expect(pipe.transform('2026-11-09', hoje)).toBe('Encerrado');
  });

  it('retorna vazio para string vazia', () => {
    expect(pipe.transform('', hoje)).toBe('');
  });

  it('retorna vazio para null', () => {
    expect(pipe.transform(null, hoje)).toBe('');
  });

  it('retorna vazio para undefined', () => {
    expect(pipe.transform(undefined, hoje)).toBe('');
  });
});
