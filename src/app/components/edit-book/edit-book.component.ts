import { Component, OnInit } from "@angular/core";
import { Book } from "src/Models/Book";
import { BookService } from "src/app/services/book.service";
import { SharedDataService } from "src/app/services/shared-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.css"]
})
export class EditBookComponent implements OnInit {
  books: Book[];
  bookId: number;
  constructor(
    private bookService: BookService,
    private _shared_data: SharedDataService,
    private router: Router
  ) {}
  book_title: string;
  book_author: string;
  book_category: string;

  ngOnInit(): void {
    this._shared_data.currId.subscribe(bkId => (this.bookId = bkId));
    this.bookService.getBook(this.bookId).subscribe(
      resp => {
        console.log(resp);
        this.book_title = resp.title;
        this.book_author = resp.author;
        this.book_category = resp.category;
      },
      err => console.log(err)
    );
  }
  // Edit
  onSubmit() {
    console.log("Edit Book");
    const book = {
      title: this.book_title,
      author: this.book_author,
      category: this.book_category
    };
    this.bookService.editBook(this.bookId, book).subscribe(
      bk => {
        console.log('Edited Successfully',bk);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }
}
