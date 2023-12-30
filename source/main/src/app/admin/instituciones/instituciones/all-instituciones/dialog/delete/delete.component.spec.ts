import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteInstitucionComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteInstitucionComponent;
  let fixture: ComponentFixture<DeleteInstitucionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteInstitucionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
