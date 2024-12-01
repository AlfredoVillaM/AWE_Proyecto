import { inject, Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/books";

  private _books: Book[] = [];

  public get books(): Book[] {
    return this._books;
  }

  public fetchBooks() {
    this.http.get<Book[]>(this.apiUrl).subscribe({
      next: (response) => {
        this._books = response;
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  public getBookByISBN(isbn: string): Book | null {
    return this.books.find((book) => book.isbn === isbn) || null;
  }

  public createElement(book: Book): void {
    this._books.push(book);
  }

  public editElement(book: Book, isbn: string): void {
    const index = this._books.findIndex(b => b.isbn === isbn);
    if (index !== -1) {
      this._books[index] = book;
    }
  }

  public deleteElement(isbn: string): void {
    this._books = this._books.filter(book => book.isbn != isbn);
  }
}
