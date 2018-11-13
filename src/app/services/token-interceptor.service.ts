import { Injectable , Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
//tokenInterceptor suppose to intercept http request
//HttpInterceptor allows us to take req 
export class TokenInterceptorService implements HttpInterceptor {
 
  constructor(private _injector:Injector) { }
  //built-in method
  //this implements HttpInterceptor
  //req contain whatever UrI v hit
  intercept(req,next){
    //we injected authSrv to set Header
     let authSrv = this._injector.get(AuthService);
     let tokenizedReq=req.clone({
       setHeaders:{
       'x-access-token':`${authSrv.getToken()}`
       }
     });
     //returing observable
     return next.handle(tokenizedReq);
  }
}
