import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { VisibleTodoListComponent } from './visible-todo-list.component';
import { AddTodoComponent } from './add-todo.component';
import {AppStoreService} from './app-store.service';
import { TodoComponent } from './todo.component'

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
  providers: [AppStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
