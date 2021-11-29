import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Book } from './book';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {



  /** GET heroes from the server */
  /** GET heroes from the server */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(_ => this.log('fetched books')),
        catchError(this.handleError<Book[]>('getBooks', []))
      );
  }
  /** GET hero by id. Will 404 if id not found */
  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}${id}/`;
    return this.http.get<Book>(url).pipe(
      tap(_ => this.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BookService: ${message}`);
  }

  private booksUrl = 'http://localhost:8000/books/';  // URL to web api

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** PUT: update the hero on the server */
  updateBook(book: Book): Observable<any> {
    const url = `${this.booksUrl}${book.id}/`;
    return this.http.put(url,book,this.httpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
    
    );
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  /** POST: add a new hero to the server */
  addBook(book: Book): Observable<Book> {
  return this.http.post<Book>(this.booksUrl, book, this.httpOptions).pipe(
    tap((newBook: Book) => this.log(`added book w/ id=${newBook.id}`)),
    catchError(this.handleError<Book>('addBook'))
  );
}
/** DELETE: delete the hero from the server */
  deleteBook(id: number): Observable<Book> {
  const url = `${this.booksUrl}${id}/`;

  return this.http.delete<Book>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted book id=${id}/`)),
    catchError(this.handleError<Book>('deleteBook'))
  );
}
/* GET heroes whose name contains search term */
  searchBooks(term: string): Observable<Book[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  const url = `${this.booksUrl}search/?_name=${term}`;
  return this.http.get<Book[]>(url).pipe(
    tap(x => x.length ?
       this.log(`found books matching "${term}"`) :
       this.log(`no books matching "${term}"`)),
    catchError(this.handleError<Book[]>('searchBooks', []))
  );
}
}