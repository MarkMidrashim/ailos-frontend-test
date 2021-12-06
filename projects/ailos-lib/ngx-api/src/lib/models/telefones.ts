export interface ITelefones {
  id: number;
  fixo: string;
  celular: string;
}

export interface ITelefonesAPIModel {
  id: number;
  fixo: string;
  celular: string;
}

export class Telefones implements ITelefones {
  constructor(rawData: ITelefones) {
    this.id = rawData.id;
    this.fixo = rawData.fixo;
    this.celular = rawData.celular;
  }

  id: number;
  fixo: string;
  celular: string;
}

export function ParseTelefonesAPIToTelefones(telefones: ITelefonesAPIModel): ITelefones {
  return {
    id: telefones.id,
    fixo: telefones.fixo,
    celular: telefones.celular
  };
}
