import { Injectable } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  isValidUser : boolean = false;
  userName !: string;

  constructor(private todoService: TodoServiceService) {}

  validateUser(user : User) {
    this.todoService.getUser(user).subscribe((existUser)=> {
      console.log(existUser);
      let existingUser = existUser as User;
      if(existingUser.emailId === user.emailId && existingUser.password === user.password) {
        sessionStorage.setItem("loggedInUser",JSON.stringify(existingUser));
        this.isValidUser = true;
      }
    });
    return this.isValidUser; 
  }

  isUserLoggedIn() { 
    if(sessionStorage.getItem("loggedInUser")){
      this.isValidUser = true;
    }
    return this.isValidUser;
  }
}