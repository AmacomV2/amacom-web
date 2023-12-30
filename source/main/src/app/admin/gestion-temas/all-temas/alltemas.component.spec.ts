import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllTemasComponent } from "./alltemas.component";

describe("AllTemasComponent", () => {
  let component: AllTemasComponent;
  let fixture: ComponentFixture<AllTemasComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllTemasComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
