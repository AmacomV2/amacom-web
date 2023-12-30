import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogUsuarioComponent } from "./form-dialog.component";
describe("FormDialogComponent", () => {
  let component: FormDialogUsuarioComponent;
  let fixture: ComponentFixture<FormDialogUsuarioComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogUsuarioComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
