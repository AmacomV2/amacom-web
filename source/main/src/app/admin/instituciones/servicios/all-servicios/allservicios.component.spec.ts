import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllServiciosComponent } from "./allservicios.component";

describe("AllServiciosComponent", () => {
  let component: AllServiciosComponent;
  let fixture: ComponentFixture<AllServiciosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllServiciosComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
