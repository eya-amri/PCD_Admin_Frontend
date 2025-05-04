import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginuserComponent } from './loginuser/loginuser/loginuser.component';
import { SignupuserComponent } from './signupuser/signupuser/signupuser.component';
import { HomeComponent } from './home/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SetprofilComponent } from './setprofil/setprofil/setprofil.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  
  imports: [
    CommonModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule ,
    LoginuserComponent,
    SignupuserComponent,
    HomeComponent,
    SetprofilComponent
    
  ]
  
})
export class UserModule { }