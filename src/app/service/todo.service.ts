import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }

  getList(): TodoItem[]  {
    // get to get todo from API

    return [
      { desc: 'read book', isCompleted: false},
      { desc: 'finish project', isCompleted: false},
      { desc: 'feed dog', isCompleted: true}
    ]
  }

}

interface TodoItem {
  desc: string;
  isCompleted?: boolean;
}
