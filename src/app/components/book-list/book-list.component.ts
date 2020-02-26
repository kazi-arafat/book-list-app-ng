import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Book } from 'src/Models/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() book:Book;
  @Output() deleteBook:EventEmitter<any> = new EventEmitter();
  @Output() editBook:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(bk:Book){
    console.log("on Delete",bk);
    if(confirm(`Are You sure to delete "${bk.title}" by ${bk.author}?`)){
      this.deleteBook.emit(bk.id);
    }
  }

  onEdit(bk:Book){
    this.editBook.emit(bk);
  }

}
