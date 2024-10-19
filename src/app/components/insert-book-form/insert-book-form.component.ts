import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-insert-book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert-book-form.component.html',
  styleUrl: './insert-book-form.component.css'
})
export class InsertBookFormComponent {
  @Output()
  public createElement : EventEmitter<Book> = new EventEmitter();

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const newBook: Book = {
        isbn: form.value.isbn,
        title: form.value.title,
        author: form.value.author,
        year: form.value.year,
        gender: form.value.gender,
        publisher: form.value.publisher,
        cover: form.value.cover
      }
  
      this.createElement.emit(newBook);
      form.resetForm();
    }
  }
}
