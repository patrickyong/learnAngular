import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  template: `
    <nav>
      <section class="sidenav-content">
        <a routerLink="/todo" class="nav-link">Todo</a>
        <section class="nav-group collapsible">
          <input id="tabexample1" type="checkbox">
          <label for="tabexample1">Content</label>
          <ul class="nav-list">
              <li><a routerLink="/home" class="nav-link">Home</a></li>
              <li><a routerLink="/customer/Chris" class="nav-link">Customers</a></li>
              <li><a [routerLink]="['/customer', 'patrick']" 
              [queryParams]="{nickName: 'pat', age: '23'}" class="nav-link">Patrick</a></li>
          </ul>
        </section>
        <section class="nav-group collapsible">
          <input id="tabexample2" type="checkbox">
          <label for="tabexample2">System</label>
          <ul class="nav-list">
            <li><a routerLink="/login" class="nav-link">Login</a></li>
            <li><a routerLink="/settings" class="nav-link">Settings</a></li>
          </ul>
        </section>
      </section>
    </nav>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
