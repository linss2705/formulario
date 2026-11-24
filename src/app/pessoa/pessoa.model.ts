export interface Pessoa {
  id: number;
  nome: string;
  curso: string;
  email: string;
  telefone?: string;
  vinculo?: string;
  ativo?: boolean;
  formaPagamento?: FormaPagamento;
}

import type { FormaPagamento } from '../pipes/forma-pagamento-pipe';
