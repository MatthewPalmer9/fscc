import { Component, Input, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { api } from '../../../services/api';
import { EmployeeObj } from '../employee.model';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {

  public id!: number;
  employeeObject: EmployeeObj[] = [];
  public auth: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.authenticateMe()
    .then(await this.getEmployee(this.id))
    .then(resp => console.log(this.employeeObject))

    console.log("AFTER ASYNC", this.employeeObject)
  }

  getEmployee(id: number) {
    return api.employee_service.employeeById(id)
    .then(resp => this.employeeObject[0] = resp)
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

}
