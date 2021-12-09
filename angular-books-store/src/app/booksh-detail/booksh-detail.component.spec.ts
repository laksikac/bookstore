import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshDetailComponent } from './booksh-detail.component';

describe('BookshDetailComponent', () => {
  let component: BookshDetailComponent;
  let fixture: ComponentFixture<BookshDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookshDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
