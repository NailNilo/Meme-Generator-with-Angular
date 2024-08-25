/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemesServiceService } from './memesService.service';

describe('Service: MemesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemesServiceService]
    });
  });

  it('should ...', inject([MemesServiceService], (service: MemesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
