import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ViewSituacionComponent } from "../edit-allotment/edit-allotment.component";
describe("ViewSituacionComponent", () => {
  let component: ViewSituacionComponent;
  let fixture: ComponentFixture<ViewSituacionComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ViewSituacionComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
