import { TestBed, inject } from '@angular/core/testing';

import { TimeIntervalService } from './time-interval.service';

describe('TimeIntervalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeIntervalService]
    });
  });

  it('should be created', inject([TimeIntervalService], (service: TimeIntervalService) => {
    expect(service).toBeTruthy();
  }));
});
