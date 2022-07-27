import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({


  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public httpSer : HttpService, public myRouter : Router){

  }
  canActivate():boolean 
  {
      
    if (!this.httpSer.isLoggedIn()){
      localStorage.clear();
this.myRouter.navigateByUrl("");
    }
    return this.httpSer.isLoggedIn();
  }
  
}
