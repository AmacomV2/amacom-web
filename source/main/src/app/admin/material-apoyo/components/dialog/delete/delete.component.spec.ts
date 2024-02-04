import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteMaterialComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteMaterialComponent;
  let fixture: ComponentFixture<DeleteMaterialComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteMaterialComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
