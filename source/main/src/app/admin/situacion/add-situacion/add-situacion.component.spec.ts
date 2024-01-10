import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AddSituacionComponent } from "../add-allotment/add-allotment.component";
describe("AddSituacionComponent", () => {
  let component: AddSituacionComponent;
  let fixture: ComponentFixture<AddSituacionComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddSituacionComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AddSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
