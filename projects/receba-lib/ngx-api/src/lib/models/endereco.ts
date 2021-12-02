export interface IEndereco {
  id: number;
  cep: string;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface IEnderecoAPIModel {
  id: number;
  cep: string;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
}

export class Endereco implements IEndereco {
  constructor(rawData: IEndereco) {
    this.id = rawData.id;
    this.cep = rawData.cep;
    this.logradouro = rawData.logradouro;
    this.numero = rawData.numero;
    this.bairro = rawData.bairro;
    this.cidade = rawData.cidade;
    this.estado = rawData.estado;
  }

  id: number;
  cep: string;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
}

export function ParseEnderecoAPIToEndereco(endereco: IEnderecoAPIModel): IEndereco {
  return {
    id: endereco.id,
    cep: endereco.cep,
    logradouro: endereco.logradouro,
    numero: endereco.numero,
    bairro: endereco.bairro,
    cidade: endereco.cidade,
    estado: endereco.estado
  };
}
