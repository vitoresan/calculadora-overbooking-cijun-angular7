import { TestBed } from '@angular/core/testing';

import { IdadePiService } from './idade-pi.service';

describe('IdadePiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdadePiService = TestBed.get(IdadePiService);
    expect(service).toBeTruthy();
  });
});
