import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }

  confirm(): void {
    
  }

}
