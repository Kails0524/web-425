import { IComposer } from './composer.interface';

export class Composer {
    
    composers: Array<IComposer>;
  
    // constructor with specified params
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
        return this.composers;
    }

    getComposer(composerId: number) : IComposer {
        for (let composer of this.composers) {
            if (composer.composerId === composerId) {
                return composer;
            }
        }
        return {} as IComposer;
    }
}