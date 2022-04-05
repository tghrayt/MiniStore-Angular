import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';





@Injectable({
    providedIn: 'root'
  })
  export class AdminGuard implements CanActivate {
  
  constructor (private router : Router) {} 
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):  boolean  {

        if (localStorage.getItem('token') != null) {

        return true;
        }
        else
        {
        this.router.navigate(['login']);
            return false;
        }
    }   
}