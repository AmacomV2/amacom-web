import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllDiagnosticosComponent } from "./alldiagnosticos.component";

describe("AllDiagnosticosComponent", () => {
  let component: AllDiagnosticosComponent;
  let fixture: ComponentFixture<AllDiagnosticosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllDiagnosticosComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDiagnosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
