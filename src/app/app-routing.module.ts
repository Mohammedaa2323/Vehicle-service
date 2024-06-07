import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsAddComponent } from './customer-details-add/customer-details-add.component';
import { CustomerDetaileListComponent } from './customer-detaile-list/customer-detaile-list.component';
import { LoginComponent } from './login/login.component';
import { WorkSummeryComponent } from './work-summery/work-summery.component';

const routes: Routes = [

  {path:"worksummery/:id",component:WorkSummeryComponent},

  {path:"customer/add",component:CustomerDetailsAddComponent},

  {path:"customer/:id",component:CustomerDetaileListComponent},

  {path:"customers",component:CustomerListComponent},

  {path:"",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
