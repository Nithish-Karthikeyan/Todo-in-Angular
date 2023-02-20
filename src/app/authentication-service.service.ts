import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  isValidUser : boolean = false;

  constructor(private router : Router) {}

  validateUser(userName : string, password : string) {
    if(userName === "user" && password === "1234") {
      this.isValidUser = true;
    }
    return this.isValidUser;
  }

  isUserLoggedIn() {
    return this.isValidUser;
  }
}
