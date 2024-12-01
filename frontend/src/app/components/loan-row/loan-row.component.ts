import { Component, inject, Input } from '@angular/core';
import { Loan } from '../../interfaces/loan.interface';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loan-row',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loan-row.component.html',
  styleUrl: './loan-row.component.css'
})
export class LoanRowComponent {
  private authService = inject(AuthService);

  @Input()
  public loan: Loan = {
    username: "",
    isbn: "",
    title: "",
    startDate: new Date(),
    dueDate: new Date()
  }

  public get role(): string {
    return this.authService.role;
  }
}
