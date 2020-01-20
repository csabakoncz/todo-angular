import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './app-state';
import { AppStoreService, AppAction } from './app-store.service';

@Component({
  selector: 'Todo',
  template: `
    <p [ngClass]="{'completed-todo':todo.completed}" (click)="clicked()">
       {{todo.text}}
    </p>
  `,
  styles: []
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo

  constructor(private appStoreService: AppStoreService) {

  }

  ngOnInit() {
  }

  clicked(){
    this.appStoreService.store.dispatch({type:AppAction.TODO_TOGGLE, todo: this.todo})
  }
}
