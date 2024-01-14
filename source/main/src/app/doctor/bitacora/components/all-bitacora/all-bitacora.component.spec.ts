import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBitacoraComponent } from './all-bitacora.component';

describe('AllBitacoraComponent', () => {
  let component: AllBitacoraComponent;
  let fixture: ComponentFixture<AllBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBitacoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
