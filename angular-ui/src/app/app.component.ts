import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ui';
  auth = {'username': '', 'token': ''} as any;

  constructor() {
    this.auth['username'] = localStorage.getItem('username');
    this.auth['token'] = localStorage.getItem('token');
  };

  ngOnInit(): void {
    console.log(this.auth);
  }
}
