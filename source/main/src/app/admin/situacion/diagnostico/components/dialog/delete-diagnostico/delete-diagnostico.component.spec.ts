import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DeleteDiagnosticoComponent } from "./delete-diagnostico.component";

describe("DeleteComponent", () => {
  let component: DeleteDiagnosticoComponent;
  let fixture: ComponentFixture<DeleteDiagnosticoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DeleteDiagnosticoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
