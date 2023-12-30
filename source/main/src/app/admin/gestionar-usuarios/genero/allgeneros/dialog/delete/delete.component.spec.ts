import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteGeneroComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteGeneroComponent;
  let fixture: ComponentFixture<DeleteGeneroComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteGeneroComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
