import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { BookshService } from '../booksh.service';


@Component({
  selector: 'app-booksh-detail',
  templateUrl: './booksh-detail.component.html',
  styleUrls: ['./booksh-detail.component.css']
})
export class BookshDetailComponent implements OnInit {
  @Input() book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bookshService: BookshService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBook();
  }
  
  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookshService.getBook(id)
      .subscribe(book => this.book = book);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.book) {
      this.bookshService.updateBook(this.book)
        .subscribe(() => this.goBack());
    }
  }
}
