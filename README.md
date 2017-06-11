# Learn Angular 4 with Firebase

### After you download the source code

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Notes from the class

## Intro
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


## Component
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
```html
	<input type="text" [(ngModel)]="customer.name" />
```
to use this remember go to module file and add the following
```javascript
	import { FormsModule } from '@angular/forms';

	imports: [
    		BrowserModule,
    		FormsModule
  	],
```
4. Talk about binding to event
```html
<button (click)="alert(customer.name)”>
```
You will need put blacker . This can bind to all html attribute

Now is to create firebase
Talk about firebase.google.com

Firebase login
Firebase init hosting
```javascript
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
```
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
```javascript
@Input()
  list: any[];
```
This allow other component to pass in variable

In the HTML add the following
```html
<ul>
  <li *ngFor="let item of list">
    <a [href]="item.url">{{ item.name }}</a>
  </li>
</ul>
```
To pass a list to menuList, at app.component.html add the following
<app-menu-list [list]="menulist"></app-menu-list>

Now import Output, EventEmitter to menu list component

Add this:
```typescript
@Output()
loginClicked: EventEmitter<any> = new EventEmitter();
```
Proceed to create a button on menu list
```html
<a href="#" (click)="clickLogin()">Login</a>
```
And the following method to trigger the event
```typescript
 clickLogin() {
    // fire login event
    this.loginClicked.emit();
  }
```

To call this in app.component.html
```html
<app-menu-list [title]="title" [list]="menulist" (loginClicked)="login()"></app-menu-list>
```
Then write the login() function

The emit function can pass out value, so change it to 
```typescript
  clickLogin() {
    // fire login event
    this.loginClicked.emit(2);
  }
```

To accept the value password out, change the trigger method to 
```typescript
(loginClicked)="login($event)"
```
Also change the accepting method
```typescript
  login(num: number) {
    this.loginCount = this.loginCount + num;
  }
```

Check out Augury, Chrome extension to debug angular app
Component debugging is a snap!!

In angular there is CSS scoping to component, same CSS classname will not interfere with each other components

For shared CSS class, you can set
```typescript
Import view encapsulation: 
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
```
Then update the component
```typescript
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
```

Each component has lifecycle
￼
![Alt text](https://angular.io/resources/images/devguide/lifecycle-hooks/hooks-in-sequence.png "Angular Component Lifecycle")

Most common event is ngOnInit

You can add this to app.component by implemented OnInit interface. Then move all initialisation code from constructor to ngOnInit. Useful if you want to use API call to initialise any values. 

## Service
Lets create a todo service
```
ng g s todo
```
Then in app.module.ts, add the service into provider section

After that inject todoService into constructor of the class thats going to use it
```typescript
constructor(public todoSvc: TodoService) {

  }
```
[The public attribute is to make the service available outside of the constructor]

Then you use the service in the ngOnInit
```typescript
this.todoList = this.todoSvc.getList();
```

***what you export, you can import elsewhere, such as 
```typescript
export class TodoService {
```
### Getting data from Firebase
Run the following:
```bash
npm install firebase angularfire2 --save
```
Then go to firebase console, click on add firebase web api to get the apikey

Add the apikey to module [following key is not usable]
```typescript
const config = {
    apiKey: 'yc3984cup23e24eoOWEuoqw8ueOo2u23o2u',
    authDomain: 'learnangular-21323f.firebaseapp.com',
    databaseURL: 'https://learnangular-21323f.firebaseio.com',
    projectId: 'learnangular-21323f',
    storageBucket: 'learnangular-21323f.appspot.com',
    messagingSenderId: '151742323787'
  };
```
You have to whitelist your domain to use the above apikey
https://support.google.com/firebase/answer/6400741

After that modify the Import statement
``` typescript
imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config)
  ],
```
then you have to inject the database service in your service class
``` typescript
import { AngularFireDatabase } from 'angularfire2/database';
```
and on the constructor
``` typescript
constructor(private afDb: AngularFireDatabase) { }
```
this is how to use the database
``` typescript
  getList()  {
    return this.afDb.list('/todos');
  }

  addItem(item: TodoItem) {
    this.afDb.list('/todos').push(item)
  }
```
Don't forget to change the access rule in your Firebase database

To use Firebase database, add the following
``` typescript
import { AngularFireDatabaseModule } from 'angularfire2/database'
then at import the module
imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
```
The following will not work because its a subscription to the real time DB

```
this.todoList = this.todoSvc.getList(); 
```
Please change it to 
``` typescript
this.todoSvc.getList().subscribe(list => {
      this.todoList = list;
    })
```
for the add function you can make it a subscription also
first make sure you return something from firebase
return this.afDb.list('/todos').push(item)

then on the app.component.ts

```typescript
this.todoSvc.addItem({desc: param, isCompleted: false})
    .then(() => {
      this.currentTodo = '';
    })
    .catch(err => {
      console.log(err);
    });
```
Because each item from firebase DB as a $key value which is identify the object, we will use type of any for update

At the service class
```javascript
updateItem(item: any) {
    return this.afDb.list('/todos').update(item.$key, item);
  }
```
On the component

``` Javascript
completeTask(item: any) {
    item.isCompleted = true;
    this.todoSvc.updateItem(item)
      .then(() => {
        console.log(item.$key + ' update successful');
      })
      .catch(err => console.log(err));
  }
```
Finally on the HTML do this 
``` html
<button *ngIf="!item.isCompleted" (click)="completeTask(item)">Complete</button>
```
Delete function is non trival, similar to update

## UI/ UX components
No web app is complete without proper UI even for enterprise based system. Fortunately there are tonnes of UI components created for Angular. To my suprise I found out that even VMWare and Teradata created UI frameworks for Angular so I tried out VMWare's clarity here. You can follow this blog post on Medium for detailed step-by-step

https://medium.com/@beeman/tutorial-project-clarity-and-angular-cli-50d845a24d5b

Remember since webcomponents is out of beta, you dont have to specify the version and you can use the following NPM command instead.
```bash
$ npm install --save-dev clarity-icons clarity-ui clarity-angular  @webcomponents/custom-elements mutationobserver-shim 
```

In case you don't find any liking for Clarity, there are tones of UI component as highlighted here in Stackoverflow
https://stackoverflow.com/questions/39395359/angular-2-ui-components-which-library

### Firebase calls via Web Socket 
All Firebase requests are websocket calles. If you want to look at firebase request on your browser, look for websocket tab.

## HTTP call to REST service
You are able to use Angular to call any REST API using angular/http module
Just import them into your service class and instantiate them in your constructor

Then you are able to use the following

```typescript
return this.http.get(url, options);
```
When you got the response from REST API, you have to transform the HTTP response to a JSON object. To do this import the map library from RxJS 
```typescript
import 'rxjs/add/operator/map';
```
Then change your REST API call
```typescript
return this.http.get(url).map(x => x.json());
```
To display this 
```typescript
this.jokeOfTheDay = response.value.joke;
```

### How map works and it encourages functional programming concept
For example,
```typescript
var arr = [1,2,3];

var newArr = arr.map(x => {
  return x + 1;
})

```

## Pipe
Pipe is known as Filter back in Angular JS 1.0
There are existing pipes in Angular library, for example
```
<p><b>Joke of the day</b>: {{ jokeOfTheDay  | uppercase }}</p>
```
Another useful Pipe is JsonPipe
```html
<pre>
  {{ jsonResponse | json }}
</pre>
```
Let's create our own pipe, say we have a data structure like this
```javascript
'Chris', 12
'Patrick', 30
```
And we want to always display it as ~name~ is ~age~ years old. This is a scenario we can use a pipe to do it.

To creae a new pipe, at the console type
```bash
ng g p NameAge
```
it will create name-age.pipe.ts and name-age.pipe.spec.ts

Inside the Transform method do this
```typescript
  transform(value: any, args?: any): any {

    if (!value) {
      return value;
    }

    const result: string[] = value.split(',');


    if (result.length > 1) {
      return `{result[0]} is ${result[1]} years old `;
    } else {
      return value;
    }
  }
```

to use your pipe, at the html
```html
<p> {{ 'Chris, 23' | nameAge }} </p>
```

If you want to have additional parameter to the pipe, you can add it on the Transform method by changing 
``` typescript
const separator = args || ',';
    
const result: string[] = value.split(separator);

```

Then on the HTML
```html
<p> {{ 'Sam! 33' | nameAge:'!' }} </p>
```

### Firebase authentication


app.module.ts
```typescript
import { AngularFireAuthModule } from 'angularfire2/auth';
```


```typescript
imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    ClarityModule.forRoot(),
    UiModule,
    HttpModule,
    AngularFireAuthModule
  ],
```


app.component.ts


```typescript
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
```


```typescript
constructor(
    private afAuth: AngularFireAuth,
    public todoSvc: TodoService)
```

Add this method
```typescript
loginWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
```
add this to ngOnInit()
```typescript

    this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
```
Now add a button to allow login with Google
```html
    <div>
        <pre>{{ user | json }}</pre>
        <button (click)="loginWithGoogle()">Login with Google</button>
    </div>
```

Do the same for Facebook
```typescript

  loginWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
```
Sign in using email is slightly different because you have to provide an interface for user to:
1. Sign up as new User
2. Reset password
3. Sign in

Please refer to the following blog post for detail steps
https://javebratt.com/angularfire2-authentication-ionic/


And you need the logout logic
```typescript
 logout() {
    this.afAuth.auth.signOut();
  }
```
# Further reading


learn about subscribe using pipe such as 'let item of (todo$ | async)'

### Note about import in Angular
Remember do not import everything because the result JS will be bigger

### spec file is testing class

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## UX UI



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Cmd+Shift+V