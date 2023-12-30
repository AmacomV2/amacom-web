import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormDialogTemaComponent } from "./form-dialog.component";


describe("FormDialogComponent", () => {
  let component: FormDialogTemaComponent;
  let fixture: ComponentFixture<FormDialogTemaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDialogTemaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
