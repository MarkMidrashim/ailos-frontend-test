import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { IPessoa } from '@receba-lib/ngx-api';

@Component({
  selector: 'ngx-people',
  templateUrl: './ngx-people.component.html',
  styleUrls: ['./ngx-people.component.scss']
})
export class NgxPeopleComponent implements OnInit, OnDestroy {

  @Input("pessoa") pessoa$!: Observable<IPessoa>;
  public pessoa!: IPessoa;
  loading: boolean = false;
  private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  /**
   * CONSTRUCTOR
   */
  constructor() { }

  ngOnInit(): void {
    this.pessoa$.pipe(
      takeUntil(this.destroy$),
      filter((pessoa: IPessoa) => pessoa !== undefined)
    ).subscribe((pessoa: IPessoa) => {
      this.pessoa = pessoa;
      this.loading = true
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
