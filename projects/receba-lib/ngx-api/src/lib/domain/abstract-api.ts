import { Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from './abstract-entity';

export abstract class AbstractAPI<T> {

  /**
   *
   * @protected
   * @abstract
   * @type {string}
   * @memberof AbstractAPI
   */
  protected abstract url: string;

  /**
   *
   * @protected
   * @type {HttpClient}
   * @memberof AbstractAPI
   */
  protected http: HttpClient;

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  /**
   * Método responsável por buscar entidade da api com objeto genérico
   * @param params?: HttpParams
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected findGeneric<U>(params?: HttpParams): Observable<U> {
    return this.http.get<U>(this.url, { params: params });
  }

  /**
   * Envia um post para api com objeto genérico
   * @param entity: Entity
   * @param params?: HttpParams
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected postGeneric<U>(entity: Entity, params?: HttpParams): Observable<U> {
    return this.http.post<U>(this.url, entity, { params: params });
  }

  /**
   * Envia um put para api com objeto genérico
   * @param entity: Entity
   * @param params?: HttpParams
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected putGeneric<U>(entity: Entity, params?: HttpParams): Observable<U> {
    return this.http.put<U>(this.url, entity, { params: params });
  }

  /**
   * Envia um patch para api com objeto genérico
   * @param entity: Entity
   * @param params?: HttpParams
   * @template U objeto abstrato de retorno
   * @returns
   */
  protected patchGeneric<U>(entity: Entity, params?: HttpParams): Observable<U> {
    return this.http.patch<U>(this.url, entity, { params: params });
  }

  /**
   * Envia um delete para api
   * @param params?: HttpParams
   * @returns
   */
  protected deleteGeneric(params?: HttpParams): Observable<void> {
    return this.http.delete<void>(this.url, { params: params });
  }

}
