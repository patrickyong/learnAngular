import { Component, OnInit } from '@angular/core';

import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Main Navigation';

  loginCount = 0;

  menuList = [];

  todoList = [];

  ngOnInit() {
    this.menuList = [
        { name: 'Home', url: '/home'},
        { name: 'About', url: '/about'},
        { name: 'Contact', url: '/contact'}
      ];
    this.todoList = this.todoSvc.getList();
   }

  constructor(public todoSvc: TodoService) {

  }

  login(num: number) {
    this.loginCount = this.loginCount + num;
  }
}
