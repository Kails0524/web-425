  // Title: Assignment 6.4 - Input Properties
  // Author: Professor Krasso
  // Date: 27 Nov 2022
  // Modified By: Kailee Stephens
  // Description: GPA Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

  import { Component, OnInit } from '@angular/core';
  import { ITranscript } from '../transcript.interface';
  
  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {
  
    transcriptEntry: ITranscript;
  
    selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  
    transcriptEntries: Array<ITranscript> = [];
  
    gpaTotal: number = 0;
  
    constructor() {
      this.transcriptEntry = {} as ITranscript;
  
     }
  
    ngOnInit(): void {
    }
  
    //saves entry
    saveEntry() {
      this.transcriptEntries.push(this.transcriptEntry)
      this.transcriptEntry = {} as ITranscript;
    }
  
    //calculates gpa
    calculateResults() {
      let gpa: number = 0;
  
      for (let entry of this.transcriptEntries) {
        switch (entry.grade) {
            case 'A':
            gpa += 4.0;
            break;
          case 'A-':
            gpa += 3.7;
            break;
          case 'B+':
            gpa += 3.33;
            break;
          case 'B':
            gpa += 3.00;
            break;
          case 'B-':
            gpa += 2.70;
            break;
          case 'C+':
            gpa += 2.30;
            break;
          case 'C':
            gpa += 2.00;
            break;
          case 'C-':
            gpa += 1.70;
            break;
          case 'D+':
            gpa += 1.30;
            break;
          case 'D':
            gpa += 1.00;
            break;
          case 'D-':
            gpa += .70;
            break;
          default:
            gpa += 0.00;
            break;
          }
      }
  
      console.log(gpa);
      this.gpaTotal = gpa / this.transcriptEntries.length;
      console.log(this.gpaTotal);
    }
  
    clearEntries() {
      this.transcriptEntries = [];
      this.gpaTotal = 0;
  
    }
  
  }