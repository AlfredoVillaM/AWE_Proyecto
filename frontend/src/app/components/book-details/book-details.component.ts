import { Component, inject} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';
import { UpdateBookModalComponent } from '../update-book-modal/update-book-modal.component';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, UpdateBookModalComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  private booksService = inject(BooksService);

  constructor(private route: ActivatedRoute,) {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    if (isbn) {
      this.booksService.getBookByIsbn(isbn);

    }
  }

  public onDeleteButton(): void {
    this.booksService.deleteBook(this.book!.isbn);
  }

  public editElement(book: Book): void {
    this.booksService.updateBook(book.isbn, book);
  }

  public get book(): Book | null {
    return this.booksService.book;
  }
}
