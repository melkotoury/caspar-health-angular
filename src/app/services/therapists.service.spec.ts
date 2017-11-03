import { TestBed, inject } from '@angular/core/testing';

import { TherapistsService } from './therapists.service';

describe('TherapistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TherapistsService]
    });
  });

  it('should be created', inject([TherapistsService], (service: TherapistsService) => {
    expect(service).toBeTruthy();
  }));
});
