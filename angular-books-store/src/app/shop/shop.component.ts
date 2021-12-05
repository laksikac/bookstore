import { Component, OnInit } from '@angular/core';
import { Book} from '../book';
import { BookService } from '../book.service';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }
  books$!: Observable<Book[]>;
  private searchTerms = new Subject<string>();


  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.books$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.bookService.searchBooks(term)),
    );
  }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  
  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book.id).subscribe();
  }
  add(book_text: string): void {
    book_text = book_text.trim();
    if (!book_text) { return; }
    
      
  }

}