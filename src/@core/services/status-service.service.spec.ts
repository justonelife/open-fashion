import { TestBed } from '@angular/core/testing';

import { StatusService } from './status-service.service';

describe('StatusServiceService', () => {
  let service: StatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusService]
    });
    service = TestBed.inject(StatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
