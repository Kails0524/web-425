import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //field properties for material data table
  books: Observable<IBook[]>;
  //header for table
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  //maps to book object
  book!: IBook;

  //for entire book list
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string){
    this.book = this.booksService.getBook(isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, { data: { book: this.book, disableClose: true} });
  
  
  dialogRef.afterClosed().subscribe(result => {
    if (result === 'confirm') {
      this.book == null;
        }
      });
       console.log(this.book);
  }
  }