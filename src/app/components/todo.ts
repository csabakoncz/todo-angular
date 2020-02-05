import { Component, Input } from '@angular/core';
import { Todo } from '../model/index';
import { AppStoreService } from '../services/index';
import { Actions } from '../actions/index';

@Component({
  selector: 'Todo',
  template: `
    <p [ngClass]="{'completed-todo':todo.completed, 'blink': todo.blinks}" (click)="clicked()">
       {{todo.text}}
    </p>
  `,
  styles: []
})
export class TodoComponent {
  @Input()
  todo: Todo

  constructor(private appStoreService: AppStoreService) {
  }

  clicked(){
    this.appStoreService.store.dispatch(Actions.toggleTodoAnimated(this.todo))
  }
}
