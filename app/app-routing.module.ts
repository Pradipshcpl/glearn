import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorComponent,ContractorHomeComponent,AddparkingComponent,SetamountComponent,AddlotComponent,SetPriceComponent } from './contractor/contractor.component';

import { LayoutComponent,ViewpaymentComponent,ViewcreditComponent,CustomerlistComponent}from './contractor/contractor.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent,AdmindashboardComponent } from './admin/admin.component';
import { ManageresellerComponent,AddresellerComponent } from './managereseller/managereseller.component';
import { AdminserviceService} from '././Service/adminservice.service';
import { ResellerComponent,ResellerdashboardComponent,AddcontractorComponent } from './reseller/reseller.component';
import { HomeComponent,AboutUs,ContactUs,PrivacyPolicy,TermsCondition } from './home/home.component';


const routes: Routes = [
{
path:"contractor",


	component:ContractorComponent,
  children: [
      {
	path:"contractorhome",
	component:ContractorHomeComponent
    },
    {
	path:"addparking",
	component:AddparkingComponent
},
	{
	path:"setamount",
	component:SetamountComponent
},

{
	path:"addlot",
	component:AddlotComponent
},

{
	path:"setprice",
	component:SetPriceComponent
},

{
	path:"viewpayment",
	component:ViewpaymentComponent
},
	{
	path:"viewcredit",
	component:ViewcreditComponent
},
	{
	path:"customerlist",
	component:CustomerlistComponent
}
    ]
},
{
	path:"",
	component:HomeComponent},
	{
	path:"layout",
	component:LayoutComponent},
	
	{
	path: "aboutus",
	component: AboutUs
},
{
	path: "contactus",
	component: ContactUs
},
{
	path: "privacypolicy",
	component: PrivacyPolicy
},
{
	path: "termscondition",
	component: TermsCondition
},
{
	path: "login",
	component: LoginComponent
},
{
path:"contractor",
	component:ContractorComponent
},
// 	{
// 	path:"",
// 	component:AppComponent
// },


{
    path:"admindashboard",
	component:AdmindashboardComponent,
	children:[

	{
	path:"adminhome",
	component:AdminComponent,
},
{

    path:"homeresellers",
	component:ManageresellerComponent,
},
{
    path:"addresellers",
	component:AddresellerComponent,

}]},
    

{
    path:"resellerdash",
    component:ResellerdashboardComponent,
    	children:[
{
	path:"resellerhome",
	component:ResellerComponent,

},
{
	path:"addcontractor",
	component:AddcontractorComponent,
},

]},




// {
// 	path:"resellerhome",
// 	component:ResellerComponent,

// },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
