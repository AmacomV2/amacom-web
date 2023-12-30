import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllMaterialComponent } from "./allmaterial.component";

describe("AllMaterialComponent", () => {
  let component: AllMaterialComponent;
  let fixture: ComponentFixture<AllMaterialComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllMaterialComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
