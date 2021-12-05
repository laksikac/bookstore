import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  add(book_text: string): void {
    book_text = book_text.trim();
    if (!book_text) { return; }
    this.bookService.addBook({ book_text } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }

  /*delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book.id).subscribe();
  }*/
}