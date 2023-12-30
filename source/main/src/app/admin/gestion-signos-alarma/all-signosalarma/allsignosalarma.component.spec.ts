import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllSignosAlarmaComponent } from "./allsignosalarma.component";

describe("AllSignosAlarmaComponent", () => {
  let component: AllSignosAlarmaComponent;
  let fixture: ComponentFixture<AllSignosAlarmaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllSignosAlarmaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSignosAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
