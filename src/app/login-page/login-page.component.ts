import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
    userName : string = "";
    password : string = "";
    message : string = "";
    typeStatus : boolean = true;

    constructor(private router : Router, private authService : AuthenticationServiceService){}
  
    validateUser() {
      if (this.authService.validateUser(this.userName, this.password)) {
          this.openApp();
      } else {
        this.message = "Incorrect Username and Password"
      }
    }

    openApp() {
      this.router.navigate(['todo']);
    }

    showPassword() {
      if(this.typeStatus) {
        this.typeStatus = false;
      } else {
        this.typeStatus = true;
      }
    }
}
