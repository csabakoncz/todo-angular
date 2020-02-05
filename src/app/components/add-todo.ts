import { Component } from '@angular/core';
import { AppStoreService } from '../services/index';
import { Actions } from '../actions/index';


@Component({
  selector: 'AddTodo',
  template: `
  <form (submit)="submit()" >
    <input type="text" placeholder="enter text" [(ngModel)]="todoText" name="text">
    <button type="submit">Add todo</button>
  </form>
  `,
  styles: []
})
export class AddTodoComponent {
  todoText: string;

  constructor(private appStoreService: AppStoreService){
  }

  submit(){

    this.appStoreService.store.dispatch(Actions.addTodo(this.todoText))

    this.todoText = ''
  }

}
