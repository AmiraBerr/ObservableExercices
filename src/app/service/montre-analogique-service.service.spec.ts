import { TestBed } from '@angular/core/testing';

import { MontreAnalogiqueServiceService } from './montre-analogique-service.service';

describe('MontreAnalogiqueServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MontreAnalogiqueServiceService = TestBed.get(MontreAnalogiqueServiceService);
    expect(service).toBeTruthy();
  });
});
