import { Component, inject } from '@angular/core';
import { BookCardComponent } from "../book-card/book-card.component";
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent, NgFor],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  private booksService = inject(BooksService);

  constructor() {
    this.booksService.fetchBooks();
  }

  public get books(): Book[] {
    return this.booksService.books;
  }
}
