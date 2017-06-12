import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MenuListComponent } from './menu-list/menu-list.component';

import { TodoService } from './service/todo.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { HttpModule } from '@angular/http';
import { UiModule } from './ui/ui.module';
import { NameAgePipe } from './name-age.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';

import { AppRoutingModule } from './app-routing-module';

import {  } from '@angular/route';
import { HighlightDirective } from './highlight.directive';
import { LoginPageComponent } from './login-page/login-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

const config = {
    apiKey: 'AIzaSyBm1p-ZMzY7t9iaEEXigsszfRl2CxloJpE',
    authDomain: 'learnangular-1655f.firebaseapp.com',
    databaseURL: 'https://learnangular-1655f.firebaseio.com',
    projectId: 'learnangular-1655f',
    storageBucket: 'learnangular-1655f.appspot.com',
    messagingSenderId: '151742758787'
  };

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuListComponent,
    NameAgePipe,
    HomePageComponent,
    CustomerPageComponent,
    HighlightDirective,
    LoginPageComponent,
    SettingPageComponent,
    TodoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    ClarityModule.forRoot(),
    UiModule,
    HttpModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    TodoService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
