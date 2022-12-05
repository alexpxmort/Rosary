import { TestBed } from '@angular/core/testing';

import { TercoService } from './terco.service';

describe('TercoService', () => {
  let service: TercoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TercoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
