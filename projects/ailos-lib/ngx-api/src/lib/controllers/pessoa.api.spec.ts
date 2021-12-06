import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FactoryProvider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PessoaAPI } from './pessoa.api';

export declare const WINDOW_PROVIDERS: FactoryProvider[];

describe('PessoaAPI', () => {
  let pessoaAPI: PessoaAPI;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PessoaAPI, WINDOW_PROVIDERS],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    pessoaAPI = TestBed.inject(PessoaAPI);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(pessoaAPI).toBeTruthy();
  });
});
