import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { api } from '../../../services/api'
import { Router } from '@angular/router';
import validation from '../validation'

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;
  errors: any = {};
  auth: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.employeeForm = this.fb.group({
      id: fb.control(''),
      userId: fb.control(''),
      firstName: fb.control(''),
      lastName: fb.control(''),
      email: fb.control(''),
      address: fb.control(''),
      city: fb.control(''),
      state: fb.control(''),
      zip: fb.control(''),
      cellPhone: fb.control(''),
      homePhone: fb.control('')
    });
  }

  ngOnInit(): void {
    this.authenticateMe()
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

  confirm(): void {
    const err = validation(this.employeeForm.value);
    this.errors = err;

    if(Object.keys(err).length > 0) {
      return;
    } else {
      api.employee_service.createEmployee(this.employeeForm.value)
      .then(resp => console.log(resp))

      setTimeout(() => {
        this.router.navigate(['/employee/all'])
      }, 500);
    };
  }

}
