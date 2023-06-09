import { AppModule } from '../app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './app/environment/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode()
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
