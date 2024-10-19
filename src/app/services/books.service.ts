import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _books: Book[] = [
    {
      "isbn": 9786072413566,
      "title": "Donde habitan los ángeles",
      "author": "Claudia Celis",
      "year": 2015,
      "gender": "Novela",
      "publisher": "Ediciones SM",
      "cover": "angeles.jpg"
    },
  ];

  constructor() { }

  public get books(): Book[] {
    return this._books;
  }

  public deleteElement(name: string): void {
    this._books = this._books.filter(book => book.title != name);
  }

  public createElement(book: Book, selectedBook: Book | null): void {
    if (selectedBook) {
      const index = this._books.findIndex(book => book.title === selectedBook?.title);
      if (index !== -1) {
        this._books[index] = book;
      }
    } else {
      this._books.push(book);
    }
  }

}
