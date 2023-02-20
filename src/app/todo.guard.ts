import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class TodoGuard implements CanActivate, CanActivateChild {
  
  constructor(private authService : AuthenticationServiceService, private router : Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : boolean {
      if(!this.authService.isUserLoggedIn()) {
        this.router.navigate(['login']);
        return false;
      }
    return this.authService.isUserLoggedIn();  
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.authService.isUserLoggedIn()) {
        this.router.navigate(['login']);
        return false;
      }
    return this.authService.isUserLoggedIn();
  }
 }