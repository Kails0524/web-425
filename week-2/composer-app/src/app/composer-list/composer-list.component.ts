import { Component, OnInit } from '@angular/core';

// self made class to ensure composers follow format
export default class Composer {
  fullName: string;
  genre: string;

  // constructor with specified params
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    // declaring new composer objects
    this.composers = [
      new Composer('Giuseppe Verdi', 'Classical'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Clara Schumann', 'Classical'),
      new Composer('Scott Joplin', 'Jazz'),
      new Composer('Ludwig van Beethoven', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}