import { Component } from '@angular/core';
import {AppStoreService, AppAction} from './app-store.service'

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1 (click)="clicked()">App title: {{title}}</h1>
    <AddTodo></AddTodo>
    <VisibleTodoList></VisibleTodoList>
    <Footer></Footer>
  </div>
  `,
  styles: []
})
export class AppComponent {
  _title = 'angular-ride';

  constructor(private storeStore: AppStoreService){
    console.log('appStore = ', storeStore)

    this.updateTitle()

    storeStore.store.subscribe(()=>this.updateTitle())
  }

  updateTitle(){
    this._title = this.storeStore.store.getState().title
  }

  get title(){
    return this._title
  }

  clicked(){
    this.storeStore.store.dispatch({type: AppAction.TITLE_CLICK})
  }
}
