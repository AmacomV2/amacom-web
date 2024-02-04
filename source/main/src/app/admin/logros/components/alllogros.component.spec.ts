import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllLogrosComponent } from "./alllogros.component";

describe("AllLogrosComponent", () => {
  let component: AllLogrosComponent;
  let fixture: ComponentFixture<AllLogrosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllLogrosComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLogrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
