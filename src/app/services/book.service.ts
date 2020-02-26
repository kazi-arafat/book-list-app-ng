import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/Models/Book';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUri:string = 'http://localhost:5000/api/books';
  // private httpOption = new HttpHeaders({})
  constructor(private http:HttpClient) { }

  // Get all the books
  getBooks(): Observable<Book[]>{
    const getBookURI:string = `${this.bookUri}/GET`;
    console.log(getBookURI);
    return this.http.get<Book[]>(`${getBookURI}`);
  }

  // Get one book based on id
  getBook(id:number): Observable<Book>{
    const getBookURI:string = `${this.bookUri}/GET/${id}`;
    console.log(getBookURI);
    return this.http.get<Book>(`${getBookURI}`);
  }

  // Add Book
  addBook(book):Observable<Book>{
    const postBookURI:string = `${this.bookUri}/POST`;
    console.log(postBookURI);
    return this.http.post<Book>(postBookURI, book, httpOptions);
  }

  // Edit book based on id
  editBook(id:number, book):Observable<Book>{
    const editBookURI = `${this.bookUri}/PUT/${id}`;
    console.log(editBookURI);
    return this.http.put<Book>(editBookURI,book,httpOptions);
  }

  // Delete Book
  deleteBook(id):Observable<Book>{
    const deleteURI = `${this.bookUri}/DELETE/${id}`;
    console.log(deleteURI)
    return this.http.delete<Book>(deleteURI);
  }

}
