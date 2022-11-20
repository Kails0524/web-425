import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { BookListComponent } from '../book-list/book-list.component';



@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {


  // book!: Observable<IBook>;
  //
    book!: IBook;
    // IBook: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  
  
    constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IBook) {
      // BookListComponent.showBookDetails()
      // this.book = data.IBook;
  
      // this.book.isbn = data.isbn;
      // this.book.authors = data.authors;
  
    }
  
    ngOnInit(): void {
    }
  
  }