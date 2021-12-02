import { AfterViewInit, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validate } from 'gerador-validador-cpf';
import Swal from 'sweetalert2';
import { QueryStore } from './query.store';
import { IPessoa } from '@receba-lib/ngx-api';
import { count, map } from "rxjs/operators";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QueryComponent implements OnInit {

  public contentLoaded: boolean = false;
  cpfInputMask: string = '000.000.000-00';
  cpfPlaceholder: string = '___.___.___-__';
  form!: FormGroup;

  /**
   * CONSTRUCTOR
   * @param formBuilder: FormBuilder
   * @param store: QueryStore
   */
  constructor(
    private formBuilder: FormBuilder,
    private store: QueryStore
  ) { }

  ngOnInit() {
    setTimeout(() => { this.contentLoaded = true }, 2000);

    this.form = this.formBuilder.group({
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14),
        Validators.pattern('^\d{3}\.\d{3}\.\d{3}-\d{2}$')
      ])
    });
  }

  /**
   *
   */
  submit(): void {
    const cpf: string = this.form.get('cpf')?.value;
    if (validate(cpf)) {
      this.store.search(cpf);

      this.store.pessoa$.pipe(count()).subscribe(value => {
        console.log(value);
      });

      this.store.pessoa$.subscribe((pessoa: IPessoa) => {
        console.log(pessoa);
      });
    } else {
      Swal.fire(
        'CPF Inválido!',
        `O CPF informado está errado.`,
        'error'
      );
    }
  }

}
