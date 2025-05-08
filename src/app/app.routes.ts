import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminComponent } from './layout/auth-admin/auth-admin.component';
import { HomeComponent } from './views/user/home/home/home.component';
import { LoginuserComponent } from './views/user/loginuser/loginuser/loginuser.component';
import { SignupuserComponent } from './views/user/signupuser/signupuser/signupuser.component';
import { ChatbotComponent } from './views/user/chatbot/chatbot/chatbot.component';
import { SetprofilComponent } from './views/user/setprofil/setprofil/setprofil.component';



export const routes: Routes = [
     { path: '', redirectTo: 'login', pathMatch: 'full' },
    // {path:'user',component:UserLayoutComponent,children:[
    //     {path:'home',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    //     {path:'login',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    //     {path:'signup',loadChildren:()=>import('./views/user/signupuser/signupuser.module').then(m=>m.SignupuserModule)}
        
    // ]},
     { path:'admin/login',component:AuthAdminComponent},
     { path:'admin/dashbord',component:AdminLayoutComponent},
     { path:'home',component:HomeComponent},
     { path:'login',component:LoginuserComponent},
     { path:'signup',component:SignupuserComponent},
     { path:'chatbot',component:ChatbotComponent},
     { path:'setprofil',component:SetprofilComponent},
    
    
    
];


