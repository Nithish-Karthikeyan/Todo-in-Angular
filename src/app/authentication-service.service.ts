import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  isValidUser : boolean = false;

  constructor() {}

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