import { TestBed } from '@angular/core/testing';

import { AleartServiceService } from './aleart-service.service';

describe('AleartServiceService', () => {
  let service: AleartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AleartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
