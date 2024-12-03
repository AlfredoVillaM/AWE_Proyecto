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
  private _book: Book = {
    isbn: "",
    title: "",
    author: "",
    year: 0,
    genre: "",
    publisher: "",
    synopsis: "",
    cover: ""
  }

  public get books(): Book[] {
    return this._books;
  }
  
  public get book(): Book {
    return this._book;
  }

  public fetchBooks() {
    this.http.get<Book[]>(this.apiUrl).subscribe({
      next: (response) => {
        this._books = response;
        this._books.reverse();
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  // public getBookByIsbn(isbn: string) {
  //   this.http.get<Book>(`${this.apiUrl}/${isbn}`).subscribe({
  //     next: (response) => {
  //        this._book = response;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }

  public getBookByIsbn(isbn: string) {
    const book = this._books.find((book) => book.isbn === isbn);
    if (book) {
      this._book = book;
    }
  }

  // {
  //   headers: {
  //       "Authorization": "Poner en peticiones que requieran validacion de JWT"
  //   }
  // }

  public createNewBook(book: Book) {
    const token = localStorage.getItem("auth-token");

    if (token) {
      this.http.post<Book>(this.apiUrl, book, {
        headers: {
          "Authorization": token
        }
      }).subscribe({
        next: (response) => {
          this._books.unshift(book);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  public updateBook(isbn: string, book: Book) {
    const token = localStorage.getItem("auth-token");

    if (token) {
      this.http.put(`${this.apiUrl}/${isbn}`, book, {
        headers: {
          "Authorization": token
        }
      }).subscribe({
        next: (response) => {
  
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  public deleteBook(isbn: string) {
    const token = localStorage.getItem("auth-token");

    if (token) {
      this.http.delete(`${this.apiUrl}/${isbn}`, {
        headers: {
          "Authorization": token
        }
      }).subscribe({
        next: (response) => {
          this._books = this.books.filter((book) => book.isbn !== isbn);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
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
