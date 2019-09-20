import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { Observable,of, Subject, Observer, BehaviorSubject } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
	public roledata;

  constructor(public http:HttpClient) { 
   var s=localStorage.getItem('currentUser');
  console.log(s);

 //  if(s != '0' && s!=null){
 //    this.changeCurrentUser(JSON.parse(s));
 //  }else{
 //    this.changeCurrentUser(0);
 //  }
  }


   private BASE_URL:string  =  'http://127.0.0.1:8000';


    login(value):Observable<any>{
  	console.log("Data in Service",value);
  	let url:string=`${this.BASE_URL}/login/`;
  	return this.http.post(url,value);
  }

  getToken(){
    return localStorage.getItem('token');
  }



   private  _current_user = new BehaviorSubject<any>('0');
  current_user = this._current_user.asObservable();
  changeCurrentUser(data){
    console.log(data);
    if(data == 0 || data == null){
      localStorage.setItem('currentUser','0');
    }else{
      localStorage.setItem('currentUser',JSON.stringify(data)  );
    }
    this._current_user.next(data);
  }

  logout(data):Observable <any>{
    console.log('hiiiiiiiiiiiiiiiiiii');
    let tokens:any;
    tokens = localStorage.getItem('token');

     let getHeaders: HttpHeaders = new HttpHeaders({'HTTP_AUTHORIZATION':tokens});
     console.log('%%%%%%%%%%%%%%5',getHeaders.get('HTTP_AUTHORIZATION'))
    let url:string = `${this.BASE_URL}/logout/`;
       return this.http.post(url,{header:getHeaders.get('HTTP_AUTHORIZATION')});

}

}


