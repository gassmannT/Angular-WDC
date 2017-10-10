import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public title: string;

  constructor() { }

  ngOnInit() {
    this.title = "Hallo WDC";
  }
}
