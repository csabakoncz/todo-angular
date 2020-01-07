import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { VisibleTodoListComponent } from './visible-todo-list.component';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    VisibleTodoListComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
