import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestLoanRoutingModule } from './request-loan-routing.module';
import { RequestLoanComponent } from './request-loan.component';


@NgModule({
  declarations: [
    RequestLoanComponent
  ],
  imports: [
    CommonModule,
    RequestLoanRoutingModule
  ]
})
export class RequestLoanModule { }
