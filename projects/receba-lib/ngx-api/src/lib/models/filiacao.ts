export interface IFiliacao {
  id: number;
  mae: string;
  pai: string;
}

export interface IFiliacaoAPIModel {
  id: number;
  mae: string;
  pai: string;
}

export class Filiacao implements IFiliacao {
  constructor(rawData: IFiliacao) {
    this.id = rawData.id;
    this.mae = rawData.mae;
    this.pai = rawData.pai;
  }

  id: number;
  mae: string;
  pai: string;
}

export function ParseFiliacaoAPIToFiliacao(endereco: IFiliacaoAPIModel): IFiliacao {
  return {
    id: endereco.id,
    mae: endereco.mae,
    pai: endereco.pai
  };
}
