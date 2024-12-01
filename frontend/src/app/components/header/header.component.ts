import { Component, inject } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InsertBookModalComponent } from '../insert-book-modal/insert-book-modal.component';
import { LoginModalComponent } from "../login-modal/login-modal.component";
import { SignupModalComponent } from '../signup-modal/signup-modal.component';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book.interface';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, SearchBarComponent, RouterLink, RouterLinkActive, InsertBookModalComponent, LoginModalComponent, SignupModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private booksService = inject(BooksService);
  private authService = inject(AuthService);

  public createElement(book: Book): void {
    this.booksService.createNewBook(book);
  }

  public get token(): string | null {
    return this.authService.token;
  }
  
  public get role(): string {
    return this.authService.role;
  }

  public onLogOut(): void {
    this.authService.logout();
  }
}
