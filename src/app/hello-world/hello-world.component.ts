import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  label: string;
  customer: ICustomer;

  ngOnInit() {
  }

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
