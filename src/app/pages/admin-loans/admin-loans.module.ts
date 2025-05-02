import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoansRoutingModule } from './admin-loans-routing.module';
import { AdminLoansComponent } from './admin-loans.component';


@NgModule({
  declarations: [
    AdminLoansComponent
  ],
  imports: [
    CommonModule,
    AdminLoansRoutingModule
  ]
})
export class AdminLoansModule { }
