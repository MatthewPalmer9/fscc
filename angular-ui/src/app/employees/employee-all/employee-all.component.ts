import { Component, OnInit } from '@angular/core';
import { api } from '../../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.scss']
})
export class EmployeeAllComponent implements OnInit {

  auth: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.authenticateMe();
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
