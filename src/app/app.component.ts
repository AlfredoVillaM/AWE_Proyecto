import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { BookCardComponent } from "./components/book-card/book-card.component";
import { InsertBookFormComponent } from "./components/insert-book-form/insert-book-form.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoansTableComponent } from "./components/loans-table/loans-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SearchBarComponent, BookCardComponent, InsertBookFormComponent, RegisterFormComponent, LoginFormComponent, LoansTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
}
