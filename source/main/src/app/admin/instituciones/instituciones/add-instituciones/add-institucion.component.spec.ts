import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AddInstitucionComponent } from "./add-institucion.component";
describe("AddInstitucionComponent", () => {
  let component: AddInstitucionComponent;
  let fixture: ComponentFixture<AddInstitucionComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddInstitucionComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
