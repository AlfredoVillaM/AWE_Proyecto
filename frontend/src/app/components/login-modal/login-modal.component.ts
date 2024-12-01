import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
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
