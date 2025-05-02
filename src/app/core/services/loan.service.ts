// src/app/services/loan.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoanRequestDto } from '../../shared/Dtos/loan-request.dto';
import { LoanResponseDto } from '../../shared/Dtos/loan-response.dto';
import { LoanStatus } from 'src/app/shared/Dtos/loan-status.enum';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  // Asegúrate de que coincide con el puerto y ruta de tu API
  private readonly apiUrl = 'http://localhost:8081/api/loans';

  constructor(private readonly http: HttpClient) { }

  /**
   * Envía la petición de solicitud de préstamo al back.
   */
  requestLoan(dto: LoanRequestDto): Observable<LoanResponseDto> {
    return this.http.post<LoanResponseDto>(this.apiUrl, dto);
  }

  /**
   * Obtiene todos los préstamos del usuario dado.
   */
  getLoansByUser(userId: number): Observable<LoanResponseDto[]> {
    return this.http.get<LoanResponseDto[]>(`${this.apiUrl}?userId=${userId}`);
  }

  /**
   * Cambia el estado de un préstamo (solo ADMIN).
   */
  changeStatus(loanId: number, status: LoanStatus): Observable<LoanResponseDto> {
    return this.http.put<LoanResponseDto>(
      `${this.apiUrl}/${loanId}/status?status=${status}`, {}
    );
  }

  getAllLoans(): Observable<LoanResponseDto[]> {
    return this.http.get<LoanResponseDto[]>(this.apiUrl);
  }
  
}
