import { Component, OnInit } from '@angular/core';

import { TodoService } from './service/todo.service';

import { NameAgePipe } from './name-age.pipe';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


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
  jokeOfTheDay;
  user;
  signInEmail;
  signInPassword;

  ngOnInit() {

    this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
    });

    this.menuList = [
        { name: 'Home', url: '/home'},
        { name: 'About', url: '/about'},
        { name: 'Contact', url: '/contact'}
      ];

    this.todoSvc.getList().subscribe(list => {
      this.todoList = list;
    })

    this.todoSvc.getJokes().subscribe((response: any) => {
      this.jokeOfTheDay = response.value.joke;
      console.log(response.value.joke);
    });
   }

  constructor(
    private afAuth: AngularFireAuth,
    public todoSvc: TodoService) {

  }

  loginWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
  }

  loginWithEmail(newEmail: string, newPassword: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(newEmail, newPassword);
  }

  logout() {
    this.afAuth.auth.signOut();
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
