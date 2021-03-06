import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)).then(appRef=>{
    console.log('storing appRef on window')
    window['appRef'] = appRef
  });
