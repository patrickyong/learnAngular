# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#Notes taken in the class

Intro to Angular 4.0

Intro
Have to intro what is ES6 and Typescript
Compare ES5, ES6 and Typescript

Let’s create a new angular, in your bash shell type
ng new hello-world

ng is part of angular cli
You can get help with ng —help

You can also type ng new —help it will show you help on the new command. 

ng new hello-world —routing
Routing is one feature angular provide for handling routing

If you are using SCSS you can configure ng new command to use it as well
ng new my-first-angular-project --style=scss

Go into VS Code with “code .” at the folder from bash

Talking installing extensions
1. Angular Language Service
2. Angular 4 Typescript Snippet

You can run terminal inside Code with Control - `

Try run the project npm start
All javascript project has start command, so you don’t need the run option for npm
look at package.json
To build you have to use npm run build

Explore the project
App-root inside index.html
Explore also main.ts
Then look at app.component.ts

Angular application atonomy 
1. Module
2. Component
3. Service
4. Routing
5. Pipe
6. Directive


Component
What is a Component?
Its like User Control in ASP.NET
Each can function individually
Its a tree structure, always enter at app-root

Demo how to create a class Customer in app.component.ts and renders it on the html file

Share about customer?.name where the variable could be null

Next thing is binding variable to input controls

Share about component data binding
Always got view and component (class)
1. One way binding, use {{ customer?.name }}
2. Another one way is use [value] 
<input type="text" [value]="customer?.name"/>
3. 2 way binding 
	<input type="text" [(ngModel)]="customer.name" />
to use this remember go to module file and add the following
	
	import { FormsModule } from '@angular/forms';

	imports: [
    		BrowserModule,
    		FormsModule
  	],

4. Talk about binding to event <button (click)="alert(customer.name)”> You will need put blacker . This can bind to all html attribute

Now is to create firebase
Talk about firebase.google.com

Firebase login
Firebase init hosting

{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

Finally firebase deploy

Talk about "deploy": "ng build -prod && firebase deploy" in package.json

Let’s create a component
ng generate component hello-world
*short form ng g c hello-world

//Demo that in Code you can do code compare

Default prefix for component is always ‘app’ but you can change from the angular-cli, use the —prefix option on ng g c 

But remember to update the selector in tslint.json

Then create a menu-list component
At the import add Input, then create a property called list:any[]

@Input()
  list: any[];

This allow other component to pass in variable

In the HTML add the following

<ul>
  <li *ngFor="let item of list">
    <a [href]="item.url">{{ item.name }}</a>
  </li>
</ul>

To pass a list to menuList, at app.component.html add the following
<app-menu-list [list]="menulist"></app-menu-list>

Now import Output, EventEmitter to menu list component

Add this:
@Output()
loginClicked: EventEmitter<any> = new EventEmitter();

Proceed to create a button on menu list
<a href="#" (click)="clickLogin()">Login</a>

And the following method to trigger the event
 clickLogin() {
    // fire login event
    this.loginClicked.emit();
  }


To call this in app.component.html
<app-menu-list [title]="title" [list]="menulist" (loginClicked)="login()"></app-menu-list>

Then write the login() function

The emit function can pass out value, so change it to 
  clickLogin() {
    // fire login event
    this.loginClicked.emit(2);
  }


To accept the value password out, change the trigger method to 
(loginClicked)="login($event)"

Also change the accepting method
  login(num: number) {
    this.loginCount = this.loginCount + num;
  }


Check out Augury, Chrome extension to debug angular app
Component debugging is a snap!!

In angular there is CSS scoping to component, same CSS classname will not interfere with each other components

For shared CSS class, you can set
Import view encapsulation: 
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

Then update the component

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  encapsulation: ViewEncapsulation.None
})


Each component has lifecycle
￼


Most common event is ngOnInit

You can add this to app.component by implemented OnInit interface. Then move all initialisation code from constructor to ngOnInit. Useful if you want to use API call to initialise any values. 

##Service
Lets create a todo service
ng g s todo

Then in app.module.ts, add the service into provider section

After that inject todoService into constructor of the class thats going to use it
constructor(public todoSvc: TodoService) {

  }
[The public attribute is to make the service available outside of the constructor]

Then you use the service in the ngOnInit
this.todoList = this.todoSvc.getList();


***spec file is testing class
***what you export, you can import elsewhere, such as 
export class TodoService {



#Further reading

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
