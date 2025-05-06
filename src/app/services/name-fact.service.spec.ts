import { TestBed } from '@angular/core/testing';

import { NameFactService } from './name-fact.service';

describe('NameFactService', () => {
  let service: NameFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
