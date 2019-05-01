import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(/*  private socialAuthService: AuthService, */ private router: Router, private userService: UserService) {
    if (userService.hasSession()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {

  }

  googleLogin() {
/*     this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem("google-session", JSON.stringify(data));
      this.router.navigate(['/']);
    }) */
  }
}
