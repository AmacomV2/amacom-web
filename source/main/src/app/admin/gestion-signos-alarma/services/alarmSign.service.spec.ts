/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlarmSignService } from './alarmSign.service';

describe('Service: AlarmSign', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlarmSignService]
    });
  });

  it('should ...', inject([AlarmSignService], (service: AlarmSignService) => {
    expect(service).toBeTruthy();
  }));
});
