import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
    userName : string = "";
    password : string = "";
    message : string = "";

    constructor(private router : Router, private authService : AuthenticationServiceService, private loadService :LoaderService){}
  
    validateUser() {
      if (this.authService.validateUser(this.userName, this.password)) {
        this.loadService.setLoading();
        setTimeout(() =>{
          this.openApp();
          this.loadService.getLoading();
        } ,2000);
      } else {
        this.message = "Incorrect Username and Password"
      }
    }

    openApp() {
      this.router.navigate(['todo']);
    }
}
