import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-insert-book-modal',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './insert-book-modal.component.html',
  styleUrl: './insert-book-modal.component.css'
})
export class InsertBookModalComponent {
  isModalActive: boolean = false;

  @Output()
  public createElement : EventEmitter<Book> = new EventEmitter();

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const newBook: Book = {
        isbn: form.value.isbn,
        title: form.value.title,
        author: form.value.author,
        year: form.value.year,
        genre: form.value.genre,
        publisher: form.value.publisher,
        synopsis: form.value.synopsis,
        cover: form.value.cover
      }
  
      this.createElement.emit(newBook);
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
