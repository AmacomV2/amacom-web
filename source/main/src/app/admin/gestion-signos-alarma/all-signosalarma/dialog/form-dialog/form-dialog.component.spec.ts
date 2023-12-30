import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogSignoAlarmaComponent } from "./form-dialog.component";


describe("FormDialogComponent", () => {
  let component: FormDialogSignoAlarmaComponent;
  let fixture: ComponentFixture<FormDialogSignoAlarmaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogSignoAlarmaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogSignoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
