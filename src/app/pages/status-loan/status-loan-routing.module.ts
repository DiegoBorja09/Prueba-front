import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusLoanComponent } from './status-loan.component';

const routes: Routes = [{ path: '', component: StatusLoanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusLoanRoutingModule { }
