import { Component, inject, Input } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-delete-book-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-book-modal.component.html',
  styleUrl: './delete-book-modal.component.css'
})
export class DeleteBookModalComponent {
  private booksService = inject(BooksService);
  
  @Input()
  public isbn: string = ""; 

  isModalActive: boolean = false;

  public onConfirmButton(): void {
    this.booksService.deleteBook(this.isbn);
    this.closeModal();
  }

  openModal(): void {
    this.isModalActive = true;
  }

  closeModal(): void {
    this.isModalActive = false;
  }
}
