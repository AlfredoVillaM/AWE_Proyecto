import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/auth";

  private _userActive: string | null = null;
  private _token: string | null = null;

  public login(user: User) {
    this.http.post<{ token: string; username: string }>(this.apiUrl, user).subscribe({
      next: (response) => {
        this._token = response.token;
        this._userActive = response.username;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public register(user: User) {
    this.http.post(this.apiUrl, user).subscribe({
      next: (response) => {

      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public logout() {
    this._userActive = null;
    this._token = null;
  }
}
