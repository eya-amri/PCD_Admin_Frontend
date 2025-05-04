import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importation de FormsModule
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthAdminComponent } from './auth-admin/auth-admin.component'
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule , // Ajout de FormsModule dans les imports
    // Ajout correct des composants standalone dans imports
    AuthAdminComponent,
    AdminLayoutComponent,
    UserLayoutComponent
  ],


})
export class LayoutModule { }
