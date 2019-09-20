import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-reseller',
  templateUrl: './reseller.component.html',
  styleUrls: ['./reseller.component.css']
})
export class ResellerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



@Component({
  selector: 'app-resellerdashboard',
  templateUrl: './resellerdashboard.component.html',
  styleUrls: ['./reseller.component.css']
})
export class ResellerdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'app-addcontractor',
  templateUrl: './addcontractor.html',
  styleUrls: ['./reseller.component.css']
})
export class AddcontractorComponent implements OnInit {

addResellerForm: FormGroup;
submitted = false;
  constructor() { }

  ngOnInit() {
  }

}