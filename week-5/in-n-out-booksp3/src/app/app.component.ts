// Title: Exercise 5.2 - Navigation and Layout
// Date: 20 Nov 2022
// Modified By: Kailee Stephens
// Description: In-N-Out Books App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

//provides a variable to use globally for the assignment title.
assignment: string;

constructor() {
  this.assignment = 'Exercise 5.3 - Navigation & Layout'
}
}