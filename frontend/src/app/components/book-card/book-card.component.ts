import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

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
}
