import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesComponent } from './employees/employees.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewProductsComponent,
    NavbarComponent,
    EmployeesComponent,
    SuppliersComponent,
    AddProductComponent,
    AddEmployeeComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
