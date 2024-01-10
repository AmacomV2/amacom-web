import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AllSituacionesComponent } from "./all-situaciones.component";
describe("AllSituacionesComponent", () => {
  let component: AllSituacionesComponent;
  let fixture: ComponentFixture<AllSituacionesComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllSituacionesComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AllSituacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
