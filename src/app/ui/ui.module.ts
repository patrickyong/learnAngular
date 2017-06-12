import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { ClarityModule } from 'clarity-angular';
import { Routes, RouterModule } from '@angular/router';

import { SettingPageComponent } from '../setting-page/setting-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { CustomerPageComponent } from '../customer-page/customer-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { TodoPageComponent } from '../todo-page/todo-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'todo', component: TodoPageComponent },
  { path: 'customer/:name', component: CustomerPageComponent },
  { path: 'settings', component: SettingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' }
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, MainComponent],
  exports: [
    LayoutComponent,
  ]
})
export class UiModule { }
