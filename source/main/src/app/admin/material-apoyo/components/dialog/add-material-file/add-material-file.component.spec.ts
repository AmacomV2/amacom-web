/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddMaterialFileComponent } from './add-material-file.component';

describe('AddMaterialFileComponent', () => {
  let component: AddMaterialFileComponent;
  let fixture: ComponentFixture<AddMaterialFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaterialFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
