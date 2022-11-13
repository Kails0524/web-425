/**
 * Title: composer-list.component.ts
 * Author: Kailee Stephens
 * Date: 11/06/2022
 * Description: Composer list component; displays a list of composers
 */

 import { Component, OnInit } from '@angular/core';
 import { IComposer } from '../composer.interface';
 import { ComposerService} from '../composer.service';
 
 
 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })
 export class ComposerListComponent implements OnInit {
  //create a composer property
   composers: Array<IComposer>;
    
   //composer array
   constructor(private composerService: ComposerService) {
     this.composers = this.composerService.getComposers()
   }
 
   ngOnInit(): void {
   }
 
 }