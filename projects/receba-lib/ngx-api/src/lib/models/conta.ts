export declare type Instituicoes = "Bradesco" | "Banco do Brasil" | "Santander" | "Itaú";

export interface IConta {
  id: number;
  numero: string;
  agencia: string;
  instituicao: Instituicoes;
}

export interface IContaAPIModel {
  id: number;
  numero: string;
  agencia: string;
  instituicao: Instituicoes;
}

export class Conta implements IConta {
  constructor(rawData: IConta) {
    this.id = rawData.id;
    this.numero = rawData.numero;
    this.agencia = rawData.agencia;
    this.instituicao = rawData.instituicao;
  }

  id: number;
  numero: string;
  agencia: string;
  instituicao: Instituicoes;
}

export function ParseContaAPIToConta(conta: IContaAPIModel): IConta {
  return {
    id: conta.id,
    numero: conta.numero,
    agencia: conta.agencia,
    instituicao: conta.instituicao
  };
}
