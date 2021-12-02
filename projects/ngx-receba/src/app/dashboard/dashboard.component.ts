import { Component, OnInit } from '@angular/core';
import { NgxBreadcrumbService } from '@receba-lib/ngx-component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _breadcrumbService: NgxBreadcrumbService
  ) { }

  ngOnInit(): void {
    this._breadcrumbService.add(
      'dashboard-breadcrumb',
      'Dashboard',
      '/dashboard',
      1
    );
  }

}
