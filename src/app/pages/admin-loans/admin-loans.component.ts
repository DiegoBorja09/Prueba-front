import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../core/services/loan.service';
import { LoanResponseDto } from '../../shared/Dtos/index';

@Component({
  selector: 'app-admin-loans',
  templateUrl: './admin-loans.component.html',
  styleUrls: ['./admin-loans.component.css']
})
export class AdminLoansComponent implements OnInit {
  loans: LoanResponseDto[] = [];
  loading = true;
  errorMsg: string | null = null;

  constructor(private readonly loanService: LoanService) {}

  ngOnInit(): void {
    this.loanService.getAllLoans().subscribe({
      next: (res) => {
        this.loans = res;
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = err.error?.message ?? 'Error al cargar préstamos';
        this.loading = false;
      }
    });
  }

  approve(loan: LoanResponseDto): void {
    this.loanService.changeStatus(loan.id, 'APPROVED').subscribe({
      next: updated => loan.status = updated.status,
      error: () => this.errorMsg = 'No se pudo aprobar el préstamo'
    });
  }

  reject(loan: LoanResponseDto): void {
    this.loanService.changeStatus(loan.id, 'REJECTED').subscribe({
      next: updated => loan.status = updated.status,
      error: () => this.errorMsg = 'No se pudo rechazar el préstamo'
    });
  }
}

