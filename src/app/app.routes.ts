import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { InsertBookFormComponent } from './components/insert-book-form/insert-book-form.component';
import { LoansTableComponent } from './components/loans-table/loans-table.component';
import { SignUpFormComponent } from './components/register-form/signup-form.component';

export const routes: Routes = [
    { path: "catalog", component: BooksComponent },
    { path: "catalog:id", component: BooksComponent },
    { path: "log-in", component: LoginFormComponent },
    { path: "sign-up", component: SignUpFormComponent },
    { path: "add-book", component: InsertBookFormComponent },
    { path: "loans", component: LoansTableComponent },
    { path: "", redirectTo: "catalog", pathMatch: "full" },
];
