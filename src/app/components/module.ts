import { NgModule } from '@angular/core';
import { AppComponent } from './app';
import { FooterComponent } from './footer';
import { VisibleTodoListComponent } from './visible-todo-list';
import { AddTodoComponent } from './add-todo';
import { TodoComponent } from './todo';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    VisibleTodoListComponent,
    AddTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
})
export class ComponentsModule {
}
