import { Injectable, Injector } from "@angular/core";
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPessoa } from '../models/pessoa';
import { AbstractAPI } from "../domain/abstract-api";

@Injectable({
  providedIn: 'root'
})
export class PessoaAPI extends AbstractAPI<IPessoa> {

  protected url = 'http://localhost:3000/pessoas';

  constructor(injector: Injector) {
    super(injector);
  }

  find(params?: HttpParams): Observable<IPessoa> {
    return super.findGeneric<IPessoa>(params);
  }

  create(entity: IPessoa, params?: HttpParams): Observable<IPessoa> {
    return super.postGeneric(entity, params);
  }

  update(entity: IPessoa, params?: HttpParams): Observable<IPessoa> {
    return super.putGeneric(entity, params);
  }

  delete(params?: HttpParams): Observable<void> {
    return super.deleteGeneric(params);
  }

}
