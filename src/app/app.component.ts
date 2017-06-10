import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menulist = [
    { name: 'Home', url: '/home'},
    { name: 'About', url: '/about'},
    { name: 'Contact', url: '/contact'}
  ];

  title = 'Main Navigation';

  loginCount = 0;

  login(num: number) {
    this.loginCount = this.loginCount + num;
  }
}
