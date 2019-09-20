import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class ContractorserviceService {
 comp1Val: string;
  _comp1ValueBS = new BehaviorSubject<string>('');

  constructor(public http:HttpClient) { 
     this.comp1Val;
     this._comp1ValueBS.next(this.comp1Val);


  }

  private BASE_URL:string  =  'http://127.0.0.1:8000';

  addparkinglot(value):Observable<any>{
  	console.log("Data in Service",value);
  	let url:string=`${this.BASE_URL}/addparkingdata/`;
  	return this.http.post(url,value);
  }


  getparkingdetails():Observable<any>{
  	console.log("Data in Service");
  	let url:string=`${this.BASE_URL}/getparkingdetails/`;
  	return this.http.get(url);
  }

dataservice(security){
 this.comp1Val = security;
    this._comp1ValueBS.next(this.comp1Val);
    }
    // getdata(): Observable<any> {
    //   console.log("securityyyyyyyyyyyydataaaaaaaaa");
    //     return this.subject.asObservable();
    // }
  // deleteparkingdetails(value):Observable<any>{
  //     console.log("Data in Service",value);
  //   let url:string=`${this.BASE_URL}/deleteparkingdetails/`;
  //   return this.http.post(url,value);

  // }
  editdetails(value):Observable<any>{
    console.log("Data in Service",value);
    let url:string=`${this.BASE_URL}/editdetails/`;
    return this.http.post(url,value);

  }

}


     // private BASE_URL = environment.base_url;
