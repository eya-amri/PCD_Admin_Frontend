import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';

const routes: Routes = [
  {path:'',component:LoginuserComponent}

];

@NgModule({
 
  exports: [RouterModule]
})
export class LoginuserRoutingModule { }
