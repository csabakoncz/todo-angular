import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppStoreService , AppAction} from './app-store.service';

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
export class AddTodoComponent implements OnInit {
  todoText: string;

  constructor(private appStoreService: AppStoreService){
  }

  ngOnInit() {
  }

  submit(data){
    console.log('creating Todo with data', data)

    this.appStoreService.store.dispatch({
      type: AppAction.ADD_TODO,
      text: this.todoText
    })

    this.todoText = ''
  }

}
