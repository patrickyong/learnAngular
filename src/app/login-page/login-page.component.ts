import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  customerName;
  constructor() { }

  ngOnInit() {
    this.customerName = 'Hi';
  }

  submitForm(frm: any) {
    console.log(frm.value);
    console.log(frm.valid);
  }
}
