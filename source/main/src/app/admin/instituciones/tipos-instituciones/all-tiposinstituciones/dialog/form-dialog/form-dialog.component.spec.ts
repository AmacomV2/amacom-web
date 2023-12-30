import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogTipoInstitucionComponent } from "./form-dialog.component";


describe("FormDialogComponent", () => {
  let component: FormDialogTipoInstitucionComponent;
  let fixture: ComponentFixture<FormDialogTipoInstitucionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogTipoInstitucionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogTipoInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
