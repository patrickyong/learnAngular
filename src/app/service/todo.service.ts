import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {

  constructor(
    private afDb: AngularFireDatabase,
    private http: Http) { }

  getJokes() {
    // call the API
    const url = 'https://api.icndb.com/jokes/random';
    return this.http.get(url).map(x => x.json());

  }

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
