import { Component, inject } from '@angular/core';
import { LoansService } from '../../services/loans.service';
import { Loan } from '../../interfaces/loan.interface';
import { LoanRowComponent } from '../loan-row/loan-row.component';

@Component({
  selector: 'app-loans-table',
  standalone: true,
  imports: [LoanRowComponent],
  templateUrl: './loans-table.component.html',
  styleUrl: './loans-table.component.css'
})
export class LoansTableComponent {
  private loansService = inject(LoansService);

  constructor() {
    this.loansService.fetchAllLoans();
    // this.loansService.fetchLoansByUser();
  }

  public get loans(): Loan[] {
    return this.loansService.loans;
  }
}
