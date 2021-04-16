import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ViewProductsComponent } from './view-products/view-products.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'viewProducts',component:ViewProductsComponent},
  {path:'register',component:RegisterComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'suppliers',component:SuppliersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
