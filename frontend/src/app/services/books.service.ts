import { inject, Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/books";

  private _books: Book[] = [];
  private _book: Book | null = null;

  public get books(): Book[] {
    return this._books;
  }
  
  public get book(): Book | null {
    return this._book;
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

  public getBookByIsbn(isbn: string) {
    this.http.get<Book>(`${this.apiUrl}/${isbn}`).subscribe({
      next: (response) => {
         this._book = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public createNewBook(book: Book) {
    this.http.post<Book>(this.apiUrl, book).subscribe({
      next: (response) => {
        // this._books.push(book);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public updateBook(isbn: string, book: Book) {
    this.http.put(`${this.apiUrl}/${isbn}`, book).subscribe({
      next: (response) => {
        
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public deleteBook(isbn: string) {
    this.http.delete(`${this.apiUrl}/${isbn}`).subscribe({
      next: (response) => {
        // this._books = this.books.filter((book) => book.isbn !== isbn);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // public getBookByISBN(isbn: string): Book | null {
  //   return this.books.find((book) => book.isbn === isbn) || null;
  // }

  // public createElement(book: Book): void {
  //   this._books.push(book);
  // }

  // public editElement(book: Book, isbn: string): void {
  //   const index = this._books.findIndex(b => b.isbn === isbn);
  //   if (index !== -1) {
  //     this._books[index] = book;
  //   }
  // }

  // public deleteElement(isbn: string): void {
  //   this._books = this._books.filter(book => book.isbn != isbn);
  // }
}
