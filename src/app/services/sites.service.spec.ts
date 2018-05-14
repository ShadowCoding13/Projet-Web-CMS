import { TestBed, inject } from '@angular/core/testing';

import { MySitesService } from './my-sites.service';

describe('MySitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySitesService]
    });
  });

  it('should be created', inject([MySitesService], (service: MySitesService) => {
    expect(service).toBeTruthy();
  }));
});
