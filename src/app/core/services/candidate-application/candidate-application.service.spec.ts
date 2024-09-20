import { TestBed } from '@angular/core/testing';

import { CandidateApplicationService } from './candidate-application.service';

describe('CandidateApplicationService', () => {
  let service: CandidateApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
