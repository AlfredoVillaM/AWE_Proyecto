import { inject, Injectable } from '@angular/core';
import { Loan } from '../interfaces/loan.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/loans";

  private _loans: Loan[] = [];

  public get loans(): Loan[] {
    return this._loans;
  }

  public fetchAllLoans() {
    this.http.get<Loan[]>(this.apiUrl).subscribe({
      next: (response) => {
        this._loans = response;
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  public fetchLoansByUser(username: string) {
    this.http.get<Loan[]>(`${this.apiUrl}/${username}`).subscribe({
      next: (response) => {
        this._loans = response;
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  public createNewLoan(loan: Loan) {
    this.http.post<Loan>(this.apiUrl, loan).subscribe({
      next: (response) => {
        
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
