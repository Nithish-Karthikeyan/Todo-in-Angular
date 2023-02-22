import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
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
    return this.canActivate(childRoute, state);
  }
 }