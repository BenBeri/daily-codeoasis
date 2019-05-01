import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class JiraGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.hasApiToken()) {
      return true;
    }
    return this.router.navigate(['/setup-jira']);
  }
}
