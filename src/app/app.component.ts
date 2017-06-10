import { Component, OnInit } from '@angular/core';

import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Todos';

  loginCount = 0;

  menuList;
  todoList;
  currentTodo;

  ngOnInit() {
    this.menuList = [
        { name: 'Home', url: '/home'},
        { name: 'About', url: '/about'},
        { name: 'Contact', url: '/contact'}
      ];

    this.todoSvc.getList().subscribe(list => {
      this.todoList = list;
    })
   }

  constructor(public todoSvc: TodoService) {

  }

  login(num: number) {
    this.loginCount = this.loginCount + num;
  }

  addItem(param: string) {
    this.todoSvc.addItem({desc: param, isCompleted: false})
    .then(() => {
      this.currentTodo = '';
    })
    .catch(err => {
      console.log(err);
    });

  }

  completeTask(item: any) {
    item.isCompleted = true;
    this.todoSvc.updateItem(item)
      .then(() => {
        console.log(item.$key + ' update successful');
      })
      .catch(err => console.log(err));
  }

  deleteTask(item: any) {

    this.todoSvc.deleteItem(item)
      .then(() => {
        console.log(item.$key + ' delete successful');
      })
      .catch(err => console.log(err));
  }

}
