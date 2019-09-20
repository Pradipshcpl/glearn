import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup,FormArray, Validators ,FormControl} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { AdminserviceService} from '.././Service/adminservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,public service:LoginService) { }




  ngOnInit() {



  }

  get f() { return this.loginForm.controls; }

    public roledata;
    private user: any;
    private token:any;
    public error_message:any ;
    // public recalll(data){
    //     this.service.changeCurrentUser(data);
    // }

  public data;

    loginForm=new FormGroup({
  	username: new FormControl('',Validators.required),
  	password:new FormControl('',Validators.required),

  })

  onSubmit(){
  	console.log("dataaaaaaaaaaaaaaaaaaaaaasssss is dataaaaaaaaaaaa",this.loginForm.value)
  	this.data=this.loginForm.value;
    this.service.login(this.data).subscribe(data=>{
      console.log("logindataaaaaaaaaaa is logindata",data)
        this.service.roledata=data;
       localStorage.setItem('role',data['role']);
      

    if(data.role== 'ADMIN'){
     localStorage.setItem('token',data['token']);
      this.router.navigate(['/admindashboard/adminhome']);
      
    }  
     else if(data.role== 'RESELLER'){
     localStorage.setItem('token',data['token']);
      this.router.navigate(['/']);
     
    }  
    else if(data.role== 'contractor'){
     localStorage.setItem('token',data['token']);
      this.router.navigate(['/']);
      
    }  

    else if(data.role== 'security'){
     localStorage.setItem('token',data['token']);
      this.router.navigate(['/']);
   
    }  

    })
  	

  }

}
