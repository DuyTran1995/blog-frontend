import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

export interface LoginForm {
  email: string;
  password: string;
}

export interface User {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {
    return this.http.post<any>('/api/v1/users/login', { email: loginForm.email, password: loginForm.password }).pipe(
      map((token) => {
        localStorage.setItem('blog-token', token.accessToken);
        return token;
      })
    )
  }

  register(user: User) {
    return this.http.post<any>('/api/v1/users', user).pipe(
      map(user => user)
    )
  }
}
