import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../core/services/loan.service';
import { AuthService } from '../../core/services/auth.service';
import { LoanResponseDto } from '../../shared/Dtos/index';

@Component({
  selector: 'app-status-loan',
  templateUrl: './status-loan.component.html',
  styleUrls: ['./status-loan.component.css']
})
export class StatusLoanComponent implements OnInit {
  loans: LoanResponseDto[] = [];
  loading = true;
  errorMsg: string | null = null;

  constructor(
    private loanService: LoanService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.auth.userId;
    if (!userId) {
      this.errorMsg = 'Debes iniciar sesión para ver tus préstamos.';
      this.loading = false;
      return;
    }

    this.loanService.getLoansByUser(userId).subscribe({
      next: (res) => {
        this.loans = res;
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = err.error?.message || 'Error al cargar préstamos';
        this.loading = false;
      }
    });
  }
}

