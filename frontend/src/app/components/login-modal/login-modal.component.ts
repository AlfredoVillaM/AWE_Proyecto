import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  private authService = inject(AuthService);

  isModalActive: boolean = false;
  show_error: boolean = false;

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const user: User = {
        username: form.value.username,
        password: form.value.password
      }

      this.authService.login(user);

      if (this.authService.msg === "Login OK") {
        this.closeModal(form);
      } else {
        this.show_error = true;
      }
    }
  }

  openModal(): void {
    this.isModalActive = true;
  }

  closeModal(form: NgForm): void {
    form.resetForm();
    this.show_error = false;
    this.isModalActive = false;
  }
}
