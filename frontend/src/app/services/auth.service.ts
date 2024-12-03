import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/auth";

  private _userActive: string = "";
  private _role: string = "";
  private _msg: string = "";
  private _token: string | null = null;
  
  public get userActive(): string {
    return this._userActive;
  }
  
  public get role(): string {
    return this._role;
  }
  
  public get msg(): string {
    return this._msg;
  }
  
  public get token(): string | null {
    return this._token;
  }

  public login(user: User) {
    this.http.post<{ msg: string; username: string; role: string; token: string }>(`${this.apiUrl}/login`, user).subscribe({
      next: (response) => {
        this._msg = response.msg;
        this._userActive = response.username;
        this._role = response.role;
        this._token = response.token;
        localStorage.setItem("auth-token", response.token);
        // localStorage.setItem("auth-token", response.token);
        // const token = localStorage.getItem("auth-token");
        // localStorage.removeItem("auth-token");
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public register(user: User) {
    this.http.post<{ msg: string }>(`${this.apiUrl}/register`, user).subscribe({
      next: (response) => {
        this._msg = response.msg;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public logout() {
    this._msg = "";
    this._userActive = "";
    this._role = "";
    this._token = null;
    localStorage.removeItem("auth-token");
  }
}
