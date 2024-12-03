import { Component, inject } from '@angular/core';
import { LoansService } from '../../services/loans.service';
import { Loan } from '../../interfaces/loan.interface';
import { AuthService } from '../../services/auth.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-loans-table',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './loans-table.component.html',
  styleUrl: './loans-table.component.css'
})
export class LoansTableComponent {
  private loansService = inject(LoansService);
  private authService = inject(AuthService);

  public userActive = "";
  public role = "";

  constructor() {
    this.userActive = this.authService.userActive;
    this.role = this.authService.role;

    if (this.role === "admin") {
      this.loansService.fetchAllLoans();
    } else {
      this.loansService.fetchLoansByUser(this.userActive);
    }
  }

  public get loans(): Loan[] {
    return this.loansService.loans;
  }
}
