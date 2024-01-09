/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstitucionesService } from './instituciones.service';

describe('Service: Instituciones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstitucionesService]
    });
  });

  it('should ...', inject([InstitucionesService], (service: InstitucionesService) => {
    expect(service).toBeTruthy();
  }));
});
