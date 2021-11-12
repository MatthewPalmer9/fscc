import { Component, OnInit } from '@angular/core';
import { EmployeeObj } from './employee.model';
import { Router } from '@angular/router';
import { api } from '../../services/api';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employeeArray!: EmployeeObj[];
  auth: boolean = false;

  constructor(private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.authenticateMe().then(
      await this.getEmployees()
    )
  }

  getEmployees() {
    return api.employee_service.employeeAll()
    .then(resp => this.employeeArray = resp)
  }

  async authenticateMe() {
    return await api.login_service.authcheck()
    .then(resp => {
        if(resp.status) {
          this.auth = true;
        }
    }).catch(err => {
      if(!this.auth) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
  }
};
