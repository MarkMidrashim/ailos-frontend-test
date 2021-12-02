import { HttpParams } from '@angular/common/http';
import { IPessoa } from '../../../../receba-lib/ngx-api/src/lib/models/pessoa';
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { PessoaAPI } from '@receba-lib/ngx-api';

@Injectable({
  providedIn: 'root'
})
export class QueryStore {

  private pessoa = new ReplaySubject<IPessoa>(1);
  readonly pessoa$ = this.pessoa.asObservable();

  /**
   * CONSTRUCTOR
   * @param pessoaAPI: PessoaAPI
   */
  constructor(
    private pessoaAPI: PessoaAPI
  ) {}

  /**
   * Método responsável por chamar o serviço de pessoa e informar o parâmetro de busca
   * @param searchTerm: string
   */
  search(searchTerm: string): void {
    let params = new HttpParams().set('cpf', searchTerm);
    this.pessoaAPI.find(params).subscribe((pessoa: IPessoa) => this.pessoa.next(pessoa));
    this.pessoa.complete();
  }
}
