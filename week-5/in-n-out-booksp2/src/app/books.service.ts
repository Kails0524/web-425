// Title: Exercise 5.3
// Date: 20 Nov 2022
// Modified By: Kailee Stephens
// Description: In-N-Out Books App
// Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.


import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '1635570298',
        title: 'The Priory of the Orange Tree',
        description: ' Still unwed, Queen Sabran the Ninth must conceive a daughter to protect her realm from destruction—but assassins are getting closer to her door. Ead Duryan is an outsider at court. Ead keeps a watchful eye on Sabran, secretly protecting her with forbidden magic.Across the dark sea, Tané is forced to make a choice that could see her life unravel. Meanwhile, forces of chaos are rising from their sleep',
        numOfPages: 848,
        authors: ['Samantha Shannon']
      },
      {
        isbn: '9788416517374',
        title: 'The Invisible Life of Addie LaRue',
        description: 'In The Invisible Life of Addie LaRue, Addie LaRue is a young woman who trades her soul for immortality and a life of freedom. She will can live forever, but no one can remember her. It is a bargain she strikes with the devil out of desperation and a desire for more. Three hundred years later, Addie has learned to survive, but is still living a mostly invisible existence. Then, she walks into a small New York City bookstore, and meets a man who can remember her name and face.',
        numOfPages: 448,
        authors: ['V.E. Schwab']
      },
      {
        isbn: '9781594633119',
        title: 'The Paying Guests',
        description: 'The First World War is over and a new world is starting to take its shape. Following the brutal upheaval of the war, Frances and her mother take in lodgers to make both ends meet. The couple catapults Frances dull life to one of illicit passion, murder, and a love story hidden amidst a male-dominated society.',
        numOfPages: 576,
        authors: ['Sarah Waters']
      },
      {
        isbn: '9781501161933',
        title: 'The Seven Husbands of Evelyn Hugo',
        description: 'This hugely popular tale centers around reclusive Hollywood legend Evelyn Hugo, who chooses an unknown reporter, Monique Grant, to tell her life story. Evelyn recounts her time in the Golden Age of Hollywood, her rise to fame, and her seven marriages — revealing stunning secrets and lies.',
        numOfPages: 400,
        authors: ['Taylor Jenkins Reid']
      },
      {
        isbn: '9781449474256',
        title: 'Milk and Honey',
        description: 'The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look.',
        numOfPages: 208,
        authors: ['Rupi Kaur']
      }
    ]
   }

   //returns entire array of books
   getBooks(): Observable<IBook[]> {
    return of(this.books);
   }

   //returns individual book via loop
   getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
   }

}