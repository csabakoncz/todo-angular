import { NgModule } from '@angular/core';

import { ComponentsModule, AppComponent } from './components/index';
import {AppStoreService} from './services/index';

@NgModule({
  imports: [
    ComponentsModule
  ],
  providers: [AppStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
