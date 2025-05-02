// src/app/pages/dashboard/dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';
import { LoanService } from '../../core/services/loan.service';
import { LoanRequestDto, LoanResponseDto } from '../../shared/Dtos/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loanForm!: FormGroup;
  errorMsg: string | null = null;
  successMsg: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      termMonths: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    this.errorMsg = this.successMsg = null;

    if (this.loanForm.invalid) {
      this.errorMsg = 'Por favor completa los campos correctamente.';
      return;
    }

    const userId = this.auth.userId;
    if (userId === null) {
      this.errorMsg = 'Sesión inválida. Inicia sesión de nuevo.';
      return;
    }

    const dto: LoanRequestDto = {
      ...this.loanForm.value,
      userId
    };

    this.loanService.requestLoan(dto).subscribe({
      next: (res: LoanResponseDto) => {
        this.successMsg = `Préstamo #${res.id} solicitado con éxito.`;
        this.loanForm.reset();
      },
      error: (err: any) => {
        this.errorMsg = err.error?.message || 'Error al solicitar el préstamo';
      }
    });
  }
}
