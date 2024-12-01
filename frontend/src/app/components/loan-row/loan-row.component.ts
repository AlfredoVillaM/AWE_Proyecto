import { Component, Input } from '@angular/core';
import { Loan } from '../../interfaces/loan.interface';

@Component({
  selector: 'app-loan-row',
  standalone: true,
  imports: [],
  templateUrl: './loan-row.component.html',
  styleUrl: './loan-row.component.css'
})
export class LoanRowComponent {
  @Input()
  public loan: Loan = {
    username: "",
    isbn: "",
    title: "",
    startDate: new Date(),
    dueDate: new Date()
  }
}
