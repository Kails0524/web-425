import { Injectable } from '@angular/core';
import {IComposer} from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

    // create a composer property
  composers: Array<IComposer>

  constructor() {


    this.composers = [
      {composerId: 100, fullName: "Giuseppe Verdi", genre:"Classical"},
      {composerId: 101, fullName: "Wolfgang Amadeus Mozart", genre:"Classical"},
      {composerId: 102, fullName: "Clara Schumann", genre:"Classical"},
      {composerId: 103, fullName: "Scott Joplin", genre:"Jazz"},
      {composerId: 100, fullName: "Ludwig van Beethoven", genre:"Classical"}
    ]
  }

getComposers() {
    // return 5 composers objects
    return this.composers;
  }

  getComposer(composerId: number) {
    // Loop over the composer array and return the object that matches the passed-in composerId
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    } return
  }
}




