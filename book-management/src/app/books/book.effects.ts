import { Injectable } from '@angular/core';
import * as bookActions from './book.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookService } from './book.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BookEffects {
  // This is an NgRx Effect that responds to 'AddBook' actions.
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      // Listen for actions of type 'AddBook'
      ofType(bookActions.AddBook),

      // For each 'AddBook' action, call 'addBook' on the book service.
      // 'mergeMap' allows multiple concurrent 'addBlock' calls.
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
          map((book) => bookActions.AddBookSuccess(book)),

          // If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error.
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private bookService: BookService) {}
}
