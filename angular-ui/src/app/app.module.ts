import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeAllComponent } from './employees/employee-all/employee-all.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLoggedinComponent } from './navbar-loggedin/navbar-loggedin.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeCreateComponent,
    EmployeeAllComponent,
    EmployeeEditComponent,
    EmployeeViewComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    NavbarLoggedinComponent,
    IndexComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
