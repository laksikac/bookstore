import { TestBed } from '@angular/core/testing';

import { BookshService } from './booksh.service';

describe('BookshService', () => {
  let service: BookshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
