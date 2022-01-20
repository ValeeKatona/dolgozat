// <!--
// * File: app.module.ts
// * Author: Katona Valentin
// * Copyright: 2022, Katona Valentin
// * Group: Szoft II N
// * Date: 2022-01-20
// * Github: https://github.com/djvalee/
// * Licenc: GNU GPL
// -->

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
