import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './admincontrols/addbooks/addbooks.component';
import { AdminpageComponent } from './admincontrols/adminpage/adminpage.component';
import { HomepageComponent } from './usercontrols/homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AllbooksComponent } from './usercontrols/allbooks/allbooks.component';


const routes: Routes = [
  {path:"",component:UserComponent},
  {path:"login",component:UserComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"signup",component:SignupComponent},
  {path:"adminpage",component:AdminpageComponent},
  {path:"addbooks",component:AddbooksComponent},
  {path:"allbooks",component:AllbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
