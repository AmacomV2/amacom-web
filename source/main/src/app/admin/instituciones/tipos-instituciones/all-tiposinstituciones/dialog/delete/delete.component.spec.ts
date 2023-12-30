import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteTipoInstitucionComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteTipoInstitucionComponent;
  let fixture: ComponentFixture<DeleteTipoInstitucionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteTipoInstitucionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTipoInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
