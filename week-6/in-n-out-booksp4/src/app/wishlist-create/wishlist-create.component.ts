import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  //event emitter that adds item to wishlist
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  //instantiate new wishlist item
  constructor() {
    this.item = {} as IWishlistItem;
   }

  ngOnInit(): void {
  }

  //function called when user adds item to list
  //emits item to wishlist component
  addItem () {
    this.addItemEmitter.emit ({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }

}