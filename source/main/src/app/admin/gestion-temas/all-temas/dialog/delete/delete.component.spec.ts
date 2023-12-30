import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteTemaComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteTemaComponent;
  let fixture: ComponentFixture<DeleteTemaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteTemaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
