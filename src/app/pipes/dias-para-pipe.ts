import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasPara',
})
export class DiasParaPipe implements PipeTransform {
  transform(dataEvento: string | null | undefined, hoje: Date = new Date()): string {
    if (!dataEvento || dataEvento.trim() === '') return '';

    const partesEvento = dataEvento.trim().split('-').map(Number);
    if (partesEvento.length !== 3 || partesEvento.some((parte) => !Number.isFinite(parte))) return '';

    const [anoEvento, mesEvento, diaEvento] = partesEvento;
    const timestampEvento = Date.UTC(anoEvento, mesEvento - 1, diaEvento);

    const timestampHoje = Date.UTC(
      hoje.getFullYear(),
      hoje.getMonth(),
      hoje.getDate()
    );

    const diferenca = Math.round((timestampEvento - timestampHoje) / 86_400_000);

    if (diferenca < 0) return 'Encerrado';
    if (diferenca === 0) return 'Hoje';
    if (diferenca === 1) return 'Amanhã';
    return `Faltam ${diferenca} dias`;
  }
}
