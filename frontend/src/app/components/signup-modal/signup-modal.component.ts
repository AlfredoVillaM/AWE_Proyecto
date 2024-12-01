import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-modal.component.html',
  styleUrl: './signup-modal.component.css'
})
export class SignupModalComponent {
  isModalActive: boolean = false;

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      
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
}
