/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BitacoraService } from './bitacora.service';

describe('Service: Bitacora', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitacoraService]
    });
  });

  it('should ...', inject([BitacoraService], (service: BitacoraService) => {
    expect(service).toBeTruthy();
  }));
});
