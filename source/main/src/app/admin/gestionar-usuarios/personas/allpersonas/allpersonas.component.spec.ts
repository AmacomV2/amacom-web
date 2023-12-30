import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllPersonasComponent } from "./allpersonas.component";

describe("AllPersonasComponent", () => {
  let component: AllPersonasComponent;
  let fixture: ComponentFixture<AllPersonasComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllPersonasComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
