import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { User } from '../User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
    emailId : string = "";
    password : string = "";
    user !: User;
    message : string = "";
    typeStatus : boolean = true;

    constructor(private router : Router, private authService : AuthenticationServiceService){}
  
    validateUser() {
      this.user = {
        emailId : this.emailId,
        password : this.password 
      };
      if (this.authService.validateUser(this.user)) {
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
