import { Injectable,Injector } from '@angular/core';
import {HttpClient,HttpInterceptor} from '@angular/common/http'
import{ LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
  	let regservice=this.injector.get(LoginService);
  

  	let tokenizedReq=req.clone({
  		setHeaders:{
  			Authorization:`${regservice.getToken()}`
  		}
  	})
  	return next.handle(tokenizedReq)
  }
}
