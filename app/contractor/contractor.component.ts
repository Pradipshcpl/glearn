import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators ,FormControl} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ContractorserviceService } from '../services/contractorservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hiiiiiiiiiiiiiii")
  }

}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./contractor.component.css']
})


export class LayoutComponent implements OnInit {
registerForm:FormBuilder;
 constructor(
private router: Router,){ }

  ngOnInit(
    ) {
  }

}



@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.html',
  styleUrls: ['./contractor.component.css']
})
export class CustomerlistComponent implements OnInit {
 constructor(private router: Router){ }

  ngOnInit(
    ) {
  }

}



@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.html',
  styleUrls: ['./contractor.component.css']
})
export class ViewpaymentComponent implements OnInit {
 
 constructor(private router: Router){ }

  ngOnInit(
    ) {
  }

}



@Component({
  selector: 'app-viewcredit',
  templateUrl: './viewcredit.html',
  styleUrls: ['./contractor.component.css']
})
export class ViewcreditComponent implements OnInit {

 constructor(private router: Router){ }

  ngOnInit(
    ) {
  }

}



@Component({
  selector: 'app-home',
  templateUrl: './contractorhome.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorHomeComponent implements OnInit {
registerForm:FormBuilder;
public parkingLots;
public deletedata
 constructor(private formBuilder: FormBuilder,
private router: Router,public service:ContractorserviceService,public dialog: MatDialog){ }

  ngOnInit() {
     this.service.getparkingdetails().subscribe(data=>{
     this.parkingLots=data;
     console.log("parkinglotsssss is parkinglotssssssss",this.parkingLots);
    })
    // this.router.navigate(["/addparkingloat"]);
  }
  //   securityid1(data){
  //   this.deletedata={
  //     parkingid:data
  //   }
  //   this.service.deleteparkingdetails( this.deletedata).subscribe(data=>{
  //     console.log("deletedataaaaaaaaaaaaaaaaaaa",data);

  //   })
   
  // } 

  btnClick(){
    this.router.navigate(['/contractor/addparking']);
  }

  editlotDetails(security) {
     // const dialogConfig = new MatDialogConfig();

     this.service.dataservice(security);

    console.log("editdata1111111111111111111111111",security);
    const dialogRef = this.dialog.open(popup, {
      height: '243px',
        width: '465px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     addEventListener
    });
  }

}


@Component({
  selector: 'app-addparkingloat',
  templateUrl: './addparkingloat.html',
  styleUrls: ['./contractor.component.css']
})
export class AddparkingComponent implements OnInit {
registerForm:FormBuilder;
public parkingLots;
public deletedata;
 constructor(private formBuilder: FormBuilder,
private router: Router, private service:ContractorserviceService,public dialog: MatDialog){ }

  ngOnInit(){
   
  }
   public data;
  contactForm=new FormGroup({
   

      parkinglotname: new FormControl('',Validators.required),
      parkinglotaddress: new FormControl('',Validators.required),

  })

  

 onSubmit(){
   console.log("parkingvalueeeeeeeeeeee is parkingvalueeeeee",this.contactForm.value)
    this.data = this.contactForm.value;
   this.service.addparkinglot(this.data).subscribe(data=>{

     console.log("parkingdata is parkingdata",data)

   })

   

 }



}




@Component({
  selector: 'app-set-amount',
  templateUrl: './set-amount.html',
  styleUrls: ['./contractor.component.css']
})
export class SetamountComponent implements OnInit {
registerForm:FormBuilder;
public parking;
 constructor(private formBuilder: FormBuilder,
private router: Router,public service:ContractorserviceService){


 }

  ngOnInit() {
     this.service.getparkingdetails().subscribe(data=>{
     this.parking=data;
     console.log("parkinglotsssss is parkinglotssssssss",this.parking);
    })

  }

}



@Component({
  selector: 'app-addlot',
  templateUrl: './addlot.html',
  styleUrls: ['./contractor.component.css']
})
export class AddlotComponent implements OnInit {
registerForm:FormBuilder;

 constructor(private formBuilder: FormBuilder,
private router: Router, private service:ContractorserviceService){ }

  ngOnInit() {}

 

}


@Component({
  selector: 'app-popup',
  templateUrl: './popup.html',
  styleUrls: ['./contractor.component.css']
})
export class popup{
registerForm:FormBuilder;
 subscription: Subscription;
 public comp1Val;
 public security:any;
 public status3:boolean=true;
 constructor(

    public successpopupRef: MatDialogRef<popup>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,private router: Router,public service:ContractorserviceService,public dialogRef:MatDialogRef<popup>) {

    // this.subscription = this.service.getdata().subscribe(message => { 
    //        console.log("subscriptiondataaaaaaaaaaaaaaaaaaa",message)
    //        this.security = message; 
           
    //      });
 }


  closepopup(){

    this.successpopupRef.close();
  }


  ngOnInit()
     {
        this.comp1Val = this.service.comp1Val;
        console.log("comp111111111111111111111111111111", this.comp1Val)

  }
 onNoClick(): void {
    this.dialogRef.close();
  }
  savememberdetails(comp1Val){
    this.service.editdetails(comp1Val).subscribe(data=>{
      console.log("data1233333333333 is dataaaaaaaaaaaa",data)
    })

  }

}

@Component({
  selector: 'app-setprice',
  templateUrl: './setprice.html',
  styleUrls: ['./contractor.component.css']
})
export class SetPriceComponent implements OnInit {
registerForm:FormBuilder;

 constructor(private formBuilder: FormBuilder,
private router: Router, private service:ContractorserviceService){ }

  ngOnInit() {}

  setamount(){
    this.router.navigate(['/contractor/setprice'])
  }

 

}

