import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>('/api/v1/users/login', { email, password }).pipe(
      map((token) => {
        localStorage.setItem('blog-token', token.accessToken);
        return token;
      })
    )
  }
}
