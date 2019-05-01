import { TestBed, async, inject } from '@angular/core/testing';

import { JiraGuard } from './jira.guard';

describe('JiraGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JiraGuard]
    });
  });

  it('should ...', inject([JiraGuard], (guard: JiraGuard) => {
    expect(guard).toBeTruthy();
  }));
});
