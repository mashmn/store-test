import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { getTodos } from "app/reducers/todos.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Store test';
  todos : Observable<any>;
  
    constructor( private store : Store<any> ) {
      this.store.dispatch(getTodos());
      this.todos = store.select("todos");
    }
}
