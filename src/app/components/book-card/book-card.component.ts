import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Output()
  public deleteCard : EventEmitter<string> = new EventEmitter();

  @Output()
  public editCard: EventEmitter<Book> = new EventEmitter();

  @Input()
  public book: Book = {
    isbn: "",
    title: "",
    author: "",
    year: 0,
    gender: "",
    publisher: "",
    cover: ""
  }

  public onDeleteCard(): void {
    this.deleteCard.emit(this.book.isbn);
  }

  public onEditCard(): void {
    this.editCard.emit(this.book);
  }
}
