import { LoanStatus } from './loan-status.enum';

export interface LoanResponseDto {
  id: number;
  amount: number;
  termMonths: number;
  status: LoanStatus;
  userId: number;
}
