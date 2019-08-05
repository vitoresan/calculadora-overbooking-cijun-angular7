import { TestBed } from '@angular/core/testing';

import { OverbookingService } from './overbooking.service';

describe('OverbookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverbookingService = TestBed.get(OverbookingService);
    expect(service).toBeTruthy();
  });
});
