import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryRoutingModule } from './query-routing.module';
import { QueryComponent } from './query.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

const maskConfig: Partial<IConfig> = {
  validation: true
};

@NgModule({
  declarations: [QueryComponent],
  imports: [
    CommonModule,
    QueryRoutingModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    NgxMaskModule.forRoot(maskConfig)
  ]
})
export class QueryModule { }
