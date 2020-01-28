import { Injectable } from '@angular/core';
import {Store, createStore} from 'redux'
import { AppState } from '../model/index';
import { appReducer } from '../reducers/index';


@Injectable()
export class AppStoreService {
  store: Store<AppState>
  constructor() {
    this.store = createStore(appReducer)
  }
}
