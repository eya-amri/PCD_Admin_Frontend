import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupuserComponent } from './signupuser/signupuser.component';

const routes: Routes = [
  {path:'', component:SignupuserComponent}
];

@NgModule({
  exports: [RouterModule]
})
export class SignupuserRoutingModule { }
