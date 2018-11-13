import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
//activated routes , route data using URLs
export class RoutingGuard implements CanActivate {
  //injecting dependency
  constructor(private _auth:AuthService,private router:Router){}
  //abstract method of CanActivate Interface
  //canActivate method of CanActivate returns true or false...
  //if user is logged in user it returns true or else false....
  //true means activated 
  //false means non-activated
  
  canActivate():boolean{
    if(this._auth.logedIn()){
    return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
}
}


