import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-loggedin',
  templateUrl: './navbar-loggedin.component.html',
  styleUrls: ['./navbar-loggedin.component.scss']
})
export class NavbarLoggedinComponent implements OnInit {

  constructor(private router: Router) { }

  username=localStorage.getItem('username');

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {

  }

}
