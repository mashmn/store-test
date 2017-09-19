import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TodosService {

  getTodos() {
    const todos = [{id: 1, title: "Learn @ngrx/store", completed: false}, {id: 2, title: "Learn @ngrx/effects", completed: false}]
    return Observable.timer(1000).mapTo(todos)
  }

}