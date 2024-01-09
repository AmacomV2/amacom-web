/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserCrudService } from './user-crud.service';

describe('Service: UserCrud', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCrudService]
    });
  });

  it('should ...', inject([UserCrudService], (service: UserCrudService) => {
    expect(service).toBeTruthy();
  }));
});
