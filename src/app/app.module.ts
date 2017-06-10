import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MenuListComponent } from './menu-list/menu-list.component';

import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ 
    TodoService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
