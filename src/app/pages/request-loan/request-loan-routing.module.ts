import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestLoanComponent } from './request-loan.component';

const routes: Routes = [{ path: '', component: RequestLoanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestLoanRoutingModule { }
