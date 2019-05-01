import { TestBed } from '@angular/core/testing';

import { TimetrackService } from './timetrack.service';

describe('TimetrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimetrackService = TestBed.get(TimetrackService);
    expect(service).toBeTruthy();
  });
});
