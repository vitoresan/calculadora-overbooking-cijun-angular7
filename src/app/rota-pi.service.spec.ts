import { TestBed } from '@angular/core/testing';

import { RotaPIService } from './rota-pi.service';

describe('RotaPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RotaPIService = TestBed.get(RotaPIService);
    expect(service).toBeTruthy();
  });
});
