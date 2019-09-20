import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResellerService {

  constructor(public http:HttpClient) { }

  private BASE_URL:string  =  'http://127.0.0.1:8000';



  addresell(value):Observable<any>{
  	console.log("resellllll12333333333",value)
  		let url:string=`${this.BASE_URL}/resellerdata/`;
  	    return this.http.post(url,value);

  }
}
