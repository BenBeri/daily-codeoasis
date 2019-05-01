import { Injectable } from '@angular/core';
import { UserSessionData } from '../interfaces/UserSessionData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private sessionData: UserSessionData = undefined;

  constructor(private http: HttpClient) { }

  setUserSession(session: UserSessionData) {
    this.sessionData = session;
  }

  hasApiToken(): boolean {
    if (!this.sessionData) {
      return false;
    }
    return this.sessionData.hasApiToken === true;
  }

  getUsername() {
    return this.sessionData.googleAccount.email;
  }

  async setAPIToken(token: string) {
    const response = await this.http.post('http://localhost:3001/api/jira/set-token', {token: token}).toPromise();
    return response['status'] === true;
  }

  hasSession() {
    console.log(this.sessionData);
    return this.sessionData != undefined;
  }
}
