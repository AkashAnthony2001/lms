import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomepageComponent } from './usercontrols/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AdminpageComponent } from './admincontrols/adminpage/adminpage.component';
import { AddbooksComponent } from './admincontrols/addbooks/addbooks.component';
import { ModifybooksComponent } from './admincontrols/modifybooks/modifybooks.component';
import { DeletebooksComponent } from './admincontrols/deletebooks/deletebooks.component';
import { AdminnavComponent } from './admincontrols/adminnav/adminnav.component';
import { AllbooksComponent } from './usercontrols/allbooks/allbooks.component';
import { IssuedbooksComponent } from './usercontrols/issuedbooks/issuedbooks.component';
import { UsernavComponent } from './usercontrols/usernav/usernav.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    HomepageComponent,
    AdminpageComponent,
    AddbooksComponent,
    ModifybooksComponent,
    DeletebooksComponent,
    AdminnavComponent,
    AllbooksComponent,
    IssuedbooksComponent,
    UsernavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
