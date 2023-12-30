import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllTiposInstitucionesComponent } from "./alltiposinstituciones.component";

describe("AllTiposInstitucionesComponent", () => {
  let component: AllTiposInstitucionesComponent;
  let fixture: ComponentFixture<AllTiposInstitucionesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllTiposInstitucionesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTiposInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
