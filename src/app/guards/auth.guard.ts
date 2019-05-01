import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  canActivate() {

    let session = JSON.parse(localStorage.getItem('google-session'));
    if (!session) {
      return this.router.navigate(['/login']);
    }

    return this.authService.getGoogleSessionCheck(session.token)
      .toPromise()
      .then((res: any) => {
        if (!res.status) {
          this.router.navigate(['/login']);
          return false;
        }

        this.userService.setUserSession({ googleAccount: res['googleAccount'], hasApiToken: res['hasApiToken'] });

        if (res.hasApiToken) {
          return true;
        } else {
          return this.router.navigate(['/setup-jira']);
          return false;
        }
        /* this.userService.setUserSession({ googleAccount: res['googleAccount'], hasApiToken: res['hasApiToken'] });
        debugger;
        return true; */
      });
  }
  /* 
      return this.authService.getGoogleSessionCheck(session.token).pipe(
        map((res: any) => {
          debugger;
          if (!res.status) {
            this.router.navigate(['/login']);
          }
  
          this.userService.setUserSession({ googleAccount: res['googleAccount'], hasApiToken: res['hasApiToken'] });
          debugger;
          return true;
        }
        )); */
}
