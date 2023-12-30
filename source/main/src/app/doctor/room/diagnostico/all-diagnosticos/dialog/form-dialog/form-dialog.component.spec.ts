import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogDiagnosticoComponent } from "./form-dialog.component";


describe("FormDialogComponent", () => {
  let component: FormDialogDiagnosticoComponent;
  let fixture: ComponentFixture<FormDialogDiagnosticoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogDiagnosticoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
