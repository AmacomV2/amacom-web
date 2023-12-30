import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogTipoDocumentoComponent } from "./form-dialog.component";


describe("FormDialogComponent", () => {
  let component: FormDialogTipoDocumentoComponent;
  let fixture: ComponentFixture<FormDialogTipoDocumentoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogTipoDocumentoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
