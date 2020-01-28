import { Component, OnInit } from '@angular/core';
import { AppStoreService } from '../services/index';
import { Todo } from '../model/index';

@Component({
  selector: 'VisibleTodoList',
  template: `
    <ul>
      <Todo *ngFor="let todo of visibleTodos" [todo]="todo"></Todo>
    </ul>
  `,
  styles: []
})
export class VisibleTodoListComponent implements OnInit {

  _visibleList: Todo[]

  constructor(private storeStore: AppStoreService){
    console.log('appStore = ', storeStore)

    this.updateView()

    storeStore.store.subscribe(()=>this.updateView())
  }

  get visibleTodos(){
    return this._visibleList
  }
  updateView(){
    this._visibleList = this.storeStore.store.getState().todos
  }

  ngOnInit() {
    function setBorder(){
      $('todo').each((i,f)=>{f.children[0].style['border']='dotted'})
    }
    setTimeout(setBorder, 3000)
  }

}
declare var $: any;
