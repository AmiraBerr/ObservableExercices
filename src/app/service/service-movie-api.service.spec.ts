import { TestBed } from '@angular/core/testing';

import { ServiceMovieApiService } from './service-movie-api.service';

describe('ServiceMovieApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceMovieApiService = TestBed.get(ServiceMovieApiService);
    expect(service).toBeTruthy();
  });
});
