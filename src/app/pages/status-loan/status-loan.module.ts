import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusLoanRoutingModule } from './status-loan-routing.module';
import { StatusLoanComponent } from './status-loan.component';


@NgModule({
  declarations: [
    StatusLoanComponent
  ],
  imports: [
    CommonModule,
    StatusLoanRoutingModule
  ]
})
export class StatusLoanModule { }
