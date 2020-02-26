import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  constructor(private bookService:BookService) {}

  book_title:string;
  book_author:string;
  book_category:string;

  ngOnInit(): void {}

  onSubmit() {
    console.log("Form Submit");
    const book = {
      title: this.book_title,
      author: this.book_author,
      category: this.book_category
    }
    console.log(book)
    // this.addBook.emit(book);
    this.bookService.addBook(book).subscribe(resp => {
      console.log("Book Added Successfully!",resp);

      // Resetting form 
      this.book_title = "";
      this.book_author = "";
      this.book_category = "";
      
    }, err => console.log(err));
  }
}
