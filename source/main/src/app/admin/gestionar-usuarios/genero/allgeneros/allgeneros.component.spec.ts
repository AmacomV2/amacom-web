import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllGenerosComponent } from "./allgeneros.component";

describe("AllGenerosComponent", () => {
  let component: AllGenerosComponent;
  let fixture: ComponentFixture<AllGenerosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllGenerosComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
