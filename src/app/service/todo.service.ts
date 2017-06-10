import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TodoService {

  constructor(private afDb: AngularFireDatabase) { }

  getList()  {
    return this.afDb.list('/todos');
  }

  addItem(item: TodoItem) {
    return this.afDb.list('/todos').push(item)
  }

  updateItem(item: any) {
    return this.afDb.list('/todos').update(item.$key, item);
  }

  deleteItem(item: any) {
    return this.afDb.list('/todos').remove(item.$key);
  }

}

interface TodoItem {
  desc: string;
  isCompleted?: boolean;
}
