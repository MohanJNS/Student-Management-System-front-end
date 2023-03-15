import { TestBed } from '@angular/core/testing';

import { SingleNoticeService } from './single-notice.service';

describe('SingleNoticeService', () => {
  let service: SingleNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
