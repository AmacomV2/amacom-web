import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllTiposDocumentosComponent } from "./alltiposdocumentos.component";

describe("AllTiposDocumentosComponent", () => {
  let component: AllTiposDocumentosComponent;
  let fixture: ComponentFixture<AllTiposDocumentosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllTiposDocumentosComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTiposDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
