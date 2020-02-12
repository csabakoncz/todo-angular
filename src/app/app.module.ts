import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ComponentsModule, AppComponent } from './components/index';
import {AppStoreService} from './services/index';

declare const SystemJS: any

const routes: Routes=[
  {
    path: 'subfooter',
    loadChildren: () => {
      var mp
      if(window['SystemJS']){
        //TODO: learn to make relative imports with SystemJS
        mp=SystemJS.import('app/components/subfooter.module')
      }
      else{
        mp = import('./components/subfooter.module')
      }
      return mp.then(m => m.SubfooterModule)
    }
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      useHash: true
    }),
    ComponentsModule
  ],
  providers: [AppStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
