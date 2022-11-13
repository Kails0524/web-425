/**
 * Title: composer-details.component.ts
 * Author: Kailee Stephens
 * Date: 11/06/2022
 * Description: Composer details component (Composer details page)
 */


 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
 import { IComposer } from '../composer.interface';
 import { ComposerService } from '../composer.service';
 
 @Component({
   selector: 'app-composer-details',
   templateUrl: './composer-details.component.html',
   styleUrls: ['./composer-details.component.css']
 })
 export class ComposerDetailsComponent implements OnInit {
 
   composerId: number;
   composer!: IComposer;
 

    // Access the values we pass to a route
    // pass in the activated route
    // access the URL parameters
    // Passes parameters to route
	constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!,10);
 
     if (this.composerId) {
       this.composer = this.composerService.getComposer(this.composerId)!;
     }
   }
 
   ngOnInit(): void {
 
   }
 
 }