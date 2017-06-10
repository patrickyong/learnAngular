import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  label: string;
  customer: ICustomer;

  constructor() {
    this.label = 'I am';
    this.customer = {
      name: 'Chris',
      age: 12,
      gender: 'male'
    };

  }

  alert(param: string) {
      alert(param);
  }

  // this is a property
  get isMale() {
    return this.customer.gender === 'male';
  }

  changeGender() {
    this.customer.gender = this.customer.gender === 'male' ? 'female' : 'male';
  }

}

interface ICustomer {
  name: string;
  age: number;
  gender: string;
}
