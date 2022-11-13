import { Injectable } from '@angular/core';
import {IComposer} from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ComposerService {

    
  composers: Array<IComposer>
 
   // constructor parameters
  constructor() {

    this.composers = [
      {composerId: 100, fullName: "Giuseppe Verdi", genre:"Classical"},
      {composerId: 101, fullName: "Wolfgang Amadeus Mozart", genre:"Classical"},
      {composerId: 102, fullName: "Clara Schumann", genre:"Classical"},
      {composerId: 103, fullName: "Scott Joplin", genre:"Jazz"},
      {composerId: 100, fullName: "Ludwig van Beethoven", genre:"Classical"}
    ]
  }

  //function to return composer objects
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  //Function to loop over composer array and return composerId
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    } return
  }

  //Function to return a new array of composer objects using map(), linked together using pipe(), filtered with filter()
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name)> -1)));
  }

}




