import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogSituacionComponent } from "./form-dialog.component";
describe("FormDialogComponent", () => {
  let component: FormDialogSituacionComponent;
  let fixture: ComponentFixture<FormDialogSituacionComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogSituacionComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
