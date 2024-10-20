import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _books: Book[] = [
    {
      "isbn": "9780060883287",
      "title": "Cien años de soledad",
      "author": "Gabriel García Márquez",
      "year": 1967,
      "gender": "Novela",
      "publisher": "Ediciones SM",
      "cover": "cien.jpg"
    },
    {
      "isbn": "9780061120084",
      "title": "Matar a un ruiseñor",
      "author": "Harper Lee",
      "year": 1960,
      "gender": "Novela",
      "publisher": "J.B. Lippincott & Co.",
      "cover": "matar.jpg"
    },
    {
      "isbn": "9780061122415",
      "title": "El alquimista",
      "author": "Paulo Coelho",
      "year": 1988,
      "gender": "Novela",
      "publisher": "HarperOne",
      "cover": "alquimista.jpg"
    },
    {
      "isbn": "9783140464079",
      "title": "El principito",
      "author": "Antoine de Saint-Exupéry",
      "year": 1943,
      "gender": "Novela",
      "publisher": "Emecé Editores",
      "cover": "principito.jpg"
    },
    {
      "isbn": "9786072413566",
      "title": "Donde habitan los ángeles",
      "author": "Claudia Celis",
      "year": 2015,
      "gender": "Novela",
      "publisher": "Harper & Row",
      "cover": "angeles.jpg"
    },
    {
      "isbn": "9788408249610",
      "title": "Te espero en el fin del mundo",
      "author": "Andrea Longarela",
      "year": 2021,
      "gender": "Novela",
      "publisher": "Crossbooks",
      "cover": "mundo.jpg"
    },
    {
      "isbn": "9788411000796",
      "title": "Los hombres de Putin",
      "author": "Catherine Belton",
      "year": 2022,
      "gender": "Política",
      "publisher": "Ediciones Península",
      "cover": "putin.jpg"
    },
    {
      "isbn": "9788415594055",
      "title": "Memorias de un amigo imaginario",
      "author": "Matthew Dicks",
      "year": 2012,
      "gender": "Novela",
      "publisher": "NUBE DE TINTA",
      "cover": "amigo.jpeg"
    },
    {
      "isbn": "9788415629191",
      "title": "El niño con el pijama de rayas",
      "author": "John Boyne",
      "year": 2012,
      "gender": "Novela",
      "publisher": "SALAMANDRA",
      "cover": "pijama.jpg"
    },
    {
      "isbn": "9788420430221",
      "title": "El maravilloso mago de Oz",
      "author": "L. Frank Baum",
      "year": 1900,
      "gender": "Cuentos",
      "publisher": "George M. Hill Company",
      "cover": "oz.JPG"
    },
    {
      "isbn": "9788441422186",
      "title": "La divina comedia",
      "author": "Dante Alighieri",
      "year": 2012,
      "gender": "Novela",
      "publisher": "EDAF",
      "cover": "comedia.jpg"
    },
    {
      "isbn": "9788466309608",
      "title": "Momo",
      "author": "Michael Ende",
      "year": 2003,
      "gender": "Novela",
      "publisher": "Suma de Letras",
      "cover": "momo.jpg"
    },
    {
      "isbn": "9788484328964",
      "title": "Hiperespacio",
      "author": "Michio Kaku",
      "year": 1984,
      "gender": "Ensayo",
      "publisher": "Oxford University Press",
      "cover": "hiper.jpg"
    },
    {
      "isbn": "9788498675399",
      "title": "Los juegos del hambre",
      "author": "Suzanne Collins",
      "year": 2009,
      "gender": "Novela",
      "publisher": "Molino",
      "cover": "hambre.jpg"
    },
    {
      "isbn": "9789978809235",
      "title": "El diario de Ana Frank",
      "author": "Anne Frank",
      "year": 2005,
      "gender": "Autobiografía",
      "publisher": "Libresa",
      "cover": "diario.jpg"
    },
  ];

  constructor() { }

  public get books(): Book[] {
    return this._books;
  }

  public deleteElement(isbn: string): void {
    this._books = this._books.filter(book => book.isbn != isbn);
  }

  public createElement(book: Book, selectedBook: Book | null): void {
    if (selectedBook) {
      const index = this._books.findIndex(book => book.isbn === selectedBook?.isbn);
      if (index !== -1) {
        this._books[index] = book;
      }
    } else {
      this._books.push(book);
    }
  }
}
