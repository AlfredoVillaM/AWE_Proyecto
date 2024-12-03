import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Loan } from '../../interfaces/loan.interface';
import { Book } from '../../interfaces/book.interface';
import { AuthService } from '../../services/auth.service';
import { LoansService } from '../../services/loans.service';

@Component({
  selector: 'app-loan-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-modal.component.html',
  styleUrl: './loan-modal.component.css'
})
export class LoanModalComponent {
  private authService = inject(AuthService);
  private loanService = inject(LoansService);

  @Input()
  public book: Book = {
    isbn: "",
    title: "",
    author: "",
    year: 0,
    genre: "",
    publisher: "",
    synopsis: "",
    cover: ""
  }

  isModalActive: boolean = false;
  public minStartDate: string = "";
  public maxStartDate: string = "";
  public minDueDate: string = "";
  public maxDueDate: string = "";

  constructor() {
    const today = new Date();
    this.minStartDate = today.toISOString().split('T')[0];

    const maxStartDateObj = new Date(today);
    maxStartDateObj.setMonth(today.getMonth() + 1);
    this.maxStartDate = maxStartDateObj.toISOString().split('T')[0];

    this.updateDueDates(today);
  }

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const newLoan: Loan = {
        username: this.authService.userActive,
        isbn: this.book.isbn,
        title: this.book.title,
        startDate: form.value.startDate,
        dueDate: form.value.dueDate
      }
  
      this.loanService.createNewLoan(newLoan);
      this.closeModal(form);
    }
  }

  openModal(): void {
    this.isModalActive = true;
  }

  closeModal(form: NgForm): void {
    form.resetForm();
    this.isModalActive = false;
  }

  onStartDateChange(event: Event): void {
    const startDate = (event.target as HTMLInputElement).value;
    const startDateObj = new Date(startDate);
    this.updateDueDates(startDateObj);
  }

  private updateDueDates(startDate: Date): void {
    const minDueDateObj = new Date(startDate);
    minDueDateObj.setDate(startDate.getDate() + 1);

    const maxDueDateObj = new Date(startDate);
    maxDueDateObj.setDate(startDate.getDate() + 14);

    this.minDueDate = minDueDateObj.toISOString().split('T')[0];
    this.maxDueDate = maxDueDateObj.toISOString().split('T')[0];
  }
}
