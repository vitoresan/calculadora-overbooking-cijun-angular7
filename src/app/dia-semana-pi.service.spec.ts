import { TestBed } from '@angular/core/testing';

import { DiaSemanaPIService } from './dia-semana-pi.service';

describe('DiaSemanaPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiaSemanaPIService = TestBed.get(DiaSemanaPIService);
    expect(service).toBeTruthy();
  });
});
