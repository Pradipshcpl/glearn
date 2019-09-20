import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse} from  '@angular/common/http';
import { Observable,of, Subject, Observer, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

	 private BASE_URL:string  =  'http://127.0.0.1:8000';

  constructor(public  HttpClient:  HttpClient) { }


loginData(values):Observable<any>{
	console.log('login data in serviccceee',values);
	let url:string= `${this.BASE_URL}/login/`;
	return this.HttpClient.post(url,values);
}

 resellerData(data):Observable<any>{
    console.log('reseller data in servicesss',data);
    let url:string = `${this.BASE_URL}/resellerdata/`;
    return  this.HttpClient.post(url,data);

  }

  getResellerDetails():Observable<any>{
    let url:string = `${this.BASE_URL}/fetchingreseller/`;
    return this.HttpClient.get(url);
  }


}
