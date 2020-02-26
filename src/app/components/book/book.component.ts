import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/Models/Book';
import { BookService } from 'src/app/services/book.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // @Output() onDelete():EventEmitter<any> = new EventEmitter();
  books: Book[];
  id:number;
  constructor(private bookService:BookService, private _shared_data:SharedDataService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(bks => {
      // console.log(bks);
      this.books = bks;
      // console.log(this.books);
    },err => console.log(err));
  }

  // Add Book
  addBook(book){
    console.log("addBook from Book Component");
    return this.bookService.addBook(book).subscribe(resp =>{
      this.books.push(book);
      console.log("Book added",resp);
    }, err => console.log(err));
  }

  // Edit Book
  editBook(book:Book){
    this._shared_data.changeId(book.id);
  }

  // Delete Book
  deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe(resp => {
      this.books = this.books.filter( bk => bk.id != id);
      console.log("Book Deleted!",resp);
    },err => console.log(err));
  }

}
