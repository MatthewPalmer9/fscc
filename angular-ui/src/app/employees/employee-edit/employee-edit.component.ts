import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { api } from 'src/services/api';
import { EmployeeObj } from '../employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm: FormGroup;

  public id!: number;
  employeeObject: EmployeeObj[] = [{
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cellPhone: '',
    homePhone: '',
    email: '',
    userId: ''
  }];
  public auth: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
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
  };

  async ngOnInit(): Promise<void> {
    // Set the param id
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    // Authenticate me & then fetch employee
    this.authenticateMe()
    .then(await this.getEmployee(this.id))
    .then(resp => console.log(this.employeeObject))
    console.log("AFTER ASYNC", this.employeeObject);

    // Set employee values in the form
    this.employeeForm.patchValue({
      id: this.employeeObject[0].id,
      userId: this.employeeObject[0].userId,
      firstName: this.employeeObject[0].firstName,
      lastName: this.employeeObject[0].lastName,
      email: this.employeeObject[0].email,
      address: this.employeeObject[0].address,
      city: this.employeeObject[0].city,
      zip: this.employeeObject[0].zip,
      state: this.employeeObject[0].state,
      cellPhone: this.employeeObject[0].cellPhone,
      homePhone: this.employeeObject[0].homePhone
    })

    console.log("EMP FORM", this.employeeForm.value)
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

  confirmChanges(): Promise<any> {
    return api.employee_service.updateEmployee(this.employeeForm.value)
          .then(resp => console.log(resp))
  }

  deleteEmployee(): Promise<any> {
    return api.employee_service.deleteEmployee(this.employeeForm.value)
          .then(resp => console.log(resp))
          .then(resp => this.router.navigate(['/employee']))
  }

}
