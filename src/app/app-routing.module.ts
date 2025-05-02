import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { StatusLoanComponent } from './pages/status-loan/status-loan.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },        // eager
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  {
    path: 'status-loan',
    loadChildren: () => import('./pages/status-loan/status-loan.module')
      .then(m => m.StatusLoanModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-loans',
    loadChildren: () => import('./pages/admin-loans/admin-loans.module')
      .then(m => m.AdminLoansModule),
    canActivate: [AuthGuard]    // si prefieres, crea un AdminGuard que además verifique ROLE_ADMIN
  },
  // …
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
