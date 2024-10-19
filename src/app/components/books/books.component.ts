import { Component, inject } from '@angular/core';
import { BookCardComponent } from "../book-card/book-card.component";
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  private booksService = inject(BooksService);

  selectedBook: Book | null = null;

  public deleteElement(title: string): void {
    this.booksService.deleteElement(title);
  }

  public editElement(book: Book): void {
    this.selectedBook = book;
  }

  public get books(): Book[] {
    return this.booksService.books;
  }
}
