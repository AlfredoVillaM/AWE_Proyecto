import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { LoansTableComponent } from './components/loans-table/loans-table.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "catalog", component: BooksComponent },
    { path: "catalog/:isbn", component: BookDetailsComponent },
    { path: "loans", component: LoansTableComponent },
    { path: "", redirectTo: "catalog", pathMatch: "full" },
];