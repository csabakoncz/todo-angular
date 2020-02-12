import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ComponentsModule, AppComponent } from './components/index';
import {AppStoreService} from './services/index';

declare const SystemJS: any
declare const __moduleName: any

const routes: Routes=[
  {
    path: 'subfooter',
    loadChildren: () => {
      var mp
      if(window['SystemJS']){
        // https://github.com/systemjs/systemjs/blob/0.21/docs/system-api.md#systemjsimportmodulename--normalizedparentname---promisemodule
        mp=SystemJS.import('./components/subfooter.module',__moduleName)
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
