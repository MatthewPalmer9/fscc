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

  async onSubmit(e: Event) {
    e.preventDefault();
    const data = this.loginForm.value;
    await api.login_service.login(data)
    .then((resp: any) => {
      localStorage.setItem("username", resp.email);
    })
    .catch(err => {
      const errorMsg: any = document.getElementById("error");
      errorMsg.style.display = "inline";
    })

    await api.login_service.authenticate({username: data.email, password: data.password})
      .then((data: any) => {
        if(data.token != null) {
          localStorage.setItem("token", data.token);
          this.router.navigate(["/dashboard"])
        }
      });
  }

}
