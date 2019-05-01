import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getGoogleSessionCheck(token: string) {
    return this.http.post('http://localhost:3001/api/auth', {google_token: token});
  }
  
}
