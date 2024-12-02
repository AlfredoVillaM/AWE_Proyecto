import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-book-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book-modal.component.html',
  styleUrl: './update-book-modal.component.css'
})
export class UpdateBookModalComponent {
  isModalActive: boolean = false;

  @Output()
  public editElement : EventEmitter<Book> = new EventEmitter();

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

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const book: Book = {
        isbn: form.value.isbn,
        title: form.value.title,
        author: form.value.author,
        year: form.value.year,
        genre: form.value.genre,
        publisher: form.value.publisher,
        synopsis: form.value.synopsis,
        cover: form.value.cover
      }
  
      this.editElement.emit(book);
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
