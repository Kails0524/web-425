/**
 * Title: composer-list.component.ts
 * Author: Kailee Stephens
 * Date: 11/06/2022
 * Description: Composer list component; displays a list of composers
 */

 import { Component, OnInit } from '@angular/core';
 import { IComposer } from '../composer.interface';
 import { ComposerService } from '../composer.service';
 import { FormControl } from '@angular/forms'
 import { debounceTime } from 'rxjs';
 
 
 
 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })
 export class ComposerListComponent implements OnInit {
   // create a composer property
   composers: Array<IComposer>
   txtSearchControl = new FormControl('');
 
   // composers array
   constructor(private composerService: ComposerService) {
     this.composers = this.composerService.getComposers();
     this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val!));
 
   }
 
   ngOnInit(): void {
   }
 
   filterComposers(name: string) {
    alert(name)
  }
 
 
 }