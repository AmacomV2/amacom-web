import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogServicioComponent } from "./form-dialog.component";


describe("FormDialogComponent", () => {
  let component: FormDialogServicioComponent;
  let fixture: ComponentFixture<FormDialogServicioComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogServicioComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
