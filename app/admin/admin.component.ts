import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.html',
  styleUrls: ['./admin.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(public service:LoginService,private router:Router) { }

  ngOnInit() {
  }

  logout(data): void {
      console.log("in component dataaa");
      this.service.changeCurrentUser('0');    
      this.service.logout(data).subscribe(
        backendres =>{
          console.log("response from backend",backendres);
          localStorage.removeItem('token');
          localStorage.removeItem('currentUser');
           this.router.navigate(['login'])
        },
        error => console.log("errrroooooorrr",error)
      )
      
     
      
    }



}
