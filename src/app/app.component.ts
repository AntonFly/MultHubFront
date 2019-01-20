import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template:
            `<div>
              <app-bar></app-bar>
              <router-outlet></router-outlet>
            </div>`
})
export class AppComponent implements OnInit {
  title = 'LABA 4';
  time: string;

  constructor() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {

  }
}
