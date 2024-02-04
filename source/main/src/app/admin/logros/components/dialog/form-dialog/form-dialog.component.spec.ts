import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogGeneroComponent } from "./form-dialog.component";


describe("FormDialogComponent", () => {
  let component: FormDialogGeneroComponent;
  let fixture: ComponentFixture<FormDialogGeneroComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogGeneroComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
