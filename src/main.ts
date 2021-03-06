// <!--
// * File: main.ts
// * Author: Katona Valentin
// * Copyright: 2022, Katona Valentin
// * Group: Szoft II N
// * Date: 2022-01-20
// * Github: https://github.com/djvalee/
// * Licenc: GNU GPL
// -->

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
