import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllInstitucionesComponent } from "./allinstituciones.component";

describe("AllInstitucionesComponent", () => {
  let component: AllInstitucionesComponent;
  let fixture: ComponentFixture<AllInstitucionesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllInstitucionesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
