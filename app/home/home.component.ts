import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './aboutus.html',
  styleUrls: ['./home.component.css']
})
export class AboutUs implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './contactus.html',
  styleUrls: ['./home.component.css']
})
export class ContactUs implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './privacypolicy.html',
  styleUrls: ['./home.component.css']
})
export class PrivacyPolicy implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './termscondition.html',
  styleUrls: ['./home.component.css']
})
export class TermsCondition implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}