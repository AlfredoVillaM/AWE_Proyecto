import { Component, inject} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';
import { UpdateBookModalComponent } from '../update-book-modal/update-book-modal.component';
import { LoanModalComponent } from '../loan-modal/loan-modal.component';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { DeleteBookModalComponent } from '../delete-book-modal/delete-book-modal.component';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf, RouterLink, UpdateBookModalComponent, DeleteBookModalComponent, LoanModalComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  private booksService = inject(BooksService);
  private authService = inject(AuthService);

  constructor(private route: ActivatedRoute,) {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    if (isbn) {
      this.booksService.getBookByIsbn(isbn);
    }
  }

  public editElement(book: Book): void {
    this.booksService.updateBook(book.isbn, book);
  }

  public get book(): Book {
    return this.booksService.book;
  }

  public get token(): string | null {
    return this.authService.token;
  }
  
  public get role(): string {
    return this.authService.role;
  }
}
