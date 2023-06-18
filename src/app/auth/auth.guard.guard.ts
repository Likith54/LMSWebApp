import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router,private authService:AuthService){

  }
  canActivate(){
    const user = this.authService.userValue;
        if (user) {            
            return true;
        }        
        this.router.navigate(['login']);
        return false;
   
  }
  
}
