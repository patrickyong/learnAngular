import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  list: any[];

  @Output()
  loginClicked: EventEmitter<any> = new EventEmitter();

  clickLogin() {
    // fire login event
    this.loginClicked.emit(2);
  }

  constructor() { }

  ngOnInit() {
  }

}
