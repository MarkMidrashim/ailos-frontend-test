import { IEndereco } from './endereco';
import { ITelefones } from './telefones';
import { IConta } from './conta';
import { IFiliacao } from './filiacao';

export interface IPessoa {
  id: number;
  nome: string;
  cpf: string;
  idade: number;
  data_nasc: Date;
  sexo: boolean;
  email: string;
  situacao: boolean;
  conta: IConta;
  filiacao: IFiliacao;
  endereco: IEndereco;
  telefones: ITelefones;
}

export class Pessoa implements IPessoa {
  id: number;
  nome: string;
  cpf: string;
  idade: number;
  data_nasc: Date;
  sexo: boolean;
  email: string;
  situacao: boolean;
  conta: IConta;
  filiacao: IFiliacao;
  endereco: IEndereco;
  telefones: ITelefones;

  constructor(rawData: IPessoa) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.cpf = rawData.cpf;
    this.idade = rawData.idade;
    this.data_nasc = rawData.data_nasc;
    this.sexo = rawData.sexo;
    this.email = rawData.email;
    this.situacao = rawData.situacao;
    this.conta = rawData.conta;
    this.filiacao = rawData.filiacao;
    this.endereco = rawData.endereco;
    this.telefones = rawData.telefones;
  }
}
