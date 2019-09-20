import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

import { ResellerService } from '../services/reseller.service';
import { AdminserviceService} from '.././Service/adminservice.service';


@Component({
  selector: 'app-managereseller',
  templateUrl: './managereseller.component.html',
  styleUrls: ['./managereseller.component.css']
})
export class ManageresellerComponent implements OnInit {

  constructor(private routers:Router,private resellerser: AdminserviceService) { }

  ngOnInit() {

    this.getReseller();

  }
   addreseller(){
  	this.routers.navigate(['/admindashboard/addresellers']);

  }

public resellerdata;
  getReseller(){
        this.resellerser.getResellerDetails().subscribe(data=>{
        console.log("getting reseller data",data);
        this.resellerdata=data;
        this.routers.navigate(['admindashboard/homereseller']);
        });

  }

}
@Component({
  selector: 'app-addereseller',
  templateUrl: './addreseller.html',
  styleUrls: ['./managereseller.component.css']
})
export class AddresellerComponent implements OnInit {

addResellerForm: FormGroup;
submitted = false;


  constructor(private formBuilder: FormBuilder, private routers:Router, private resellerser: AdminserviceService ) { }

  ngOnInit() {

this.addResellerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName :['',Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            mobilenumber: ['', Validators.required, Validators.maxLength(10), Validators.minLength(10)],
            companyName: ['',Validators.required],
            companyAddress: ['',Validators.required],
});

  }
 get f() { return this.addResellerForm.controls; }


keyPress1(event: any) {
  const pattern = /[a-z\+\A-Z ]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

    keyPress(event: any) {
  const pattern = /[0-9\+\-\ ]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}


public values;
addResellers(data)
{
  this.submitted = true;
  if(this.addResellerForm.invalid){
    return
  }
  console.log('resellers data in ts',this.addResellerForm.value);


   this.values=this.addResellerForm.value;
   this.resellerser.resellerData(this.values).subscribe(data=>{
     console.log("backend Reseller data",data)
   this.routers.navigate(['/admindashboard/homeresellers']);
    })


}


}