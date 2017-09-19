import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos';
import { TodoComponent } from './components/todo';
import { TodosService } from "./services/todos.service";
import { TodosEffects } from "./effects/todos.effects";
import { todos } from "./reducers/todos.reducer";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,  
    StoreModule.forRoot({todos}),
    EffectsModule.forRoot([TodosEffects]),
  ],

  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
