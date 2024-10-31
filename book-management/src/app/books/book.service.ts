import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  //Connect to APIs here.
  addBook(book: Book): Observable<Book> {
    // const err = new Error('Dummy error');
    // return throwError(() => err);

    //Success response
    return of(book);
  }
}
