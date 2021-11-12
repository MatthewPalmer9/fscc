import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { EmployeeAllComponent } from './employees/employee-all/employee-all.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';
import { EmployeesComponent } from './employees/employees.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'employee', component: EmployeesComponent, pathMatch: 'full'},
  { path: 'employee/:id/view', component: EmployeeViewComponent, pathMatch: 'full'},
  { path: 'employee/:id/edit', component: EmployeeEditComponent, pathMatch: 'full'},
  { path: 'employee/create', component: EmployeeCreateComponent, pathMatch: 'full'},
  { path: '**', component: DefaultComponent, pathMatch: 'full'}
      // { path: ':id', component: EmployeeEditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
