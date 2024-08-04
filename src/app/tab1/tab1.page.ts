import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  counter: number = 0
  constructor() { }

  incrementPressed() {
    this.counter++
  }

  decrementPressed() {
    this.counter--
  }

  decrementReset() {
    this.counter = 0
  }
}
