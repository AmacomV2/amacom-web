import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogInstitucionComponent } from "./form-dialog.component";


describe("FormDialogComponent", () => {
  let component: FormDialogInstitucionComponent;
  let fixture: ComponentFixture<FormDialogInstitucionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogInstitucionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
