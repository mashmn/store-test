import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";

// import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "../reducers/todos.reducer";
import * as actions from "./../actions/todos.action";
import { TodosService } from "../services/todos.service";

@Injectable()
export class TodosEffects {
  constructor( private actions$ : Actions, 
               private todosService : TodosService ) {
  }

  @Effect() 
  getTodos$ = this.actions$
    .ofType(actions.GET_TODOS)
    .switchMap(action =>
      this.todosService.getTodos()
           .map(todos => ({type: actions.GET_TODOS_SUCCESS, payload: todos}))
           .catch(() => Observable.of({type: actions.GET_TODOS_ERROR})));
}