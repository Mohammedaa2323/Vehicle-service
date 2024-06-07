import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsAddComponent } from './customer-details-add/customer-details-add.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerDetaileListComponent } from './customer-detaile-list/customer-detaile-list.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkSummeryComponent } from './work-summery/work-summery.component';
import { WorkCreateComponent } from './work-create/work-create.component';
import { WorkListComponent } from './work-list/work-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailsAddComponent,
    CustomerDetaileListComponent,
    LoginComponent,
    NavbarComponent,
    WorkSummeryComponent,
    WorkCreateComponent,
    WorkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
