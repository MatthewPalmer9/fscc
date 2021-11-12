import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
import { api } from '../../services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: fb.control(''),
      password: fb.control('')
    })
  }

  userLoggedIn: any = localStorage.getItem('username');

  ngOnInit(): void {
    if(this.userLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  async onSubmit() {
    const data = this.loginForm.value;
    await api.login_service.login(data)
    .then((resp: any) => {
      localStorage.setItem("username", resp.email);
    })

    await api.login_service.authenticate({username: data.email, password: data.password})
      .then((data: any) => {
        localStorage.setItem("token", data.token);
      })

      setTimeout(() => {
        this.router.navigate(["/dashboard"]);
      }, 1000);
    console.log("FORM:", this.loginForm.value);
  }

}
