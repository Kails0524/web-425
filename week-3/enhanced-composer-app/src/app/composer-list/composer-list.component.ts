/**
 * Title: composer-list.component.ts
 * Author: Kailee Stephens
 * Date: 11/06/2022
 * Description: Composer list component; displays a list of composers
 */

 import { Component, OnInit } from '@angular/core';
 import { IComposer } from '../composer.interface';
 import { Composer } from '../composer.class'
 
 
 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })
 export class ComposerListComponent implements OnInit {
 
   composers: Array<IComposer>;
 
   constructor() {
     this.composers = new Composer().getComposers();
   }
 
   ngOnInit(): void {
   }
 
 }