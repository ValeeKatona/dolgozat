// <!--
// * File: app.component.ts
// * Author: Katona Valentin
// * Copyright: 2022, Katona Valentin
// * Group: Szoft II N
// * Date: 2022-01-20
// * Github: https://github.com/djvalee/
// * Licenc: GNU GPL
// -->

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  result!: number;

  constructor() {}
  Calculate(val1:string, val2:string){
    this.result= parseFloat(val1) / parseFloat(val2) **2;
  }
  ngOnInit(): void {   
  }
}
