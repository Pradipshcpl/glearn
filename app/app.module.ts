import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl,Validators} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent,AdmindashboardComponent } from './admin/admin.component';
import { ResellerComponent,ResellerdashboardComponent,AddcontractorComponent } from './reseller/reseller.component';
import { ContractorComponent,LayoutComponent,ContractorHomeComponent,SetamountComponent,AddparkingComponent,AddlotComponent,popup,SetPriceComponent ,ViewpaymentComponent,ViewcreditComponent,CustomerlistComponent} from './contractor/contractor.component';



import { InterceptorService } from './services/interceptor.service';
import { RegistrationComponent } from './registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AlertModule } from '../../node_modules/ngx-bootstrap';
import { CarouselModule } from '../../node_modules/ngx-bootstrap/carousel';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContractorserviceService } from './services/contractorservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule , MatDialogModule,} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




import { LoginComponent } from './login/login.component';
import { HomeComponent,AboutUs,ContactUs,PrivacyPolicy,TermsCondition } from './home/home.component';
import { ManageresellerComponent,AddresellerComponent } from './managereseller/managereseller.component';

import {BehaviorSubject} from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ResellerComponent,ResellerdashboardComponent,AddcontractorComponent,
    ContractorComponent,
    RegistrationComponent,

    LayoutComponent,

    ContractorHomeComponent,

    SetamountComponent,
    CustomerlistComponent,
    AddparkingComponent,
    ViewcreditComponent,
    ViewpaymentComponent,
    AddlotComponent,
    popup,
    SetPriceComponent,
    LoginComponent,
    HomeComponent,AboutUs,ContactUs,PrivacyPolicy,TermsCondition,
    LayoutComponent,
    ManageresellerComponent,
    AddresellerComponent,
    AdmindashboardComponent,
    ViewpaymentComponent,
    ViewcreditComponent,
    CustomerlistComponent,

    
    ],
   
   
 entryComponents: [popup,
  

   ],


  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,

    ReactiveFormsModule,
    NgbModule.forRoot(),
    AlertModule.forRoot(),

   CarouselModule.forRoot(),
   HttpClientModule,

   BrowserAnimationsModule,
   

  ],
  providers: [ContractorserviceService,{
      

      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
