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
    this.label = 'my name';
    
    this.customer = {
      name: 'Chris',
      age: 12,
      gender: 'male'
    };

  }

  alert(param: string)
  {
      alert(param);
  }

  isMale()
  {
    return this.customer.gender == "male";
  }

  male()
  {
    this.customer.gender = "male";
  }

  female()
  {this.customer.gender = "female";}
}

interface ICustomer {
  name: string;
  age: number;
  gender: string;
}
