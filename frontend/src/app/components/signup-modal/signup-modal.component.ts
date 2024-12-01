import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-signup-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-modal.component.html',
  styleUrl: './signup-modal.component.css'
})
export class SignupModalComponent {
  private authService = inject(AuthService);

  isModalActive: boolean = false;

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const user: User = {
        username: form.value.username,
        password: form.value.password
      }

      this.authService.login(user);
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
